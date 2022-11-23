from django.utils.timezone import now
from django.db import models
from django.conf import settings


class Person(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
    )
    tel_nr = models.IntegerField()
    #emial

class Client(models.Model):
    person = models.ForeignKey(Person, on_delete=models.CASCADE)
    nip = models.IntegerField(null=True)


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
    repair = models.ForeignKey(Repair, on_delete=models.DO_NOTHING, default=None)
    def get_worker(self):
        return self.worker.person.user
    def get_end_time(self):
        return self.end_time
    def get_tel(self):
        return self.client.person.tel_nr

class Opinion(models.Model):
    pass
    #clinet id
    #date
    #rating
    #content

class OpinionWorker(models.Model):
    pass
    # opinion id
    # worker id

class OpinionRepair(models.Model):
    pass
    # opinion id
    # repair id

class PerformanceReview(models.Model):
    pass
    # provider : worker id
    # worker id
    # content
    # date


class Notifications(models.Model):
    pass
    # content
    # clinet id
    # sender : worker id

class SubstituteCar(models.Model):
    pass
    # car
    # price per day

class RentCar(models.Model):
    pass
    # substituteCar id
    # start date
    # end date
