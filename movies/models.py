from django.db import models
from account.models import CustomUser
from django.core.validators import MaxValueValidator

class Genre(models.Model):
    name = models.CharField("Жанры", max_length=100)

    class Meta:
        verbose_name = "Жанр"
        verbose_name_plural = "Жанры"

    def __str__(self) -> str:
        return self.name


class Theme(models.Model):
    name = models.CharField("Название", max_length=50)

    def __str__(self) -> str:
        return self.name


class Category(models.Model):
    name = models.CharField("Категории", max_length=159)
    description = models.TextField("Описание")
    url = models.SlugField(max_length=160, unique=True)

    def __str__(self) -> str:
        return self.name

    class Meta:
        verbose_name = "Категория"
        verbose_name_plural = "Категории"


class Movies(models.Model):
    title = models.CharField(verbose_name="Название", max_length=100)
    description = models.TextField(verbose_name="Описание")
    poster = models.ImageField(verbose_name="Постер", upload_to="posters/")
    year = models.PositiveSmallIntegerField(
        verbose_name="Год выпуска", default=1980)
    genres = models.ManyToManyField(Genre, verbose_name='жанры')
    themes = models.ManyToManyField(Theme, verbose_name='темы')
    category = models.ForeignKey(
        Category, verbose_name="Категории", on_delete=models.SET_NULL, null=True)
    original_title = models.CharField(
        verbose_name="Название на японском", max_length=100)
    age_permissions = models.PositiveIntegerField(
        verbose_name="Возрастной рейтинг", default=12)

    def __str__(self) -> str:
        return self.title

    class Meta:
        verbose_name = "Аниме"
        verbose_name_plural = "Анимы"


class PostImage(models.Model):
    image = models.ImageField(upload_to='shots', blank=True, null=True)
    post = models.ForeignKey(
        Movies, on_delete=models.CASCADE, related_name='images')


class SeriesMovie(models.Model):
    title = models.CharField(verbose_name="Название", max_length=300)
    seria = models.FileField(upload_to='series',null=True)
    post = models.ForeignKey(Movies, on_delete=models.CASCADE, related_name='series')

class Comment(models.Model):
    post = models.ForeignKey(Movies, on_delete=models.CASCADE)
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    body = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.body


class Favorite(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    movie = models.ForeignKey(Movies, on_delete=models.CASCADE)
    created = models.DateTimeField(auto_now_add=True)

class Rating(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    post = models.ForeignKey(Movies, on_delete=models.CASCADE)
    rating = models.IntegerField(default=0,validators=[MaxValueValidator(10)])

    def __str__(self):
        return f"{self.post.header}: {self.rating}"
