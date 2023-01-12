import { Component, OnInit } from '@angular/core';
import { Worker } from 'src/app/models/Worker';
import { WorkerListApicallService } from 'src/app/services/worker-list-apicall.service';
import {Observable} from "rxjs";
import {Repair} from "../../models/Repair";
import {RepairListApicallService} from "../../services/repair-list-apicall.service";
import {HttpClient, HttpHeaders} from '@angular/common/http';
@Component({
  selector: 'app-worker-list',
  templateUrl: './worker-list.component.html',
  styleUrls: ['./worker-list.component.css']
})
export class WorkerListComponent implements OnInit {
  workers$?: Observable<Worker[]>
  workers?: Worker[]
  searchText?: string;
  repairs?: Repair[];
  repairs$?: Observable<Repair[]>
  constructor(private workerService: WorkerListApicallService, private repairService: RepairListApicallService, private workerHttp: HttpClient) { }

  ngOnInit(): void {
    this.getWorker()
    const token = localStorage.getItem('token')
    const headers = new HttpHeaders().set('Authorization', 'Token ' + token);
    this.repairs$ = this.repairService.getRepair(headers);
    this.workerHttp.get<Repair[]>("http://localhost:8000/repairs.json").subscribe(repairs => {
      this.repairs = repairs;
      console.log(repairs);
    });
  }
  getWorker(){
    this.workerService.getWorker().subscribe(workers =>{
      this.workers = workers
    })
  }
  delWorker(id: number, email: string): void {
    if (this.repairs != undefined)
    {
      let filtr = this.repairs.filter(repair => repair.worker.email == email)
      console.log(filtr)
      if (filtr.length > 0)
      {
        alert("Naprawa istnieje")
      }
      else
      {
        this.workerService.delWorker(id);
        setTimeout((_: any) => {this.getWorker();}, 10) //time to be sure that client was deleted
      }
    }
  }
  getLink(salary:number,id:number){
    return `/EditWorker/`.concat(salary.toString(), '/', id.toString());
  }
}
