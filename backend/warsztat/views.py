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
def person_list(request):
    if request.method == 'GET':
        queryset = Person.objects.all()
        serializer_class = PersonSerializer(queryset, many=True)
        return JsonResponse({'persons': serializer_class.data})
    if request.method == 'POST':
        serializer = PersonSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save();
            return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(['GET', 'POST'])
def client_list(request):
    if request.method == 'GET':
        queryset = Client.objects.all()
        serializer_class = ClientSerializer(queryset, many=True)
        return JsonResponse({'clients': serializer_class.data})
    if request.method == 'POST':
        serializer = ClientSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save();
            return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(['GET', 'POST'])
def position_list(request):
    if request.method == 'GET':
        queryset = Position.objects.all()
        serializer_class = PositionSerializer(queryset, many=True)
        return JsonResponse({'positions': serializer_class.data})
    if request.method == 'POST':
        serializer = PositionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save();
            return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(['GET', 'POST'])
def worker_list(request):
    if request.method == 'GET':
        queryset = Worker.objects.all()
        serializer_class = WorkerSerializer(queryset, many=True)
        return JsonResponse({'workers': serializer_class.data})
    if request.method == 'POST':
        serializer = WorkerSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save();
            return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(['GET', 'POST'])
def car_brand_list(request):
    if request.method == 'GET':
        queryset = CarBrand.objects.all()
        serializer_class = CarBrandSerializer(queryset, many=True)
        return JsonResponse({'car_brands': serializer_class.data})
    if request.method == 'POST':
        serializer = CarBrandSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save();
            return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(['GET', 'POST'])
def car_model_list(request):
    if request.method == 'GET':
        queryset = CarModel.objects.all()
        serializer_class = CarModelSerializer(queryset, many=True)
        return JsonResponse({'car_models': serializer_class.data})
    if request.method == 'POST':
        serializer = CarModelSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save();
            return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(['GET', 'POST'])
def repair_list(request):
    if request.method == 'GET':
        queryset = Repair.objects.all()
        serializer_class = RepairSerializer(queryset, many=True)
        return JsonResponse({'repairs': serializer_class.data})
    if request.method == 'POST':
        serializer = RepairSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save();
            return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(['GET', 'POST'])
def car_list(request):
    if request.method == 'GET':
        queryset = Car.objects.all()
        serializer_class = CarSerializer(queryset, many=True)
        return JsonResponse({'cars': serializer_class.data})
    if request.method == 'POST':
        serializer = CarSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save();
            return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(['GET', 'POST'])
def hours_worked_list(request):
    if request.method == 'GET':
        queryset = HoursWorked.objects.all()
        serializer_class = HoursWorkedSerializer(queryset, many=True)
        return JsonResponse({'hours_worked': serializer_class.data})
    if request.method == 'POST':
        serializer = HoursWorkedSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save();
            return Response(serializer.data, status=status.HTTP_201_CREATED)
