import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../model/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  
  private URL :string = "http://localhost:8080/article"

  constructor(private http: HttpClient) { }

  public get(id :number): Observable<Article> {
    return this.http.get<Article>(this.URL+'/'+id, {headers: new HttpHeaders({'Content-Type':'application/json'})});
  }

  public getAll(): Observable<Article[]> {
    return this.http.get<Article[]>(this.URL+'/all', {headers: new HttpHeaders({'Content-Type':'application/json'})});
  }

  public search(searchInput:string): Observable<Article[]> {
    return this.http.get<Article[]>(this.URL+"/search/"+searchInput, {headers: new HttpHeaders({'Content-Type':'application/json'})});
  }
}
