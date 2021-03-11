from rest_framework import viewsets

from .models import Category, Product
from .serializer import CategorySerializer, ProductSerializer
from rest_framework.permissions import AllowAny


class CategoryViewSet(viewsets.ModelViewSet):

    permission_classes = (AllowAny,)
    serializer_class = CategorySerializer
    queryset = Category.objects.all()


class ProductViewSet(viewsets.ReadOnlyModelViewSet):

    permission_classes = (AllowAny,)
    serializer_class = ProductSerializer
    queryset = Product.objects.all()

