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
  worker = new Worker(new Position('',true,true), 0, "", "", "", "");
  constructor(private workerService: WorkerListApicallService) { }

  ngOnInit(): void {
  }
  postWorker(worker : Worker){
    this.workerService.postWorker(worker,'POST')
  }
}
