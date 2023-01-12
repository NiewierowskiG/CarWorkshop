import { observable, Subscription } from 'rxjs';
import { Observable, timeInterval } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ClientListApicallService } from '../../services/client-list-apicall.service';
import { Client } from 'src/app/models/Client';
import { RepairListApicallService } from 'src/app/services/repair-list-apicall.service';
import {Repair} from "../../models/Repair";
import {HttpClient, HttpHeaders} from '@angular/common/http';
//import { LoginComponent} from "../login/login.component";

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  searchText?: string;
  clients$?: Observable<Client[]>

  repairs?: Repair[];
  repairs$?: Observable<Repair[]>
  constructor(private clientService: ClientListApicallService, private repairService: RepairListApicallService, private clientHttp: HttpClient) {}


  ngOnInit(): void {
    const token = localStorage.getItem('token')
    const headers = new HttpHeaders().set('Authorization', 'Token ' + token);
    this.clients$ = this.clientService.getClient(headers);
    this.repairs$ = this.repairService.getRepair(headers);
    this.clientHttp.get<Repair[]>("http://localhost:8000/repairs.json", {headers: headers}).subscribe(repairs => {
      this.repairs = repairs;
      console.log(repairs);
    });
  }

  delClient(id: number, email: string): void {
    const token = localStorage.getItem('token')
    const headers = new HttpHeaders().set('Authorization', 'Token ' + token);
    if(this.repairs != undefined)
    {
      let filtr = this.repairs.filter(repair => repair.client.email == email)
      console.log(filtr)
      if (filtr.length > 0) {
        alert("Naprawa istnieje")
      }
      else
      {
        this.clientService.delClient(id);
        setTimeout( (_:any)=>{this.clients$ = this.clientService.getClient(headers);} ,10); //time to be sure that client was deleted
      }
    }

  }

  putClient(client: Client, id: number) {
    this.clientService.putClient(client, id);
  }

}
