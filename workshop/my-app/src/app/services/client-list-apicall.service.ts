import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { BehaviorSubject, Observable, Subject} from "rxjs";
import {Client} from "../models/Client";

@Injectable({
  providedIn: 'root'
})
export class ClientListApicallService {


  constructor(private httpClient1: HttpClient) {}


  getClient = (headers: any): Observable<Client[]> => this.httpClient1.get<Client[]>("http://localhost:8000/clients.json", {headers: headers})

  private _clientSource = new Subject<any[3]>();
  clientSource$ = this._clientSource.asObservable();

  postClient(json: Client, httpType:string):void{
    this._clientSource.next([json, httpType]);
  }
  delClient(id:number):void{
    this._clientSource.next([id, "DELETE"]);
   }
  putClient(client:Client,id:number){
    this._clientSource.next([client,"PUT",id]);
  }
}
