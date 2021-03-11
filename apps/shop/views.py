from rest_framework import viewsets, generics, mixins

from .models import Category, Product, Image
from .serializer import CategorySerializer, ProductSerializer, ImageSerializer
from rest_framework.permissions import AllowAny, IsAdminUser, IsAuthenticated


class CategoryViewSet(viewsets.ModelViewSet):

    permission_classes = (AllowAny,)
    serializer_class = CategorySerializer
    queryset = Category.objects.all()


class ProductViewSet(viewsets.ReadOnlyModelViewSet):

    permission_classes = (AllowAny,)
    serializer_class = ProductSerializer
    queryset = Product.objects.all()


class ImageViewSet(viewsets.ReadOnlyModelViewSet):

    permission_classes = (AllowAny,)
    serializer_class = ImageSerializer
    queryset = Image.objects.all()


class ProductSingleView(generics.RetrieveUpdateDestroyAPIView):

    # permission_classes = (IsAuthenticated, IsAdminUser)

    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    def perform_update(self, serializer):
        category = generics.get_object_or_404(Category, id=self.request.data.get('category_id'))
        return serializer.save(category=category)


class ProductView(generics.ListCreateAPIView):

    # permission_classes = (IsAuthenticated, IsAdminUser)

    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    def perform_create(self, serializer):
        category = generics.get_object_or_404(Category, id=self.request.POST.get('category_id'))
        return serializer.save(category=category)



