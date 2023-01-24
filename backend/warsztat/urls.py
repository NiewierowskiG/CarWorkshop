from django.urls import path
from . import views
from rest_framework.urlpatterns import format_suffix_patterns
from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
    path('api-token-auth/', obtain_auth_token, name='api_token_auth'),
    path('workerMoney/<int:worker_id>', views.get_workers_money),
    path('test_email/<str:email>/<str:subject>/<str:body>', views.test_email),
    path('startStopRepair/<int:repair_id>/<int:worker_id>', views.start_stop_work),
    path('endRepair/<int:repair_id>', views.end_repair),
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
    path('hoursworkeds/<int:id>', views.hours_worked_detail),
    path('clientnotification/', views.client_notification_list),
    path('clientnotification/<int:id>', views.client_notification_detail),
    path('performancereview/', views.performance_review_list),
    path('performancereview/<int:id>', views.performance_review_detail),
    path('notifications/', views.notifications_list),
    path('notifications/<int:id>', views.notifications_detail),
    path('substitutecar/', views.substitute_car_list),
    path('substitutecar/<int:id>', views.substitute_car_detail),
    path('rentcar/', views.rent_car_list),
    path('rentcar/<int:id>', views.rent_car_detail),
    path('orders/', views.order_list),
    path('orders/<int:id>', views.order_detail),
]


urlpatterns = format_suffix_patterns(urlpatterns)
