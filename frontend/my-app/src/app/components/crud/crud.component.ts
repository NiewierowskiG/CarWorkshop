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
    this._clientService.clientSource$.subscribe(
      table => {
        if (table[1] === 'POST'){1
          this.postClient(table[0]);
        }
        else if (table[1] === 'DELETE'){
          this.deleteClient(table[0]);
        }
        else if(table[1]==='PUT'){
          this.putClient(table[0],table[2]);
        }
      }
    )
  }


  postClient(rep : Client):void{
    const header = new HttpHeaders({'Content-Type':'application/json'})
    console.log(JSON.stringify(rep));
    this.http.post('http://localhost:8000/clients/', JSON.stringify(rep), {headers : header})
    .subscribe((res)=>{
      console.log(res);
    })

  }
  deleteClient(id : number):void{
    const header = new HttpHeaders({'Content-Type':'application/json'})
    this.http.delete('http://localhost:8000/clients/'.concat(id.toString()), {headers : header})
    .subscribe((res)=>{

    })

  }

  putClient(rep : Client,id:Number): void{
    const header = new HttpHeaders({'Content-Type':'application/json'})
    this.http.put('http://localhost:8000/clients/'.concat(id.toString()), JSON.stringify(rep), {headers : header})
    .subscribe((res)=>{

    })

  }

  postWorker(rep : Worker):void{
    const header = new HttpHeaders({'Content-Type':'application/json'})
    this.http.post('http://localhost:8000/workers/', JSON.stringify(rep), {headers : header})
    .subscribe((res)=>{

      console.log(res);
    })

  }
  postCarBrand(rep : CarBrand):void{
    const header = new HttpHeaders({'Content-Type':'application/json'})
    this.http.post('http://localhost:8000/car_brands/', JSON.stringify(rep), {headers : header})
    .subscribe((res)=>{
      console.log(res);
    })

  }
}
