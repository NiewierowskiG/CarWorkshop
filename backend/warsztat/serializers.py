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
    class Meta:
        model = Worker
        fields = ('id', 'person', 'position', 'salary')


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
    class Meta:
        model = Repair
        fields = ('id', 'client', 'worker', 'car', 'create_time', 'end_time', 'done', 'during')


class HoursWorkedSerializer(serializers.ModelSerializer):
    class Meta:
        model = HoursWorked
        fields = ('id', 'worker', 'hours', 'start_time', 'end_time', 'date', 'repair')
