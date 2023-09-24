from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from django.contrib.auth.models import User
from rest_framework import status
from .serializers import InventoryItemSerializer
from ..models import InventoryItem
from rest_framework import status
from .textjson import t2j
import json
#from .analyze import ask_about, random_sug

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username
        # ...

        return token

class myTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

@api_view(['GET'])
def get_url(request):
    routes = [
        "api/token",
        "api/token/refresh"
    ]
    return Response(routes)


@api_view(['POST'])
def addUser(request):
   # print("hello")
    if request.method == 'POST':
        #print("hello")
        data = request.data
        print(data)
        if not (User.objects.exists(username = data['username'])):
            user = User.objects.create_user(data['username'],data['email'], data['password'])
            user.save()
        return Response(user.email)
        #return Response(status=status.HTTP_406_NOT_ACCEPTABLE)
        
@api_view(['POST'])
def get_data(request):
    data = request.data
    print(data)
    if request.method == 'POST':
        try:
            user = User.objects.get(username=data['username'])
            print(user)
        except User.DoesNotExist:
            # Handle the case where the user does not exist
            user = None
            return Response(status = status.HTTP_404_NOT_FOUND)

        if user:
            inventory_items = InventoryItem.objects.filter(user=user)
            serializer = InventoryItemSerializer(data = inventory_items, many = True)
            if(serializer.is_valid()):
                return Response(data = serializer.data, status = status.HTTP_200_OK )
            
            # Handle the case where the user does not exist
        return Response(status = status.HTTP_404_NOT_FOUND)
    
# @api_view(['POST'])
# def login_view(request):
#     if(request.method == 'POST'):
#         return Response(status=status.HTTP_200_OK)
#     return Response(status=status.HTTP_400_BAD_REQUEST)
        
#method for adding items to the database to the voice
@api_view(['POST'])
def add_items(request):
    data = request.data
    print(data)
    current_user = request.user
    print(current_user)
    if request.method == 'POST':
        # if not current_user.is_authenticated:
        #     return Response("Authentication required", status=status.HTTP_401_UNAUTHORIZED)
        print("hello")
        text = t2j(data['text'])
        print(type(text))
        try:
            for ite in text:
                print(len(ite[0][1]))
                for i in range(len(ite[1])):
                    print(ite[1][i].item)
                    item_ = InventoryItem(
                        item = str(ite[1][i].item),
                        quantity = float(ite[1][i].quantity),
                        units = str(ite[1][i].unit)
                    )
                    item_.save()
            
            # Iterate over the list and print item details
            # for item in bill_items:
            #     print(f"Item: {item['item']}")
            #     print(f"Quantity: {item['quantity']} {item['unit']}")
            #     print("---")
            # for item in text['billitem']:
            #     print(item)
            #     item_ = InventoryItem(
    
            #         item = item['item'],
            #         quantity = item['quantity'],
            #         units = item['unit']
            #     )
                
            #     item_.save()
            return Response(status= status.HTTP_200_OK)
        except:
            return Response(status = status.HTTP_404_NOT_FOUND)
        
# @api_view       
# def get_random_suggestions(request):
#     data = request.data
#     current_user = request.user
#     if request.method == 'GET':
             

            
                
            
            
            
            
        
        