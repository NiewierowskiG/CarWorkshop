import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Client} from "../models/Client";

@Injectable({
  providedIn: 'root'
})
export class ClientListApicallService {

  constructor(private httpClient1: HttpClient) {}
  getClient = (): Observable<Client[]> => this.httpClient1.get<Client[]>("http://localhost:8000/clients.json")
}