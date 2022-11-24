import { Component, OnInit } from '@angular/core';
import {ApicallService} from "../services/apicall.service";
import {Car} from "../models/Car";

@Component({
  selector: 'app-fetchapi',
  templateUrl: './fetchapi.component.html',
  styleUrls: ['./fetchapi.component.css']
})
export class FetchapiComponent implements OnInit {
  cars?: Car[];
  constructor(private appService: ApicallService) { }

  ngOnInit(): void {
    this.getColor()
  }
  getColor(){
    this.appService.getColor().subscribe(cars => {this.cars = cars})
  }
}
