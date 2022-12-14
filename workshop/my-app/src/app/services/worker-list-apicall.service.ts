import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";
import { Position } from '../models/Position';
import { Worker } from '../models/Worker';

@Injectable({
  providedIn: 'root'
})
export class WorkerListApicallService {

  constructor(private http: HttpClient) { }
  getWorker = (): Observable<Worker[]> => this.http.get<Worker[]>("http://localhost:8000/workers.json")
  getWorkerPositions = (): Observable<Position[]> => this.http.get<Position[]>("http://localhost:8000/positions.json")
  private _WorkerSource = new Subject<any[3]>();
  WorkerSource$ = this._WorkerSource.asObservable();

  postWorker(json: Worker, httpType:string):void{
    this._WorkerSource.next([json, httpType]);
  }
  delWorker(id:number):void{
    this._WorkerSource.next([id, "DELETE"]);
   }
  putWorker(salary:number,id:number){
    this._WorkerSource.next([salary,"PUT",id]);
  }
}
