import { ClientListApicallService } from 'src/app/services/client-list-apicall.service';
import { CarBrand } from './../../models/CarBrand';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Worker } from './../../models/Worker';
import { Client } from 'src/app/models/Client';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  constructor(private http: HttpClient, private _clientService : ClientListApicallService) { }



  ngOnInit(): void {
    let client = new Client('imie','nazwisko','4124444','szybki@mail.com',213123123);
    console.log(JSON.stringify(client));
    this._clientService.clientSource$.subscribe(
      table => {
        if (table[1] === 'POST'){
          this.postClient(table);
        }
      }
    )

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
  postClient(rep : Client){
    const header = new HttpHeaders({'Content-Type':'application/json'})
    console.log(JSON.stringify(rep));
    this.http.post('http://localhost:8000/clients/', JSON.stringify(rep), {headers : header})
    .subscribe((res)=>{
      console.log(rep);
    })
  }
}
