import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL :string = "http://localhost:8080/auth"

  constructor(private http: HttpClient) {
  }

  public login(email: string, password: string): Observable<Object> {
    return this.http.post(this.URL+'/login', {email: email, password: password});
  }

  public isLogged() :boolean {
    const token = sessionStorage.getItem('token');
    return token == '' || token == null ? false : true;
  }
}
