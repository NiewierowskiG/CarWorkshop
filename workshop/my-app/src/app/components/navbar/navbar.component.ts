import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private http: HttpClient) { }
  nameday?: any;
  ngOnInit(): void {

    this.http.get<any>('https://nameday.abalin.net/api/V1/today').subscribe( nameday =>{
      this.nameday = nameday;
      console.log(nameday.nameday.pl)
    });
  }
  /*showNameday(){
    this.http.get<any>('https://nameday.abalin.net/api/V1/today').subscribe(nameday=>{
      return `
      ${nameday.nameday.pl}
      `;
    })
  }*/
  isLogged(){
    if(!localStorage.getItem('token')){
      return true;
    }else {return false}
  }
  logout() {
    localStorage.removeItem('token');
    window.alert("Wylogowałeś się!")
  }

}
