from django.utils.timezone import now
from django.db import models
from django.conf import settings


class Person(models.Model):
    name = models.CharField(max_length=100)
    surname = models.CharField(max_length=100)
    tel_nr = models.IntegerField()
    email = models.EmailField(max_length=254)


class Client(models.Model):
    person = models.ForeignKey(Person, on_delete=models.CASCADE)
    nip = models.BigIntegerField(null=True, blank=True)


class Position(models.Model):
    name = models.CharField(max_length=200)
    can_create_clients = models.BooleanField()
    can_create_workers = models.BooleanField()


class Worker(models.Model):
    person = models.ForeignKey(
        Person,
        on_delete=models.CASCADE
    )
    position = models.ForeignKey(Position, on_delete=models.CASCADE)
    salary = models.DecimalField(max_digits=10, decimal_places=2)


class CarBrand(models.Model):
    name = models.CharField(max_length=100)


class CarModel(models.Model):
    name = models.CharField(max_length=100)
    brand = models.ForeignKey(CarBrand, on_delete=models.CASCADE)
    prod_year_start = models.SmallIntegerField()
    prod_year_end = models.SmallIntegerField()


class Car(models.Model):
    model = models.ForeignKey(CarModel, on_delete=models.CASCADE)
    color = models.CharField(max_length=100)
    prod_year = models.SmallIntegerField()
    vin = models.CharField(max_length=17)


class Repair(models.Model):
    client = models.ForeignKey(Client, on_delete=models.SET_NULL, null=True)
    worker = models.ForeignKey(Worker, on_delete=models.SET_NULL, null=True)
    car = models.ForeignKey(Car, on_delete=models.SET_NULL, null=True)
    create_time = models.DateTimeField()
    end_time = models.DateField()
    done = models.BooleanField(default=False)
    during = models.BooleanField(default=False)
    price = models.DecimalField(max_digits=7, decimal_places=2)
    def get_start_time(self):
        return self.create_time
    def get_car(self):
        return self.car.model.brand.name + ' ' + self.car.model.name + ' ' + self.car.color


class HoursWorked(models.Model):
    worker = models.ForeignKey(Worker, on_delete=models.CASCADE)
    hours = models.DecimalField(max_digits=4, decimal_places=2, blank=True, null=True)
    start_time = models.TimeField(default=now)
    end_time = models.TimeField(null=True, blank=True)
    date = models.DateField(default=now)
    repair = models.ForeignKey(Repair, on_delete=models.DO_NOTHING, default=None, null=True)
    def get_worker(self):
        return self.worker.person.user
    def get_end_time(self):
        return self.end_time
    def get_tel(self):
        return self.client.person.tel_nr


class ClientNotification(models.Model):    # repair id
    content = models.CharField(max_length=500, null=True)
    date = models.DateTimeField(null=True)
    repair = models.ForeignKey(Repair, on_delete=models.CASCADE, null=True)


class PerformanceReview(models.Model):
    employer = models.ForeignKey(Worker, on_delete=models.DO_NOTHING, null=True)
    employee = models.ForeignKey(Worker, related_name='%(class)s_requests_created', on_delete=models.CASCADE, null=True)
    content = models.CharField(max_length=500, null=True)
    date = models.DateTimeField(null=True)


class Notifications(models.Model):
    sender = models.ForeignKey(Worker, on_delete=models.DO_NOTHING, null=True)
    receiver = models.ForeignKey(Client, on_delete=models.CASCADE, null=True)
    content = models.CharField(max_length=500, null=True)
    date = models.DateTimeField(null=True)


class SubstituteCar(models.Model):
    car = models.ForeignKey(Car, on_delete=models.CASCADE, null=True)
    price = models.DecimalField(max_digits=7, decimal_places=2, null=True)
    is_rented = models.BooleanField(default=False)


class RentCar(models.Model):
    car = models.ForeignKey(SubstituteCar, on_delete=models.CASCADE, null=True, default=None)
    start_date = models.DateField(default=now)
    end_date = models.DateField(blank=True, null=True, default=None)
