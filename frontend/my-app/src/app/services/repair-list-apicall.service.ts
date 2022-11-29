import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, Subject} from "rxjs";
import {Repair} from "../models/Repair";

@Injectable({
  providedIn: 'root'
})
export class RepairListApicallService {

  constructor(private httpRepair: HttpClient) { }
  getRepair = (): Observable<Repair[]> => this.httpRepair.get<Repair[]>("http://localhost:8000/repairs.json")

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
