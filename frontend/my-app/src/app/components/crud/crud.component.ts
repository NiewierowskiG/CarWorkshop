import { WorkerListApicallService } from 'src/app/services/worker-list-apicall.service';
import { ClientListApicallService } from 'src/app/services/client-list-apicall.service';
import { CarBrand } from './../../models/CarBrand';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Worker } from './../../models/Worker';
import { Client } from 'src/app/models/Client';
import { Repair } from "../../models/Repair";
import {RepairListApicallService} from "../../services/repair-list-apicall.service";


@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {


  constructor(private http: HttpClient, private _clientService : ClientListApicallService,
              private _workerService : WorkerListApicallService, private _repairService : RepairListApicallService) { }


  ngOnInit(): void {
    this._clientService.clientSource$.subscribe(
      table => {
        if (table[1] === 'POST'){
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
    this._workerService.WorkerSource$.subscribe(
      table => {
        if (table[1] === 'POST'){
          this.postWorker(table[0]);
        }
        else if (table[1] === 'DELETE'){
          this.deleteWorker(table[0]);
        }
        else if(table[1]==='PUT'){
          this.putWorker(table[0],table[2]);
        }
      }
    )
    this._repairService.RepairSource$.subscribe(
      table => {
        if (table[1] === 'POST'){
          this.postRepair(table[0]);
        }
        else if (table[1] === 'DELETE'){
          this.deleteRepair(table[0]);
        }
        else if (table[1]==='PUT'){
          this.putRepair(table[0], table[2]);
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
    console.log(JSON.stringify(rep));
    this.http.post('http://localhost:8000/workers/', JSON.stringify(rep), {headers : header})
    .subscribe((res)=>{
      console.log(res);
    })

  }
  putWorker(rep : number,id:number):void{
    const header = new HttpHeaders({'Content-Type':'application/json'})
    console.log(id);
    this.http.patch('http://localhost:8000/workers/'.concat(id.toString()), {'salary':rep}, {headers : header})
    .subscribe((res)=>{

      console.log(res);
    })

  }
  deleteWorker(id : number):void{
    const header = new HttpHeaders({'Content-Type':'application/json'})
    this.http.delete('http://localhost:8000/workers/'.concat(id.toString()), {headers : header})
    .subscribe((res)=>{

    })
  }

  postRepair(rep : Repair):void{
    const header = new HttpHeaders({'Content-Type':'application/json'})
    console.log(JSON.stringify(rep));
    this.http.post('http://localhost:8000/repairs/', JSON.stringify(rep), {headers : header})
    .subscribe((res)=>{
      console.log(res);
    })

  }
  putRepair(rep : number,id:number):void{
    const header = new HttpHeaders({'Content-Type':'application/json'})
    console.log(id);
    this.http.patch('http://localhost:8000/repairs/'.concat(id.toString()), {'salary':rep}, {headers : header})
    .subscribe((res)=>{

      console.log(res);
    })

  }
  deleteRepair(id : number):void{
    const header = new HttpHeaders({'Content-Type':'application/json'})
    this.http.delete('http://localhost:8000/repairs/'.concat(id.toString()), {headers : header})
    .subscribe((res)=>{

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
