from django.contrib.auth import get_user_model
User = get_user_model() 
from .serializers import UserSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions, status 
from django.views import View
from django.shortcuts import render 
from django.http import JsonResponse


class RegisterView(APIView):
    permission_classes = (permissions.AllowAny, )

    def post(self, request):
        try:
            data = request.data
            name = data['name']
            email = data['email']
            email = email.lower()
            password = data['password']
            re_password = data['re_password']
            is_banquier = data['is_banquier']  
            is_agent = data['is_agent']

            if is_banquier == 'True':
                is_banquier = True
            else:

                is_banquier = False  
            
            if is_agent == 'True':
                is_agent = True
            else:
                is_agent = False 

            if password == re_password:
                if len(password) >= 8:
                    if not User.objects.filter(email=email).exists():
                        if (not is_banquier) and (not is_agent):
                            User.objects.create_user(name=name, email=email, password=password)

                            return Response(
                                {'success': 'User created successfully'},
                                status=status.HTTP_201_CREATED
                            )
                        elif (is_banquier) and (not is_agent) :
                            User.objects.create_banquier(name=name, email=email, password=password)

                            return Response(
                                {'success': 'Banker account created successfully'},
                                status=status.HTTP_201_CREATED
                            ) 
                        else:  
                            User.objects.create_Agent(name=name, email=email, password=password)
                            return Response(
                                {'success': 'Agent account created successfully'},
                                status=status.HTTP_201_CREATED
                            ) 

                    else:
                        return Response(
                            {'error': 'User with this email already exists'},
                            status=status.HTTP_400_BAD_REQUEST
                        )
                else:
                    return Response(
                        {'error': 'Password must be at least 8 characters in length'},
                        status=status.HTTP_400_BAD_REQUEST
                    )
            else:
                return Response(
                    {'error': 'Passwords do not match'},
                    status=status.HTTP_400_BAD_REQUEST
                )
        except:
            return Response(
                {'error': 'Something went wrong when registering an account'},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )

class RetrieveUserView(APIView):
    def get(self, request, format=None):
        try:
            user = request.user
            user = UserSerializer(user)

            return Response(
                {'user': user.data},
                status=status.HTTP_200_OK
            )
        except:
            return Response(
                {'error': 'Something went wrong when retrieving user details'},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            ) 
class AllUsersView(View): 
    def get(self, request):
        all_users = User.objects.all().values()
        return JsonResponse(list(all_users), safe=False)  

class AllBankersView(View): 
    def get(self, request): 
        all_users = User.objects.all().values()
        bankers = all_users.filter(is_banquier=1).values()
        return JsonResponse(list(bankers), safe=False)  



