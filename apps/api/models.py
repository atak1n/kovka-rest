from django.db import models
from versatileimagefield.fields import VersatileImageField, PPOIField


class Image(models.Model):
    name = models.CharField(max_length=255)
    image = VersatileImageField(
        'Image',
        upload_to='images/',
        ppoi_field='image_ppoi'
    )
    image_ppoi = PPOIField()

    def __str__(self):
        return self.name


class Category(models.Model):
    """Категория товаров"""
    name = models.CharField(max_length=200, db_index=True)
    # slug = models.SlugField(max_length=200, db_index=True, unique=True)

    class Meta:
        ordering = ('name',)
        verbose_name = 'Категория'
        verbose_name_plural = 'Категории'

    def __str__(self):
        return self.name


class ProductType(models.Model):
    """Тип продуктов"""
    pass


class Product(models.Model):
    """Продукты"""
    category = models.ManyToManyField(Category, related_name='products')
    title = models.CharField('название', max_length=200, db_index=True)
    description = models.TextField('описание', blank=True)
    image = models.ManyToManyField(Image, verbose_name='картинки', related_name='images')
    price = models.DecimalField('цена', max_digits=10, decimal_places=2)

    # slug = models.SlugField(max_length=200, db_index=True)
    # stock = models.PositiveIntegerField()
    # available = models.BooleanField(default=True)
    # created = models.DateTimeField(auto_now_add=True)
    # updated = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ('title',)
        verbose_name = 'Продукт'
        verbose_name_plural = 'Продукты'
        # index_together = (('id', 'slug'),)

    def __str__(self):
        return self.title

