import { Component, OnInit } from '@angular/core';
import { RepairListApicallService } from 'src/app/services/repair-list-apicall.service';
import {Repair} from "../../models/Repair";
import { WorkerListServiceService } from 'src/app/services/worker-list-service.service';
@Component({
  selector: 'app-repair-list',
  templateUrl: './repair-list.component.html',
  styleUrls: ['./repair-list.component.css']
})
export class RepairListComponent implements OnInit {
  repairs?: Repair[];
  searchText?: string;
  constructor(private appService: RepairListApicallService) { }
  ngOnInit(): void {
    this.getRepair()
  }
  getRepair(){
    this.appService.getRepair().subscribe(repairs => {
      this.repairs = repairs;
    })
  }
  getStartDate(rep?:Repair):Date{
    let date = new Date('0')
    if(rep != undefined)
      date =new Date(rep.createTime)
    return date;
  }
}
