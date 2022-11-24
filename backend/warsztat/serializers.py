from .models import *
from rest_framework import serializers


class PersonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Person
        fields = ('id', 'user', 'tel_nr')


class ClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Client
        fields = ('id', 'person', 'nip')


class PositionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Position
        fields = ('id', 'name', 'can_create_clients', 'can_create_workers')


class WorkerSerializer(serializers.ModelSerializer):
    wfname = serializers.CharField(source="person.fname")
    wlname = serializers.CharField(source="person.lname")
    pos = serializers.CharField(source="position.name")
    class Meta:
        model = Worker
        fields = ('id', 'person', 'position', 'salary', 'wfname', 'wlname','pos')


class CarBrandSerializer(serializers.ModelSerializer):
    class Meta:
        model = CarBrand
        fields = ('id', 'name')


class CarModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = CarModel
        fields = ('id', 'name', 'brand', 'prod_year_start', 'prod_year_end')


class CarSerializer(serializers.ModelSerializer):
    carbrand = serializers.CharField(source="model.name")
    class Meta:
        model = Car
        fields = ('id', 'model', 'color', 'prod_year', 'vin','carbrand')


class RepairSerializer(serializers.ModelSerializer):
    cfname = serializers.CharField(source="client.person.fname")
    clname = serializers.CharField(source="client.person.lname")
    wfname = serializers.CharField(source="worker.person.fname")
    wlname = serializers.CharField(source="worker.person.lname")
    carvin = serializers.CharField(source="car.vin")
    carcolor = serializers.CharField(source="car.color")
    carbrand = serializers.CharField(source="car.model.brand.name")
    carmodel = serializers.CharField(source="car.model.name")
    class Meta:
        model = Repair
        fields = ('id', 'client', 'worker', 'car', 'create_time', 'end_time', 'done', 'during', 'cfname', 'clname','wfname','wlname','price', 'carvin','carcolor','carbrand','carmodel')


class HoursWorkedSerializer(serializers.ModelSerializer):
    class Meta:
        model = HoursWorked
        fields = ('id', 'worker', 'hours', 'start_time', 'end_time', 'date', 'repair')
