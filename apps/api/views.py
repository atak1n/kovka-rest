from rest_framework.viewsets import ModelViewSet, ReadOnlyModelViewSet
from rest_framework.generics import (RetrieveUpdateDestroyAPIView, get_object_or_404, ListCreateAPIView)
from rest_framework.permissions import (
    AllowAny,
    IsAdminUser,
    IsAuthenticated,
    IsAuthenticatedOrReadOnly,
)

from .models import Category, Product, Image
from .serializer import CategorySerializer, ProductSerializer, ImageSerializer
from .permissions import IsReadOnlyOrAdmin


class CategoryViewSet(ModelViewSet):

    permission_classes = (AllowAny,)
    serializer_class = CategorySerializer
    queryset = Category.objects.all()


class ProductViewSet(ReadOnlyModelViewSet):

    permission_classes = (AllowAny,)
    serializer_class = ProductSerializer
    queryset = Product.objects.all()


class ImageViewSet(ReadOnlyModelViewSet):

    permission_classes = (AllowAny,)
    serializer_class = ImageSerializer
    queryset = Image.objects.all()


class ProductSingleView(RetrieveUpdateDestroyAPIView):

    permission_classes = (AllowAny,)

    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    def perform_update(self, serializer):
        category = get_object_or_404(Category, id=self.request.data.get('category'))
        return serializer.save(category=category)


class ProductView(ListCreateAPIView):

    permission_classes = (IsReadOnlyOrAdmin,)

    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    def perform_create(self, serializer):
        category = get_object_or_404(Category, id=self.request.data.get('category'))
        return serializer.save(category=category)



