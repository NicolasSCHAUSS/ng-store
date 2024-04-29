import { CurrencyPipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { Router } from '@angular/router';
import { Article } from '../../model/article';
import { CaddyService } from '../../service/caddy.service';
import { ArticleService } from '../../service/article.service';
import { ArticleComponent } from '../article/article.component';
import { MenuComponent } from '../menu/menu.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-caddy',
  standalone: true,
  imports: [ArticleComponent, CurrencyPipe, MatAccordion, MenuComponent],
  templateUrl: './caddy.component.html',
  styleUrl: './caddy.component.scss',
  providers: [ArticleService, Router]
})
export class CaddyComponent implements OnInit, OnDestroy{
  
  public caddySubscription: Subscription = new Subscription();
  public articles: Article[] = [];
  public total: number;

  //TODO: recuperer taille via home (home->article->ajout) et non menu
  constructor(private caddyService:CaddyService) {
    this.total = 0;
    this.articles 
  }

  ngOnInit(): void {
    this.caddySubscription = this.caddyService.articles.subscribe(caddy => this.articles = caddy);
  }

  ngOnDestroy(): void {
    this.caddySubscription.unsubscribe();
  }

  public getTotal() :number {
    var total = 0;
    for(var a of this.articles) {
      total += a.price;
    }
    this.total = total;

    return this.total;
  }

  public removeArticle(article: Article) {
    let index = this.articles.indexOf(article);
    this.articles.splice(index, 1);
    this.caddyService.update(this.articles);
  }
}
