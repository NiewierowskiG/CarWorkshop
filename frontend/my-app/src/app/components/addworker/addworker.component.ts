import { Component, OnInit } from '@angular/core';
import { WorkerListApicallService } from 'src/app/services/worker-list-apicall.service';
import { Worker } from 'src/app/models/Worker';
@Component({
  selector: 'app-addworker',
  templateUrl: './addworker.component.html',
  styleUrls: ['./addworker.component.css']
})
export class AddworkerComponent implements OnInit {
  worker = new Worker("", 0, "", "", "", "")
  constructor(private workerService: WorkerListApicallService) { }

  ngOnInit(): void {
  }
  sendWorker(worker : Worker){
    this.workerService.sendWorker(worker,'POST')
  }
}
