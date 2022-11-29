import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Worker } from "../../models/Worker";
import { WorkerListApicallService } from "../../services/worker-list-apicall.service";

@Component({
  selector: 'app-editworker',
  templateUrl: './editworker.component.html',
  styleUrls: ['./editworker.component.css']
})
export class EditworkerComponent implements OnInit {
  id?: number
  salary?: number
  constructor(private route: ActivatedRoute, private workerservice: WorkerListApicallService) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get("id"));
    this.salary = Number(this.route.snapshot.paramMap.get("salary"));
  }
  putWorker( salary?: number,id?: number):void{
    if(id!=undefined && salary!=undefined ){
      this.workerservice.putWorker(salary,id);
    }
  }
}

