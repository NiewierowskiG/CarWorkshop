import { observable, Subscription } from 'rxjs';
import { Observable, timeInterval } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ClientListApicallService } from '../../services/client-list-apicall.service';
import { Client } from 'src/app/models/Client';
@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  searchText?: string;
  clients$?: Observable<Client[]>


  constructor(private clientService: ClientListApicallService) { }

  ngOnInit(): void {
    this.clients$ = this.clientService.getClient();
  }

  delClient(id: number): void {
    this.clientService.delClient(id);
    setTimeout( (_:any)=>{this.clients$ = this.clientService.getClient();} ,10) //time to be sure that client was deleted
  }

  putClient(client: Client, id: number) {
    this.clientService.putClient(client, id);
  }

}
