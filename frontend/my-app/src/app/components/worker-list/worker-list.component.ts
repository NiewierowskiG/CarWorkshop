import { Component, OnInit } from '@angular/core';
import { ClientListApicallService } from 'src/app/services/client-list-apicall.service';
import { Worker } from 'src/app/models/Worker';
import { WorkerListServiceService } from 'src/app/services/worker-list-service.service';
@Component({
  selector: 'app-worker-list',
  templateUrl: './worker-list.component.html',
  styleUrls: ['./worker-list.component.css']
})
export class WorkerListComponent implements OnInit {
  workers?: Worker[]
  constructor(private workerService: WorkerListServiceService) { }

  ngOnInit(): void {
    this.getWorker()
  }
  getWorker(){
    this.workerService.getWorker().subscribe(workers =>{
      this.workers = workers
    })
  }
}
