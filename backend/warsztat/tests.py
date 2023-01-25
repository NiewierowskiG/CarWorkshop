from django.contrib.auth.models import User
from django.test import TestCase
from .models import *
from datetime import datetime
# Create your tests here.
class RepairTestCase(TestCase):
    def setUp(self):
        self.userworker =User.objects.create_user(username='test1', password='test123')
        self.userclient = User.objects.create_user(username='test2', password='test123')
        self.workerperson = Person.objects.create(user=self.userworker, tel_nr=123123123)
        self.clientperson = Person.objects.create(user=self.userclient, tel_nr=123123123)
        self.position = Position.objects.create(name='pracowniktest', canCreateClients=False, canCreateWorkers=False)
        self.worker = Worker.objects.create(person=self.workerperson, position=self.position, salary=123)
        self.clienttest = Client.objects.create(person=self.clientperson, nip=123123)
        self.brand = CarBrand.objects.create(name='testBrand')
        self.model = CarModel.objects.create(name='testModel', brand=self.brand, prod_year_end=1999, prod_year_start=1992)
        self.car = Car.objects.create(model=self.model, color='testColor', prod_year=1999, vin='testVin')
        self.create_time = datetime.now()
        self.end_time = datetime.now()
        self.repair = Repair.objects.create(client=self.clienttest, worker=self.worker, car=self.car, create_time=self.create_time, end_time=self.end_time, during=False, done= False)
        self.worked_hours = HoursWorked.objects.create(worker=self.worker, start_time=self.create_time, repair=self.repair)

    def test_repairs(self):
        response = self.client.get('/repairs')
        self.assertTemplateUsed(response, 'warsztat/repair_main.html')

    '''def test_single_repair(self):
        response = self.client.get('/repairs/1')
        self.assertTemplateUsed(response, '/warsztat/repair_single.html')'''

    def testRepairIsDuring(self):
        response = self.client.post('/repairs/1', {'work': '1'})
        self.repair.refresh_from_db()
        self.assertEqual(response.status_code, 200)
        self.assertTrue(self.repair.during)

    '''def testRepairIsDone(self):
        response = self.client.post('/repairs/1', {'finish': '2'})
        self.repair.refresh_from_db()
        self.assertEqual(response.status_code, 200)
        self.assertTrue(self.repair.done)'''
