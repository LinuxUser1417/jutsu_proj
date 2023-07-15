from rest_framework import serializers

from .models import *

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movies
        fields = '__all__'

    def to_representation(self,instance):
        representation = super().to_representation(instance)
        representation['images'] = PostImageSerializer(instance.images.all(),many=True, context = self.context).data
        representation['series'] = SeriesSerializer(instance.series.all(),many=True, context = self.context).data
        return representation

class MovieListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movies
        fields = ('title','poster')

    def to_representation(self,instance):
        representation = super().to_representation(instance)
        # representation['title'] = MovieSerializer(instance.title.all())
        # representation['series'] = len(SeriesSerializer(instance.series.all(),many=True, context = self.context).data)
        representation['series'] = len(instance.series.all())
        return representation

class PostImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = PostImage
        fields = '__all__'
        
class SeriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = SeriesMovie
        fields = '__all__'

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ('id', 'post', 'user', 'body', 'timestamp')
        read_only_fields = ('id', 'timestamp')

class FavoriteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Favorite
        fields = ('id', 'user', 'movie', 'created')
        read_only_fields = ('id', 'created')