import { ApiCudService } from './../../services/api-cud.service';
import { Component, OnInit } from '@angular/core';
import {ClientListApicallService} from '../../services/client-list-apicall.service';
import { Client } from 'src/app/models/Client';

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

  sendClient(client : Client){
    this.clientService.sendClient(new Client('imie','nazwisko','4124444','szybki@mail.com',213123123),'POST');
  }
}
