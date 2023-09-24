from django.urls import path
from .views import myTokenObtainPairView, addUser, get_data, add_items, get_random_suggestions, get_insights
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('token/', myTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('signup/', addUser),
    path('get_data/', get_data),
    path('add_item/', add_items),
    path('random_sug/', get_random_suggestions),
    path('get_insights/', get_insights)
]
