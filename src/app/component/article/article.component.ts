import { CurrencyPipe, NgClass, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { Router } from '@angular/router';
import { Article } from '../../model/article';
import { StockPipe } from '../../pipe/stock.pipe';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CurrencyPipe, StockPipe, NgClass, NgIf, MatExpansionModule, MatAccordion],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss',
  providers: [Router]
})
export class ArticleComponent implements OnDestroy{

  @Input()
  public article!: Article;

  @Input()
  public isInCaddy: boolean = false;

  @Output()
  public buy: EventEmitter<Article> = new EventEmitter<Article>();

  @Output()
  public remove: EventEmitter<Article> = new EventEmitter<Article>();
  
  constructor(private route: Router) {
  }

  ngOnDestroy(): void {
      this.buy.unsubscribe();
      this.remove.unsubscribe();
  }

  public addArticle() {
    this.buy.emit(this.article);
  }

  public removeArticle(e :Event) {
    e.stopPropagation();
    this.remove.emit(this.article);
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

  public details() {
    this.route.navigate(["article", this.article.id]);
  }
}
