import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
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
