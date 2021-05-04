from django.urls import path
from rest_framework.routers import DefaultRouter

from .views import (
    CategoryViewSet,
    ProductViewSet,
    ImageViewSet,
    ProductView,
    ProductSingleView,
    CategoryListView,
    ProductTypeListView
)

app_name = 'api'

router = DefaultRouter()
router.register(r'categories', CategoryViewSet, basename='categories')
router.register(r'products', ProductViewSet, basename='products')
router.register(r'images', ImageViewSet, basename='images')


urlpatterns = [
    path('prod/', ProductView.as_view(), name='product_lc'),
    path('prod/<int:pk>/', ProductSingleView.as_view(), name='product_rud'),
    path('prod/categories/', CategoryListView.as_view(), name='categories_list'),
    path('prod/types/', ProductTypeListView.as_view(), name='types_list'),


] + router.urls
