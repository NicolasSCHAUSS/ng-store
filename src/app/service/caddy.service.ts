import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Article } from '../model/article';
@Injectable({
  providedIn: 'root'
})
export class CaddyService {

  public articles : BehaviorSubject<Article[]>;

  constructor() {
    var caddy = sessionStorage.getItem("caddy");
    if(caddy) {
      this.articles = new BehaviorSubject<Article[]>(JSON.parse(caddy));
    }
    else{
      sessionStorage.setItem("caddy",JSON.stringify([]));
      this.articles = new BehaviorSubject<Article[]>([]);
    }
  }

  public update(caddy : Article[]) {
    this.articles.next(caddy);
    sessionStorage.setItem("caddy", JSON.stringify(this.articles.value));
  }
}
