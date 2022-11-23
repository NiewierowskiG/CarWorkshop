from django.urls import path
from . import views
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
    #path('repairs', views.repairs_main_screen),
    #path('repairs/<id>', views.single_repair),
    path('people/', views.people_list),
    path('people/<int:id>', views.person_detail),
    path('clients/', views.clients_list),
    path('clients/<int:id>', views.client_detail),
    path('positions/', views.positions_list),
    path('positions/<int:id>', views.position_detail),
    path('workers/', views.workers_list),
    path('workers/<int:id>', views.worker_detail),
    path('car_brands/', views.car_brands_list),
    path('car_brands/<int:id>', views.car_brand_detail),
    path('car_models/', views.car_models_list),
    path('car_models/<int:id>', views.car_model_detail),
    path('cars/', views.cars_list),
    path('cars/<int:id>', views.car_detail),
    path('repairs/', views.repairs_list),
    path('repairs/<int:id>', views.repair_detail),
    path('hoursworkeds/', views.hours_worked_list),
    path('hoursworkeds/<int:id>', views.hoursworked_detail),
]


urlpatterns = format_suffix_patterns(urlpatterns)