import { Component, OnInit } from '@angular/core';
import { Worker } from 'src/app/models/Worker';
import { WorkerListApicallService } from 'src/app/services/worker-list-apicall.service';
@Component({
  selector: 'app-worker-list',
  templateUrl: './worker-list.component.html',
  styleUrls: ['./worker-list.component.css']
})
export class WorkerListComponent implements OnInit {
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
  getLink(salary:number,id:number){
    return `/EditWorker/${btoa(JSON.stringify(salary))}`;
  }
}
