import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';
  error = '';

  constructor(private router: Router, private http: HttpClient) {
  }

  onLogin() {
    let data = {
      'username': this.username,
      'password': this.password
    };
    console.log(data)

    this.http.post('http://localhost:8000/api-token-auth/', data).subscribe((response: any) => {
      localStorage.setItem('token', response.token);
      //console.log(response.token)
      console.log(localStorage.getItem('token'))
    });
    this.router.navigate(['/MainPage']);

  }
}
