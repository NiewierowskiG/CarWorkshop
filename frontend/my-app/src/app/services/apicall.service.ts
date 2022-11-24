import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Car} from "../models/Car";

@Injectable({
  providedIn: 'root'
})
export class ApicallService {

  constructor(private httpClient: HttpClient) { }
  getColor = (): Observable<Car[]> => this.httpClient.get<Car[]>("http://localhost:8000/cars.json")
}
