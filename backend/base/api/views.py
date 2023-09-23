from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from django.contrib.auth.models import User
from rest_framework import status

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
       #if not (User.objects.exists(username = data['username'])):
        user = User.objects.create_user(data['username'],data['email'], data['password'])
        user.save()
        return Response(user.email)
        #return Response(status=status.HTTP_406_NOT_ACCEPTABLE)