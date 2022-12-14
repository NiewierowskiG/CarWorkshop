import { Client } from './../../models/Client';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[my-tr]',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  @Input() clientForPrint!: Client;


  constructor() {
  }
  ngOnInit(): void {
  }

}
