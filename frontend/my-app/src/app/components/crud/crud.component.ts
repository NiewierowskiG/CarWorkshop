import { Observable } from 'rxjs';
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
        console.log("success5")
        if (table[1] === 'POST'){
          this.postClient(table[0]);
        }
        else if (table[1] === 'DELETE'){
          this.deleteClient(table[0]);
        }
        console.log("success6")
      }
    )
  }




  postCarBrand(rep : CarBrand):void{
    const header = new HttpHeaders({'Content-Type':'application/json'})
    this.http.post('http://localhost:8000/car_brands/', JSON.stringify(rep), {headers : header})
    .subscribe((res)=>{
      console.log(res);
    })
  }
  postWorker(rep : Worker):void{
    const header = new HttpHeaders({'Content-Type':'application/json'})
    this.http.post('http://localhost:8000/workers/', JSON.stringify(rep), {headers : header})
    .subscribe((res)=>{
      console.log(res);
    })
  }
  postClient(rep : Client):void{
    const header = new HttpHeaders({'Content-Type':'application/json'})
    console.log(JSON.stringify(rep));
    this.http.post('http://localhost:8000/clients/', JSON.stringify(rep), {headers : header})
    .subscribe((res)=>{
      console.log(rep);
    })
  }
  deleteClient(id : number):void{
    console.log("success3")
    const header = new HttpHeaders({'Content-Type':'application/json'})
    let observer = this.http.delete('http://localhost:8000/clients/'.concat(id.toString()), {headers : header})
    .subscribe()
  }

}
