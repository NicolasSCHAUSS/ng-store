import { NgIf } from '@angular/common';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ArticleService } from '../../service/article.service';
import { CaddyService } from '../../service/caddy.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatButtonModule,
     MatMenuModule, MatInputModule, MatFormFieldModule, FormsModule, MatBadgeModule,NgIf],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent implements OnInit, OnDestroy {

  @Input()
  public searchField: boolean = false;

  public caddySubscription: Subscription = new Subscription();

  public caddyCount: number = 0;

  constructor(private router:Router, private articleService:ArticleService ,  private caddyService:CaddyService) {
  }

  ngOnInit(): void {
    this.caddySubscription = this.caddyService.articles.subscribe(caddy => this.caddyCount = caddy.length);
  }

  ngOnDestroy(): void {
    this.caddySubscription.unsubscribe();
  }

  onSearch(value: string): void {
    if(value != '' || value != null || value != undefined)
      this.router.navigate(['/home', {search:value}]);
    else
      this.goHome();
  }

  goHome() {
    this.router.navigate(['/home']);
  }

  goCaddy() {
    this.router.navigate(["/caddy"]);
  }

  goLogin() {
    this.router.navigate(["/login"])
  }

  goAbout() {
    this.router.navigate(["/about"])
  }
}
