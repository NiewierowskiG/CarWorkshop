import { Component, OnInit } from '@angular/core';
import { Worker } from 'src/app/models/Worker';
import { WorkerListApicallService } from 'src/app/services/worker-list-apicall.service';
import {Observable} from "rxjs";
@Component({
  selector: 'app-worker-list',
  templateUrl: './worker-list.component.html',
  styleUrls: ['./worker-list.component.css']
})
export class WorkerListComponent implements OnInit {
  workers$?: Observable<Worker[]>
  workers?: Worker[]
  searchText?: string;
  constructor(private workerService: WorkerListApicallService) { }

  ngOnInit(): void {
    this.getWorker()
  }
  getWorker(){
    this.workerService.getWorker().subscribe(workers =>{
      this.workers = workers
    })
  }
  delWorker(id: number): void {
    this.workerService.delWorker(id);
    setTimeout( (_:any)=>{ this.getWorker();} ,10) //time to be sure that client was deleted
  }
  getLink(salary:number,id:number){
    return `/EditWorker/`.concat(salary.toString(), '/', id.toString());
  }
}
