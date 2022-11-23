from django.shortcuts import render
from datetime import datetime
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .serializers import *


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
def people_list(request):
    if request.method == 'GET':
        queryset = Person.objects.all()
        serializer = PersonSerializer(queryset, many=True)
        return Response(serializer.data)
    if request.method == 'POST':
        serializer = PersonSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save();
            return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(['GET', 'PUT', 'DELETE'])  # RUD from CRUD
def person_detail(request):
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
    elif request.method == 'DELETE':
        item.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['GET', 'POST'])
def clients_list(request):
    if request.method == 'GET':
        queryset = Client.objects.all()
        serializer = ClientSerializer(queryset, many=True)
        return Response(serializer.data)
    if request.method == 'POST':
        serializer = ClientSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save();
            return Response(serializer.data, status=status.HTTP_201_CREATED)



@api_view(['GET', 'POST'])
def positions_list(request):
    if request.method == 'GET':
        queryset = Position.objects.all()
        serializer = PositionSerializer(queryset, many=True)
        return Response(serializer.data)
    if request.method == 'POST':
        serializer = PositionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save();
            return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(['GET', 'POST'])
def workers_list(request):
    if request.method == 'GET':
        queryset = Worker.objects.all()
        serializer = WorkerSerializer(queryset, many=True)
        return Response(serializer.data)
    if request.method == 'POST':
        serializer = WorkerSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save();
            return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(['GET', 'POST'])
def car_brands_list(request):
    if request.method == 'GET':
        queryset = CarBrand.objects.all()
        serializer = CarBrandSerializer(queryset, many=True)
        return Response(serializer.data)
    if request.method == 'POST':
        serializer = CarBrandSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save();
            return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(['GET', 'POST'])
def car_models_list(request):
    if request.method == 'GET':
        queryset = CarModel.objects.all()
        serializer = CarModelSerializer(queryset, many=True)
        return Response(serializer.data)
    if request.method == 'POST':
        serializer = CarModelSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save();
            return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(['GET', 'POST'])
def repairs_list(request):
    if request.method == 'GET':
        queryset = Repair.objects.all()
        serializer = RepairSerializer(queryset, many=True)
        return Response(serializer.data)
    if request.method == 'POST':
        serializer = RepairSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save();
            return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(['GET', 'POST'])
def cars_list(request):
    if request.method == 'GET':
        queryset = Car.objects.all()
        serializer = CarSerializer(queryset, many=True)
        return Response(serializer.data)
    if request.method == 'POST':
        serializer = CarSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save();
            return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(['GET', 'POST'])
def hours_worked_list(request):
    if request.method == 'GET':
        queryset = HoursWorked.objects.all()
        serializer = HoursWorkedSerializer(queryset, many=True)
        return Response(serializer.data)
    if request.method == 'POST':
        serializer = HoursWorkedSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save();
            return Response(serializer.data, status=status.HTTP_201_CREATED)
