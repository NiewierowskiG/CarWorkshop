import { RouterLink } from '@angular/router';
import { ApiCudService } from './../../services/api-cud.service';
import { Component, OnInit } from '@angular/core';
import { ClientListApicallService } from '../../services/client-list-apicall.service';
import { Client } from 'src/app/models/Client';
import { SelectMultipleControlValueAccessor } from '@angular/forms';
import { waitForAsync } from '@angular/core/testing';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  clients?: Client[]
  searchText?: string;
  constructor(private clientService: ClientListApicallService) { }
  ngOnInit(): void {
    this.getClient()
  }
  getClient() {
    this.clientService.getClient().subscribe(clients => {
      this.clients = clients;
    })
  }

  sendClient(client: Client): void {
    this.clientService.sendClient(client, "POST");
  }
  delClient(id: number): void {
    this.clientService.delClient(id);
    setTimeout( (_:any)=>{this.getClient();} ,50) //time to be sure that client was deleted

  }
}
