import { CarBrand } from './../../models/CarBrand';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Position } from 'src/app/models/Position';
import { Worker } from './../../models/Worker';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  constructor(private http: HttpClient) { }

  object = new CarBrand('BMW');;
  pos = new Position('szef',true,true);
  object1 = new Worker(this.pos,2000,'mariusz','myk','505250123','email@sad.pl')
  ngOnInit(): void {
    console.log(JSON.stringify(this.object1));
    this.postWorker(this.object1);

  }


  postCarBrand(rep : CarBrand){
    const header = new HttpHeaders({'Content-Type':'application/json'})
    this.http.post('http://localhost:8000/car_brands/', JSON.stringify(rep), {headers : header})
    .subscribe((res)=>{
      console.log(res);
    })
  }
  postWorker(rep : Worker){
    const header = new HttpHeaders({'Content-Type':'application/json'})
    this.http.post('http://localhost:8000/workers/', JSON.stringify(rep), {headers : header})
    .subscribe((res)=>{
      console.log(res);
    })
  }
}
