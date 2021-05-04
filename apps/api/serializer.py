from rest_framework import serializers
from versatileimagefield.serializers import VersatileImageFieldSerializer

from .models import (Product, Category, Image, ProductType)


class ImageSerializer(serializers.ModelSerializer):
    src = VersatileImageFieldSerializer(
        sizes=[
            ('full', 'url'),
            ('preview', 'crop__400x300'),
        ],
    )

    class Meta:
        model = Image
        fields = ['id', 'name', 'src']


class ProductSerializer(serializers.ModelSerializer):

    image = ImageSerializer()

    class Meta:
        model = Product
        fields = '__all__'


class ProductTypeSerializer(serializers.ModelSerializer):

    image = ImageSerializer()
    products = ProductSerializer(many=True)

    class Meta:
        model = ProductType
        fields = ('id', 'title', 'slug', 'category', 'image', 'products')


class CategoryProductTypesSerializer(serializers.ModelSerializer):

    # image = ImageSerializer
    product_types = ProductTypeSerializer(many=True)

    class Meta:
        model = Category
        fields = ('id', 'title', 'description', 'product_types')


class CategorySerializer(serializers.ModelSerializer):

    # image = ImageSerializer
    # product_types = ProductTypeSerializer(many=True)

    class Meta:
        model = Category
        fields = '__all__'


