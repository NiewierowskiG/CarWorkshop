import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';
  error = '';
  isLoggedIn = false;
  constructor(private router: Router, private http: HttpClient, private snackBar: MatSnackBar) {
  }
  ngOnInit() {
    if (localStorage.getItem('token')) {
      this.isLoggedIn = true;
    }
  }
  onLogin() {
    let data = {
      'username': this.username,
      'password': this.password
    };

    this.http.post('http://localhost:8000/api-token-auth/', data)
      .pipe(catchError(err => {
        if (err.status === 400) {
            this.error = err.error.non_field_errors[0];
        } else {
            this.error = 'An error occurred, please try again';
        }
        return throwError(err);
    }))
      .subscribe((response: any) => {
        localStorage.setItem('token', response.token);
        console.log('eooo' + localStorage.getItem('token'))
        this.router.navigate(['/MainPage']);
        this.snackBar.open('Login successful!', 'Dismiss', {duration: 3000});
      });
  }
  logout() {
    localStorage.removeItem('token');
    this.isLoggedIn = false;
  }
}
