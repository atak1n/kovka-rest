from django.contrib import admin

from .models import Image, Product, Category, ProductType

admin.site.site_header = 'KOVKA-MO.RU'

admin.site.register(Image)
admin.site.register(Category)
admin.site.register(ProductType)
admin.site.register(Product)


