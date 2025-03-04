import { CurrencyPipe, NgClass, NgIf } from '@angular/common';
import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { Article } from '../../model/article';
import { StockPipe } from '../../pipe/stock.pipe';
import { CaddyService } from '../../service/caddy.service';
import { ArticleService } from '../../service/article.service';
import { CaddyComponent } from '../caddy/caddy.component';
import { MenuComponent } from '../menu/menu.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-article-details',
  standalone: true,
  imports: [MatCardModule, MatButtonModule,  CurrencyPipe, StockPipe, NgClass, CaddyComponent, NgIf, MenuComponent],
  templateUrl: './article-details.component.html',
  styleUrl: './article-details.component.scss',
  providers: [Router]
})
export class ArticleDetailsComponent implements OnInit, OnDestroy{

  public caddyArticles: Article[] = [];
  
  public article!: Article;

  public buy: EventEmitter<Article> = new EventEmitter<Article>();

  public caddySubscription: Subscription = new Subscription();

  public articleSubscription: Subscription = new Subscription();

  constructor(private articleService :ArticleService, private caddyService :CaddyService,private route:Router) {
  }

  ngOnInit(): void {
    let url = this.route.url.split("/");
    let idArticle = Number(url.at(url.length-1));
    this.articleSubscription = this.articleService.get(idArticle).subscribe( data => this.article = data);
    this.caddySubscription = this.caddyService.articles.subscribe(caddy=> this.caddyArticles=caddy);
  }

  ngOnDestroy(): void {
      this.buy.unsubscribe();
      this.articleSubscription.unsubscribe();
      this.caddySubscription.unsubscribe();
  }

  addArticle() {
    this.caddyArticles.push(this.article);
    this.caddyService.update(this.caddyArticles);
  }

  public stockStyle() {
    if(this.article.stock <= 3) {
      return 'alert';
    }
    else if (this.article.stock > 3 && this.article.stock <= 10) {
      return 'warning';
    }
    else {
      return 'info';
    }
  }
}
