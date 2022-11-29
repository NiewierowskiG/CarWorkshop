import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Worker} from "../../models/Worker";
import {WorkerListApicallService} from "../../services/worker-list-apicall.service";

@Component({
  selector: 'app-editworker',
  templateUrl: './editworker.component.html',
  styleUrls: ['./editworker.component.css']
})
export class EditworkerComponent implements OnInit {
  worker?: object;
  workertmp?: Worker
  id?: number
  constructor(private route: ActivatedRoute, private workerservice: WorkerListApicallService) { }

  ngOnInit(): void {
    let data = this.route.snapshot.paramMap.get("worker");
    if(data!=undefined){
      this.worker = JSON.parse(atob(data));
      if(this.worker!=undefined) {
        this.workertmp = new Worker(this.worker['possition'], this.worker['salary'], this.worker['name'], this.worker['surname'], this.worker['telNr'], this.worker['email']);
        this.id = this.worker['id'];
      }
      console.log(JSON.parse(atob(data)));
    }
  }
}
