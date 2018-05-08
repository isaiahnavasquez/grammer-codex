from django.urls import path
from django.conf import settings
from django.conf.urls.static import static

from . import views
app_name = 'blogs'

urlpatterns = [
    path('', views.index, name='index'),
    path('<str:user_name>/<int:blog_id>/', views.view_blog, name='view_blog'),
    path('profile/<str:user_name>/', views.view_profile, name='profile'),
    path('login/', views.login_user, name='login'),
    path('home/', views.home, name='home'),
    path('register/', views.register, name='register'),
    path('logout/', views.logout_user, name='logout'),
    path('post_blog/', views.post_blog, name='post_blog'),
    path('search/', views.search_site, name='search_site'),
    path('hashtag/<str:hashtag_name>', views.hashtag, name='hashtag'),
    path('upload_profile_photo/', views.upload_profile_photo, name='upload_profile_photo'),
]
