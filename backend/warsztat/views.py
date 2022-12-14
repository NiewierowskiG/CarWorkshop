from django.shortcuts import render
from datetime import datetime
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import *
from .email import send_email

def repairs_main_screen(request):
    repairs = Repair.objects.all()
    return render(request, 'warsztat/../templates/warsztat/repair_main.html', {"repairs": repairs})


def single_repair(request, id):
    context = {}
    repair = Repair.objects.filter(id=id)[0]
    if request.POST.get('work'):
        if repair.during:
            hours = HoursWorked.objects.filter(repair=repair).order_by('-start_time').first()
            hours.end_time = datetime.now()
            repair.during = False
        else:
            hours = HoursWorked(
                worker=Worker.objects.filter(id=1)[0],
                repair=repair
            )
            repair.during = True
        hours.save()
        repair.save()
    if request.POST.get('finish'):
        repair.done = True
        repair.save()

    return render(request, 'warsztat/../templates/warsztat/repair_single.html', context)


@api_view(['GET', 'POST'])
def test_email(request, email, subject, body, format=None):
    send_email(email, subject, body)


@api_view(['GET', 'POST'])
def people_list(request, format=None):
    if request.method == 'GET':
        queryset = Person.objects.all()
        serializer = PersonSerializer(queryset, many=True)
        return Response(serializer.data)
    if request.method == 'POST':
        serializer = PersonSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(['GET', 'PUT', 'DELETE', 'PATCH'])  # RUD from CRUD
