from django.db import models
from django.contrib.auth.models import User

from vote.models import VoteModel

from apps.api.models import Image


class HandCraft(VoteModel, models.Model):
    """Модель детской поделки"""

    name = models.CharField('Название', max_length=100)
    owner = models.ForeignKey(User, related_name='владелец', on_delete=models.CASCADE)
    photo = models.ForeignKey(Image, related_name='фото', on_delete=models.CASCADE)
    created = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = 'Поделка'
        verbose_name_plural = 'Поделки'

    def __str__(self):
        return self.name









