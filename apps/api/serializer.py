from rest_framework import serializers
from versatileimagefield.serializers import VersatileImageFieldSerializer

from .models import (Product, Category, Image)


class ImageSerializer(serializers.ModelSerializer):
    image = VersatileImageFieldSerializer(
        sizes=[
            ('full_size', 'url'),
            ('thumbnail', 'thumbnail__100x100'),
        ]
    )

    class Meta:
        model = Image
        fields = ['id', 'name', 'image']


class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = '__all__'


class ProductSerializer(serializers.ModelSerializer):

    image = ImageSerializer(many=True)

    class Meta:
        model = Product
        fields = '__all__'

