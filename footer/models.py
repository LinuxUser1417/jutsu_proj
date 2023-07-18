from django.db import models
from django.core.exceptions import ValidationError
from django.contrib.auth.models import User


class SingletonModel(models.Model):
    class Meta:
        abstract = True

    def save(self, *args, **kwargs):
        self.pk = 1
        super(SingletonModel, self).save(*args, **kwargs)

    def delete(self, *args, **kwargs):
        raise ValidationError("Операция удаления не разрешена")

    @classmethod
    def load(cls):
        obj, created = cls.objects.get_or_create(pk=1)
        return obj


class Footer(models.Model):
    adress = models.CharField(verbose_name="Адрес", max_length=255)
    email = models.EmailField(verbose_name="Email",  max_length=255)
    telegram = models.CharField(verbose_name="Telegram", max_length=255) 
    twitter = models.CharField(verbose_name="Twitter", max_length=255)
    instagram = models.CharField(verbose_name="Instagram", max_length=255)
    youtube = models.CharField(verbose_name="Youtube", max_length=255)
