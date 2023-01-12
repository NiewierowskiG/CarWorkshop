import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, Subject} from "rxjs";
import {Repair} from "../models/Repair";
import {Worker} from "../models/Worker";
import {Client} from "../models/Client";
import {Car} from "../models/Car";


@Injectable({
  providedIn: 'root'
})
export class RepairListApicallService {

  constructor(private http: HttpClient) { }
  getRepair = (headers:any): Observable<Repair[]> => this.http.get<Repair[]>("http://localhost:8000/repairs.json", {headers: headers})
  getWorkers = (headers:any): Observable<Worker[]> => this.http.get<Worker[]>("http://localhost:8000/workers.json", {headers: headers})
  getClients = (headers:any): Observable<Client[]> => this.http.get<Client[]>("http://localhost:8000/clients.json", {headers: headers})
  getCars = (): Observable<Car[]> => this.http.get<Car[]>("http://localhost:8000/cars.json")
  private _RepairSource = new Subject<any[3]>();
  RepairSource$ = this._RepairSource.asObservable();

  postRepair(json: Repair, httpType:string):void{
    this._RepairSource.next([json, httpType]);
  }
  delRepair(id:number):void{
    this._RepairSource.next([id, "DELETE"]);
   }
  putRepair(Repair:Repair,id:number){
    this._RepairSource.next([Repair,"PUT",id]);
  }
}
