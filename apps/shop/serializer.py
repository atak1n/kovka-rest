from rest_framework import serializers
from versatileimagefield.serializers import VersatileImageFieldSerializer

from .models import (Product, Category, Image)


class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = '__all__'


class ProductSerializer(serializers.ModelSerializer):

    class Meta:
        model = Product
        fields = '__all__'


