from django.shortcuts import get_object_or_404
from django.http import JsonResponse
from rest_framework.views import APIView
from .models import SingletonModel, Footer
from .serializers import SingletonModelSerializer, FooterSerializer

class SingletonModelView(APIView):
    def get(self, request):
        instance = SingletonModel.load()
        serializer = SingletonModelSerializer(instance)
        return JsonResponse(serializer.data)

    def put(self, request):
        instance = SingletonModel.load()
        serializer = SingletonModelSerializer(instance, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)

class FooterView(APIView):
    def get(self, request):
        footer = get_object_or_404(Footer, pk=1)
        serializer = FooterSerializer(footer)
        return JsonResponse(serializer.data)

    def put(self, request):
        footer = get_object_or_404(Footer, pk=1)
        serializer = FooterSerializer(footer, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)
