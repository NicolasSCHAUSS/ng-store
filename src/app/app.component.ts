import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';
import { MenuComponent } from './component/menu/menu.component';
import { Article } from './model/article';
import { CaddyService } from './service/caddy.service';
import { ArticleService } from './service/article.service';
import { HomeComponent } from './component/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [CaddyService]
})
export class AppComponent {
  public title = 'ng-store';
  constructor() {
  }
}