def person_detail(request, id, format=None):
    try:
        item = Person.objects.get(pk=id)
    except Person.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if request.method == 'GET':
        serializer = PersonSerializer(item)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = PersonSerializer(item, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'PATCH':
        serializer = PersonSerializer(item, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        item.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['GET', 'POST'])
def clients_list(request, format=None):
    if request.method == 'GET':
        queryset = Client.objects.all()
        serializer = ClientSerializer(queryset, many=True)
        return Response(serializer.data)
    if request.method == 'POST':
        serializer = ClientSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(['GET', 'PUT', 'DELETE', 'PATCH'])  # RUD from CRUD
def client_detail(request, id, format=None):
    try:
        item = Client.objects.get(pk=id)
    except Client.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if request.method == 'GET':
        serializer = ClientSerializer(item)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = ClientSerializer(item, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'PATCH':
        serializer = ClientSerializer(item, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        item.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['GET', 'POST'])
def positions_list(request, format=None):
    if request.method == 'GET':
        queryset = Position.objects.all()
        serializer = PositionSerializer(queryset, many=True)
        return Response(serializer.data)
    if request.method == 'POST':
        serializer = PositionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(['GET', 'PUT', 'DELETE', 'PATCH'])  # RUD from CRUD
def position_detail(request, id, format=None):
    try:
        item = Position.objects.get(pk=id)
    except Position.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if request.method == 'GET':
        serializer = PositionSerializer(item)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = PositionSerializer(item, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'PATCH':
        serializer = PositionSerializer(item, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        item.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['GET', 'POST'])
def workers_list(request, format=None):
    if request.method == 'GET':
        queryset = Worker.objects.all()
        serializer = WorkerSerializer(queryset, many=True)
        return Response(serializer.data)
    if request.method == 'POST':
        serializer = WorkerSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(['GET', 'PUT', 'DELETE', 'PATCH'])  # RUD from CRUD
def worker_detail(request, id, format=None):
    try:
        item = Worker.objects.get(pk=id)
    except Worker.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if request.method == 'GET':
        serializer = WorkerSerializer(item)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = WorkerSerializer(item, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'PATCH':
        serializer = WorkerSerializer(item, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        item.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['GET', 'POST'])
def car_brands_list(request, format=None):
    if request.method == 'GET':
        queryset = CarBrand.objects.all()
        serializer = CarBrandSerializer(queryset, many=True)
        return Response(serializer.data)
    if request.method == 'POST':
        serializer = CarBrandSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(['GET', 'PUT', 'DELETE', 'PATCH'])  # RUD from CRUD
def car_brand_detail(request, id, format=None):
    try:
        item = CarBrand.objects.get(pk=id)
    except CarBrand.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if request.method == 'GET':
        serializer = CarBrandSerializer(item)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = CarBrandSerializer(item, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'PATCH':
        serializer = CarBrandSerializer(item, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        item.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['GET', 'POST'])
def car_models_list(request, format=None):
    if request.method == 'GET':
        queryset = CarModel.objects.all()
        serializer = CarModelSerializer(queryset, many=True)
        return Response(serializer.data)
    if request.method == 'POST':
        serializer = CarModelSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(['GET', 'PUT', 'DELETE', 'PATCH'])  # RUD from CRUD
def car_model_detail(request, id, format=None):
    try:
        item = CarModel.objects.get(pk=id)
    except CarModel.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if request.method == 'GET':
        serializer = CarModelSerializer(item)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = CarModelSerializer(item, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'PATCH':
        serializer = CarModelSerializer(item, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        item.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['GET', 'POST'])
def repairs_list(request, format=None):
    if request.method == 'GET':
        queryset = Repair.objects.all()
        serializer = RepairSerializer(queryset, many=True)
        return Response(serializer.data)
    if request.method == 'POST':
        serializer = RepairSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(['GET', 'PUT', 'DELETE', 'PATCH'])  # RUD from CRUD
def repair_detail(request, id, format=None):
    try:
        item = Repair.objects.get(pk=id)
    except Repair.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if request.method == 'GET':
        serializer = RepairSerializer(item)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = RepairSerializer(item, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'PATCH':
        serializer = RepairSerializer(item, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        item.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['GET', 'POST'])
def cars_list(request, format=None):
    if request.method == 'GET':
        queryset = Car.objects.all()
        serializer = CarSerializer(queryset, many=True)
        return Response(serializer.data)
    if request.method == 'POST':
        serializer = CarSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(['GET', 'PUT', 'DELETE', 'PATCH'])  # RUD from CRUD
def car_detail(request, id, format=None):
    try:
        item = Car.objects.get(pk=id)
    except Car.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if request.method == 'GET':
        serializer = CarSerializer(item)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = CarSerializer(item, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'PATCH':
        serializer = CarSerializer(item, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        item.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['GET', 'POST'])
def hours_worked_list(request, format=None):
    if request.method == 'GET':
        queryset = HoursWorked.objects.all()
        serializer = HoursWorkedSerializer(queryset, many=True)
        return Response(serializer.data)
    if request.method == 'POST':
        serializer = HoursWorkedSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(['GET', 'PUT', 'DELETE', 'PATCH'])  # RUD from CRUD
def hours_worked_detail(request, id, format=None):
    try:
        item = HoursWorked.objects.get(pk=id)
    except HoursWorked.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if request.method == 'GET':
        serializer = HoursWorkedSerializer(item)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = HoursWorkedSerializer(item, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'PATCH':
        serializer = HoursWorkedSerializer(item, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        item.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['GET', 'POST'])
def client_notification_list(request, format=None):
    if request.method == 'GET':
        queryset = ClientNotification.objects.all()
        serializer = ClientNotificationSerializer(queryset, many=True)
        return Response(serializer.data)
    if request.method == 'POST':
        serializer = ClientNotificationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)



@api_view(['GET', 'PUT', 'PATCH', 'DELETE'])  # RUD from CRUD
def client_notification_detail(request, id, format=None):
    try:
        item = ClientNotification.objects.get(pk=id)
    except ClientNotification.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if request.method == 'GET':
        serializer = ClientNotificationSerializer(item)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = ClientNotificationSerializer(item, data=request.data, partial=False)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'PATCH':
        serializer = ClientNotificationSerializer(item, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        item.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['GET', 'POST'])
def performance_review_list(request, format=None):
    if request.method == 'GET':
        queryset = PerformanceReview.objects.all()
        serializer = PerformanceReviewSerializer(queryset, many=True)
        return Response(serializer.data)
    if request.method == 'POST':
        serializer = PerformanceReviewSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(['GET', 'PUT', 'DELETE', 'PATCH'])  # RUD from CRUD
def performance_review_detail(request, id, format=None):
    try:
        item = PerformanceReview.objects.get(pk=id)
    except PerformanceReview.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if request.method == 'GET':
        serializer = PerformanceReviewSerializer(item)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = PerformanceReviewSerializer(item, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'PATCH':
        serializer = PerformanceReviewSerializer(item, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        item.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['GET', 'POST'])
def notifications_list(request, format=None):
    if request.method == 'GET':
        queryset = Notifications.objects.all()
        serializer = NotificationsSerializer(queryset, many=True)
        return Response(serializer.data)
    if request.method == 'POST':
        serializer = NotificationsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(['GET', 'PUT', 'DELETE', 'PATCH'])  # RUD from CRUD
def notifications_detail(request, id, format=None):
    try:
        item = Notifications.objects.get(pk=id)
    except Notifications.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if request.method == 'GET':
        serializer = NotificationsSerializer(item)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = NotificationsSerializer(item, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'PATCH':
        serializer = NotificationsSerializer(item, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        item.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['GET', 'POST'])
def substitute_car_list(request, format=None):
    if request.method == 'GET':
        queryset = SubstituteCar.objects.all()
        serializer = SubstituteCarSerializer(queryset, many=True)
        return Response(serializer.data)
    if request.method == 'POST':
        serializer = SubstituteCarSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(['GET', 'PUT', 'DELETE', 'PATCH'])  # RUD from CRUD
def substitute_car_detail(request, id, format=None):
    try:
        item = SubstituteCar.objects.get(pk=id)
    except SubstituteCar.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if request.method == 'GET':
        serializer = SubstituteCarSerializer(item)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = SubstituteCarSerializer(item, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'PATCH':
        serializer = SubstituteCarSerializer(item, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        item.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['GET', 'POST'])
def rent_car_list(request, format=None):
    if request.method == 'GET':
        queryset = RentCar.objects.all()
        serializer = RentCarSerializer(queryset, many=True)
        return Response(serializer.data)
    if request.method == 'POST':
        serializer = RentCarSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(['GET', 'PUT', 'DELETE', 'PATCH'])  # RUD from CRUD
def rent_car_detail(request, id, format=None):
    try:
        item = RentCar.objects.get(pk=id)
    except RentCar.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if request.method == 'GET':
        serializer = RentCarSerializer(item)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = RentCarSerializer(item, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'PATCH':
        serializer = RentCarSerializer(item, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        item.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
