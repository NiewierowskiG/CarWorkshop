from django.urls import path
from . import views

urlpatterns = [
    path('repairs', views.repairs_main_screen),
    path('repairs/<id>', views.single_repair),
    path('clients/', views.client_list),
    path('positions/', views.position_list),
    path('workesr/', views.worker_list),
    path('car_brands/', views.car_brand_list),
    path('car_models/', views.car_model_list),
    path('cars/', views.car_list),
    path('repairs/', views.repair_list),
    path('hoursworkeds/', views.hours_worked_list)
]
