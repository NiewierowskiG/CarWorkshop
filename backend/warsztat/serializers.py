from .models import *
from rest_framework import serializers
from drf_writable_nested import WritableNestedModelSerializer


class PersonSerializer(serializers.ModelSerializer):
    telNr = serializers.CharField(source="tel_nr")
    class Meta:
        model = Person
        fields = ('id', 'name', 'surname', 'telNr', 'email')


class ClientSerializer(WritableNestedModelSerializer, serializers.ModelSerializer):
    name = serializers.CharField(source="person.name")
    surname = serializers.CharField(source="person.surname")
    telNr = serializers.CharField(source="person.tel_nr")
    email = serializers.CharField(source="person.email")
    person = PersonSerializer()
    class Meta:
        model = Client
        fields = ('id', 'name', 'surname', 'telNr', 'email', 'nip','person')


class PositionSerializer(serializers.ModelSerializer):
    canCreateClients = serializers.BooleanField(source="can_create_clients")
    canCreateWorkers = serializers.BooleanField(source="can_create_workers")

    class Meta:
        model = Position
        fields = ('id', 'name', 'canCreateClients', 'canCreateWorkers')


class WorkerSerializer(WritableNestedModelSerializer, serializers.ModelSerializer):
    name = serializers.CharField(source="person.name")
    surname = serializers.CharField(source="person.surname")
    telNr = serializers.CharField(source="person.tel_nr")
    email = serializers.CharField(source="person.email")
    salary = serializers.DecimalField(max_digits=10, decimal_places=2)
    person = PersonSerializer()
    position = PositionSerializer()

    class Meta:
        model = Worker
        fields = ('id', 'name', 'surname', 'telNr',
                  'email', 'position', 'salary','person')


class CarBrandSerializer(serializers.ModelSerializer):
    class Meta:
        model = CarBrand
        fields = ('id', 'name')


class CarModelSerializer(WritableNestedModelSerializer, serializers.ModelSerializer):
    prodYearStart = serializers.IntegerField(source="prod_year_start")
    prodYearEnd = serializers.IntegerField(source="prod_year_end")
    brand = CarBrandSerializer()
    class Meta:
        model = CarModel
        fields = ('id', 'name', 'brand', 'prodYearStart', 'prodYearEnd')


class CarSerializer(WritableNestedModelSerializer, serializers.ModelSerializer):
    model = CarModelSerializer()
    prodYear = serializers.IntegerField(source="prod_year")

    class Meta:
        model = Car
        fields = ('id', 'model', 'color', 'prodYear', 'vin')


class RepairSerializer(WritableNestedModelSerializer, serializers.ModelSerializer):
    client = ClientSerializer()
    worker = WorkerSerializer()
    car = CarSerializer()
    createTime = serializers.DateTimeField(source="create_time")
    endTime = serializers.DateField(source="end_time")
    price = serializers.DecimalField(max_digits=7, decimal_places=2)

    class Meta:
        model = Repair
        fields = ('id', 'client', 'worker', 'car', 'createTime',
                  'endTime', 'done', 'during', 'price')


class HoursWorkedSerializer(WritableNestedModelSerializer, serializers.ModelSerializer):
    repair = RepairSerializer()

    class Meta:
        model = HoursWorked
        fields = ('id', 'worker', 'hours', 'start_time',
                  'end_time', 'date', 'repair')


class ClientNotificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = ClientNotification
        fields = ('content', 'date', 'repair')


class PerformanceReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = PerformanceReview
        fields = ('employer', 'employee', 'content', 'date')


class NotificationsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notifications
        fields = ('sender', 'receiver', 'content')


class SubstituteCarSerializer(serializers.ModelSerializer):
    isRented = serializers.BooleanField(source='is_rented')
    class Meta:
        model = SubstituteCar
        fields = ('car', 'price', 'isRented')


class RentCarSerializer(serializers.ModelSerializer):
    startDate = serializers.DateField(source='start_date')
    endDate = serializers.DateField(source='end_date')
    class Meta:
        model = RentCar
        fields = ('car', 'startDate', 'endDate')
