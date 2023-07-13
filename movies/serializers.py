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
        # serializer = PostImageSerializer(instance.images.all(),many=True, context = self.context)
        representation['images'] = PostImageSerializer(instance.images.all(),many=True, context = self.context).data
        return representation

class PostImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = PostImage
        fields = '__all__'
        

