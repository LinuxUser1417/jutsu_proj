from rest_framework import serializers
from .models import SingletonModel, Footer

class SingletonModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = SingletonModel
        fields = '__all__'
        read_only_fields = ['pk']

    def create(self, validated_data):
        instance, _ = SingletonModel.objects.get_or_create(pk=1)
        return instance

    def update(self, instance, validated_data):
            instance.__dict__.update(validated_data)
            instance.save()
            return instance

class FooterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Footer
        fields = '__all__'
