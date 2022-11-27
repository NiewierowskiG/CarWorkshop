import { CarBrand } from './../../models/CarBrand';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Repair } from 'src/app/models/Repair';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  constructor(private http: HttpClient) { }

  object = new CarBrand('BMW');

  ngOnInit(): void {
    this.postCarBrand(this.object);
  }


  postCarBrand(rep : CarBrand){
    const header = new HttpHeaders({'Content-Type':'application/json'})
    this.http.post('http://localhost:8000/car_brands/', JSON.stringify(rep), {headers : header})
    .subscribe((res)=>{
      console.log(res);
    })
  }
}
