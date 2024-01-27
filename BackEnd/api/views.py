# Django Imports
from django.shortcuts import render

#Rest framework Imports
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

#Models e Serializers
from .models import *
from .serializers import *

@api_view(['GET'])
def index(request):
    products = Products.objects.all()
    serialized_products = ProductSerializer(products, many=True)
    return Response(serialized_products.data, status=status.HTTP_200_OK)

@api_view(['GET'])
def filter(request, query):
    products = Products.objects.filter(nome__icontains=query)
    serialized_products = ProductSerializer(products, many=True)
    if not products.exists():
        return Response(status=status.HTTP_404_NOT_FOUND)
    return Response(serialized_products.data, status=status.HTTP_200_OK)