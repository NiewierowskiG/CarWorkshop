import { Component, OnInit } from '@angular/core';
import {ApicallService} from "../services/apicall.service";

@Component({
  selector: 'app-fetchapi',
  templateUrl: './fetchapi.component.html',
  styleUrls: ['./fetchapi.component.css']
})
export class FetchapiComponent implements OnInit {
  cars: any;
  constructor(private appService: ApicallService) { }

  ngOnInit(): void {
    this.cars = this.appService.getData()
  }

}
