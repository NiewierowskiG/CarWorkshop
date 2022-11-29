import { Component, OnInit } from '@angular/core';
import { WorkerListApicallService } from 'src/app/services/worker-list-apicall.service';
import { Worker } from 'src/app/models/Worker';
import { Position } from 'src/app/models/Position';

@Component({
  selector: 'app-addworker',
  templateUrl: './addworker.component.html',
  styleUrls: ['./addworker.component.css']
})
export class AddworkerComponent implements OnInit {
  positions?: Position[]
  worker = new Worker(new Position('',true,true), 0, "", "", "", "");
  constructor(private workerService: WorkerListApicallService) { }

  ngOnInit(): void {
    this.getWorkerPosition()
  }
  getWorkerPosition() {
       this.workerService.getWorkerPosition().subscribe(positions => {
         this.positions = positions
       })
  }
  postWorker(worker : Worker){
    this.workerService.postWorker(worker,'POST')
  }
}
