import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-repair',
  templateUrl: './show-repair.component.html',
  styleUrls: ['./show-repair.component.css']
})
export class ShowRepairComponent implements OnInit {
  repairId: number = 0
  workerId: number = 0
  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.repairId = Number(this.route.snapshot.paramMap.get("repairId"));
    this.workerId = Number(this.route.snapshot.paramMap.get("workerId"));
  }


  startStopWork() {
    this.http.get('http://localhost:8000/startStopRepair/'.concat(this.repairId.toString(),'/',this.workerId.toString()))
      .subscribe((res) => {
        console.log(res);
      })
  }

  endRepair() {
    this.http.get('http://localhost:8000/endRepair/'.concat(this.repairId.toString()))
    .subscribe((res) => {
      console.log(res);
    })
  }
}
