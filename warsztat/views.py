from django.shortcuts import render
from .models import *
from datetime import datetime


def repairs_main_screen(request):
    repairs = Repair.objects.all()
    return render(request, 'warsztat/repair_main.html', {"repairs": repairs})

def single_repair(request, id):
    context = {}
    repair = Repair.objects.filter(id=id)[0]
    if request.POST.get('work'):
        if repair.during:
            hours = HoursWorked.objects.filter(repair=repair).order_by('-start_time').first()
            hours.end_time = datetime.now()
            repair.during = False
        else:
            hours = HoursWorked(
                worker=Worker.objects.filter(id=1)[0],
                repair=repair
            )
            repair.during = True
        hours.save()
        repair.save()
    if request.POST.get('finish'):
        repair.done = True
        repair.save()

    return render(request, 'warsztat/repair_single.html', context)
