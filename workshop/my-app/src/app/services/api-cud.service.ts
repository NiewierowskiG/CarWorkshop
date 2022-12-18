import { Repair } from './../models/Repair';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiCudService {

  constructor(private http: HttpClient) { }

  postRepair(rep : Repair){
    this.http.post('http://localhost:8000/repairs.json', JSON.stringify(rep))
    .subscribe((res)=>{
      console.log(res);
    })
  }

}
