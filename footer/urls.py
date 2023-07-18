from django.urls import path
from .views import SingletonModelView, FooterView

urlpatterns = [
    path('singleton/', SingletonModelView.as_view(), name='singleton'),
    path('footer/', FooterView.as_view(), name='footer'),
]
