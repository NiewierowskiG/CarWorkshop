import { Component, OnInit } from '@angular/core';
import { RepairListApicallService } from 'src/app/services/repair-list-apicall.service';
import { Repair } from 'src/app/models/Repair';
import {Client} from "../../models/Client";
import { Worker } from 'src/app/models/Worker';
import { Position } from 'src/app/models/Position';
import { Car } from 'src/app/models/Car';
import { CarModel } from 'src/app/models/CarModel';
import { CarBrand } from 'src/app/models/CarBrand';

@Component({
  selector: 'app-addrepair',
  templateUrl: './addrepair.component.html',
  styleUrls: ['./addrepair.component.css']
})
export class AddrepairComponent implements OnInit {
  repair = new Repair(
   new Client('','','','a@a.a',0)
  ,new Worker(
   new Position('',false,false),0,'','','0','a@a.a')
  ,new Car(
   new CarModel(''
  ,new CarBrand(''),0,0),'',0,0),'','',true,true,0);
  constructor(private repairService: RepairListApicallService) { }

  ngOnInit(): void {
  }
  postRepair(repair : Repair){
    this.repairService.postRepair(repair,'POST');
  }

}
