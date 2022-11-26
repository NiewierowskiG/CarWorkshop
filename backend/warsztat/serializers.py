from .models import *
from rest_framework import serializers


class PersonSerializer(serializers.ModelSerializer):
    telNr = serializers.CharField(source = "tel_nr")
    class Meta:
        model = Person
        fields = ('id', 'name', 'surname', 'telNr','email')


class ClientSerializer(serializers.ModelSerializer):
    person = PersonSerializer()
    class Meta:
        model = Client
        fields = ('id', 'person', 'nip')


class PositionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Position
        fields = ('id', 'name', 'can_create_clients', 'can_create_workers')


class WorkerSerializer(serializers.ModelSerializer):
    person = PersonSerializer()
    position = PositionSerializer()
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
    model = CarBrandSerializer()
    class Meta:
        model = Car
        fields = ('id', 'model', 'color', 'prod_year', 'vin')


class RepairSerializer(serializers.ModelSerializer):
    client = ClientSerializer()
    worker = WorkerSerializer()
    car = CarSerializer()
    class Meta:
        model = Repair
        fields = ('id', 'client', 'worker', 'car', 'create_time', 'end_time', 'done', 'during', 'price')


class HoursWorkedSerializer(serializers.ModelSerializer):
    class Meta:
        model = HoursWorked
        fields = ('id', 'worker', 'hours', 'start_time', 'end_time', 'date', 'repair')


class ClientNotificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = ClientNotification
        fields = '__all__'


class PerformanceReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = PerformanceReview
        fields = '__all__'


class NotificationsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notifications
        fields = '__all__'


class SubstituteCarSerializer(serializers.ModelSerializer):
    class Meta:
        model = SubstituteCar
        fields = '__all__'


class RentCarSerializer(serializers.ModelSerializer):
    class Meta:
        model = RentCar
        fields = '__all__'