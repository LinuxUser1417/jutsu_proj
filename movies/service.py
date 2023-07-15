from django_filters import rest_framework as filters
from .models import Movies


class ChaFilterInFilter(filters.BaseInFilter, filters.CharFilter):
    pass

class MovieFilter(filters.FilterSet):
    genres = ChaFilterInFilter(field_name ='genres__name', lookup_expr ='in')
    themes = ChaFilterInFilter(field_name ='themes__name', lookup_expr ='in')
    category = ChaFilterInFilter(field_name ='category__name', lookup_expr ='in')
    year = filters.RangeFilter()

    class Meta:
        model = Movies
        fields = ['genres','themes','category','year']