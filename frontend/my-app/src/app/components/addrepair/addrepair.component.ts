import { Component, OnInit } from '@angular/core';
import { RepairListApicallService } from 'src/app/services/repair-list-apicall.service';
import { Repair } from 'src/app/models/Repair';
import {Client} from "../../models/Client";

@Component({
  selector: 'app-addrepair',
  templateUrl: './addrepair.component.html',
  styleUrls: ['./addrepair.component.css']
})
export class AddrepairComponent implements OnInit {
  repair = new Repair("", "", "","","", false, false, 0)
  constructor(private repairService: RepairListApicallService) { }

  ngOnInit(): void {
  }
  sendRepair(repair : Repair){
    this.repairService.sendRepair(repair,'POST');
  }

}
