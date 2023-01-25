from django.utils.timezone import now
from django.db import models
from django.conf import settings


class Person(models.Model):
    name = models.CharField(max_length=100)
    surname = models.CharField(max_length=100)
    tel_nr = models.IntegerField(unique=True)
    email = models.EmailField(max_length=254, unique=True)

    def __str__(self):
        return self.name


class Client(models.Model):
    person = models.ForeignKey(Person, on_delete=models.CASCADE)
    nip = models.BigIntegerField(null=True, blank=True)

    def __str__(self):
        return self.person.name


class Position(models.Model):
    name = models.CharField(max_length=200, unique=True)
    canCreateClients = models.BooleanField()
    canCreateWorkers = models.BooleanField()

    def __str__(self):
        return self.name


class Worker(models.Model):
    person = models.ForeignKey(
        Person,
        on_delete=models.CASCADE
    )
    position = models.ForeignKey(Position, on_delete=models.CASCADE)
    salary = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.person.name


class CarBrand(models.Model):
    name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.name


class CarModel(models.Model):
    name = models.CharField(max_length=100, unique=True)
    brand = models.ForeignKey(CarBrand, on_delete=models.CASCADE)
    prod_year_start = models.SmallIntegerField()
    prod_year_end = models.SmallIntegerField()

    def __str__(self):
        return self.name


class Car(models.Model):
    model = models.ForeignKey(CarModel, on_delete=models.CASCADE)
    color = models.CharField(max_length=100)
    prod_year = models.SmallIntegerField()
    vin = models.CharField(max_length=17, unique=True)

    def __str__(self):
        return f'{self.model.name} {self.color} {str(self.prod_year)}'


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

    def __str__(self):
        return f'{self.create_time} {self.client.__str__()} {self.car.__str__()}'


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

    def __str__(self):
        return self.worker.person.__str__() + ' ' + str(self.date)


class ClientNotification(models.Model):    # repair id
    content = models.CharField(max_length=500, null=True)
    date = models.DateTimeField(null=True)
    repair = models.ForeignKey(Repair, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.repair.__str__()


class PerformanceReview(models.Model):
    employer = models.ForeignKey(Worker, on_delete=models.DO_NOTHING, null=True)
    employee = models.ForeignKey(Worker, related_name='%(class)s_requests_created', on_delete=models.CASCADE, null=True)
    content = models.CharField(max_length=500, null=True)
    date = models.DateTimeField(null=True)

    def __str__(self):
        return f'{self.employer.person.name} {self.employee.person.name} {self.content}'


class Notifications(models.Model):
    sender = models.ForeignKey(Worker, on_delete=models.DO_NOTHING, null=True)
    receiver = models.ForeignKey(Client, on_delete=models.CASCADE, null=True)
    content = models.CharField(max_length=500, null=True)
    date = models.DateTimeField(null=True)

    def __str__(self):
        return f'{self.sender.person.name} {self.receiver.person.name} {self.content}'


class SubstituteCar(models.Model):
    car = models.ForeignKey(Car, on_delete=models.CASCADE, null=True)
    price = models.DecimalField(max_digits=7, decimal_places=2, null=True)
    is_rented = models.BooleanField(default=False)

    def __str__(self):
        return self.car.__str__()


class RentCar(models.Model):
    car = models.ForeignKey(SubstituteCar, on_delete=models.CASCADE, null=True, default=None)
    start_date = models.DateField(default=now)
    end_date = models.DateField(blank=True, null=True, default=None)

    def __str__(self):
        return self.car.__str__()


class Order(models.Model):
    worker = models.ForeignKey(Worker, on_delete=models.CASCADE)
    date    = models.DateField(blank=True, null=True, default=None)
    title = models.CharField(max_length=150)
    status = models.CharField(max_length=50)
    #TODO iteams czesci
    def __str__(self):
        return self.title


class Item(models.Model):
    name = models.CharField(max_length=100)
    price = models.DecimalField(decimal_places=2, max_digits=8)
    amount = models.IntegerField()


"""


class OrderxItem(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE())
    item = models.ForeignKey(PartItem, on_delete=models.CASCADE())
"""
