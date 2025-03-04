import { NgIf } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Article } from '../../model/article';
import { ArticleService } from '../../service/article.service';
import { CaddyService } from '../../service/caddy.service';
import { ArticleComponent } from '../article/article.component';
import { CaddyComponent } from '../caddy/caddy.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ArticleComponent, CaddyComponent, NgIf],
  providers:[ArticleService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy{

  public articles: Article[] = [];
  public articlesSubscription: Subscription = new Subscription();

  public caddyArticles: Article[] = [];
  public caddySubscription: Subscription = new Subscription();

  constructor(private route: ActivatedRoute,private articleService: ArticleService, 
    private caddyService: CaddyService) {
  }

  ngOnInit(): void {
    let value = this.route.snapshot.paramMap.get('search');
    console.log(value);
    if(value != "" && value != null)
      this.articlesSubscription = this.articleService.search(value).subscribe(data => this.articles = data);
    else
      this.articlesSubscription = this.articleService.getAll().subscribe(data => this.articles = data);
    
    this.caddySubscription = this.caddyService.articles.subscribe(caddy => this.caddyArticles = caddy);
  }

  ngOnDestroy(): void { 
    this.articlesSubscription.unsubscribe();
    this.caddySubscription.unsubscribe();
  }

  public addArticle(article : Article) {
    this.caddyArticles.push(article);
    this.caddyService.update(this.caddyArticles);
  }
}
