import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Repair} from "../models/Repair";

@Injectable({
  providedIn: 'root'
})
export class ApicallService {

  constructor(private httpClient: HttpClient) { }
  getRepair = (): Observable<Repair[]> => this.httpClient.get<Repair[]>("http://localhost:8000/repairs.json")
}
