import { Component, OnInit } from '@angular/core';
import {ApicallService} from "../../services/apicall.service";
import {Repair} from "../../models/Repair";


@Component({
  selector: 'app-fetchapi',
  templateUrl: './fetchapi.component.html',
  styleUrls: ['./fetchapi.component.css']
})
export class FetchapiComponent implements OnInit {
  repairs?: Repair[];
  constructor(private appService: ApicallService) { }

  ngOnInit(): void {
    this.getRepair()
  }
  getRepair(){
    this.appService.getRepair().subscribe(repairs => {this.repairs = repairs})
  }
}
