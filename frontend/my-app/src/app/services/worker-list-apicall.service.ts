import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import { Worker } from '../models/Worker';

@Injectable({
  providedIn: 'root'
})
export class WorkerListApicallService {

  constructor(private httpClient2: HttpClient) { }
  getWorker = (): Observable<Worker[]> => this.httpClient2.get<Worker[]>("http://localhost:8000/workers.json")
}
