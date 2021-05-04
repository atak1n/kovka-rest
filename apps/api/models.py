from django.db import models
from versatileimagefield.fields import VersatileImageField, PPOIField


class Image(models.Model):
    name = models.CharField(max_length=255, blank=True)
    src = VersatileImageField(
        'Image',
        upload_to='images/',
        ppoi_field='image_ppoi'
    )
    image_ppoi = PPOIField()

    def __str__(self):
        return self.src.name


class Category(models.Model):
    """Категория товаров"""
    title = models.CharField('название', max_length=150, db_index=True)
    slug = models.SlugField(max_length=150, db_index=True, unique=True)
    description = models.TextField('описание', max_length=400, blank=True)
    price = models.CharField('цена', max_length=50)
    image = models.ForeignKey(
        Image,
        verbose_name='изображение',
        on_delete=models.DO_NOTHING,
        related_name='category',
        blank=True,
        null=True
    )

    class Meta:
        # ordering = ('name',)
        verbose_name = 'Категория'
        verbose_name_plural = 'Категории'

    def __str__(self):
        return self.title


class ProductType(models.Model):
    """Тип продуктов"""
    title = models.CharField('название', max_length=150, db_index=True)
    slug = models.SlugField(max_length=150, db_index=True, unique=True)
    category = models.ForeignKey(
        Category,
        related_name='product_types',
        on_delete=models.CASCADE,
        default=1
    )
    image = models.ForeignKey(
        Image,
        verbose_name='изображение',
        on_delete=models.DO_NOTHING,
        blank=True,
        null=True
    )

    class Meta:
        # ordering = ('title',)
        verbose_name = 'тип продукта'
        verbose_name_plural = 'типы продуктов'
        index_together = (('id', 'slug'),)

    def __str__(self):
        return self.title


class Product(models.Model):
    """Продукты"""
    product_type = models.ForeignKey(
        ProductType,
        related_name='products',
        on_delete=models.CASCADE,
        default=1
    )
    title = models.CharField('название', max_length=200, db_index=True)
    description = models.TextField('описание', max_length=300, blank=True)
    image = models.ForeignKey(
        Image,
        verbose_name='изображение',
        on_delete=models.SET_NULL,
        blank=True,
        null=True
    )
    price = models.DecimalField('цена', max_digits=10, decimal_places=2)

    # slug = models.SlugField(max_length=200, db_index=True)
    # stock = models.PositiveIntegerField()
    # available = models.BooleanField(default=True)
    # created = models.DateTimeField(auto_now_add=True)
    # updated = models.DateTimeField(auto_now=True)

    class Meta:
        # ordering = ('title',)
        verbose_name = 'Продукт'
        verbose_name_plural = 'Продукты'
        # index_together = (('id', 'slug'),)

    def __str__(self):
        return self.title

