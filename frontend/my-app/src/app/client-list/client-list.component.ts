import { Component, OnInit } from '@angular/core';
import {ClientListApicallService} from '../services/client-list-apicall.service';
import {Client} from '../models/Client';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  clients?: Client[]
  constructor(private clientService: ClientListApicallService) { }
  ngOnInit(): void {
    this.getClient()
  }
  getClient(){
    this.clientService.getClient().subscribe(clients =>{
      this.clients = clients;
    })
  }
}
