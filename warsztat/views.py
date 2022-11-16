from django.shortcuts import render
from .models import *


def repairs_main_screen(request):
    repairs = Repair.objects.all()
    return render(request, 'warsztat/repair_main.html', {"repairs": repairs})

