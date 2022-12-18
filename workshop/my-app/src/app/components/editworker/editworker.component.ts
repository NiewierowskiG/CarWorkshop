import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Worker } from "../../models/Worker";
import { WorkerListApicallService } from "../../services/worker-list-apicall.service";

@Component({
  selector: 'app-editworker',
  templateUrl: './editworker.component.html',
  styleUrls: ['./editworker.component.css']
})
export class EditworkerComponent implements OnInit {
  id!: number
  salary?: number
  money?: number
  constructor(private route: ActivatedRoute, private workerservice: WorkerListApicallService,private client: HttpClient) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get("id"));
    this.salary = Number(this.route.snapshot.paramMap.get("salary"));

    this.client.get<any>("http://localhost:8000/workerMoney/".concat(this.id.toString())).subscribe(money => {
      this.money = money.amount;
    });
  }
  putWorker( salary?: number,id?: number):void{
    if(id!=undefined && salary!=undefined ){
      this.workerservice.putWorker(salary,id);
    }
  }

}

