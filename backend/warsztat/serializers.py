from django.contrib.auth.models import User, Group ,
from rest_framework import serializers

class ExampleModelSerializer(serializers.ModelSerializer):
    class Person:
        model = User
        fields = ('user','tel_nr')
    class Client:
        model = User
        fields = ('person', 'nip')
    class Position:
        model = Group
        fields = ('name', 'can_create_clients','can_create_workers')
    class Worker:
        model = User
        fields = ('person','position','salary')
    class CarBrand:
        model = ExampleModel
        fields = ('name')
    class CarModel:
        model = ExampleModel
        fields = ('name', 'brand','prod_year_start','prod_year_end')
    class Car:
        model = ExampleModel
        fields = ('model', 'color','prod_year','vin')
    class Repair:
        model = ExampleModel
        fields = ('client', 'worker','car','create_time','end_time','done','during')
    class Car:
        model = ExampleModel
        fields = ('model', 'color','prod_year','vin')