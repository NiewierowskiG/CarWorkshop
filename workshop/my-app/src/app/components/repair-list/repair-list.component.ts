import { Component, OnInit } from '@angular/core';
import { RepairListApicallService } from 'src/app/services/repair-list-apicall.service';
import {Repair} from "../../models/Repair";
import { Observable, timeInterval } from 'rxjs';
import {HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-repair-list',
  templateUrl: './repair-list.component.html',
  styleUrls: ['./repair-list.component.css']
})
export class RepairListComponent implements OnInit {
  repairs$?: Observable<Repair[]>
  repairs?: Repair[];
  searchText?: string;
  constructor(private appService: RepairListApicallService) { }
  ngOnInit(): void {
    this.getRepair()
  }
  getRepair(){
    const token = localStorage.getItem('token')
    const headers = new HttpHeaders().set('Authorization', 'Token ' + token);
    this.appService.getRepair(headers).subscribe(repairs => {
      this.repairs = repairs;
    })
  }
   delRepair(id: number): void {
    this.appService.delRepair(id);
    setTimeout( (_:any)=>{ this.getRepair();} ,10) //time to be sure that client was deleted
  }
  getStartDate(rep?:Repair):Date{
    let date = new Date('0')
    if(rep != undefined)
      date =new Date(rep.createTime)
    return date;
  }

  getLink(repairId:number,workerId:number){
    return `/Showrepair/`.concat(repairId.toString(), '/', workerId.toString());
  }
}
