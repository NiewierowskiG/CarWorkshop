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
    let data = this.route.snapshot.paramMap.get("worker");

  }
}

