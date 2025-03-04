import { Component, OnInit, Output } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { CaddyService } from '../../service/caddy.service';
import { Article } from '../../model/article';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [MenuComponent],
  providers: [CaddyService],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit{

  @Output()
  public caddyArticles: Article[] = [];

  constructor(private caddyService: CaddyService) {

  }

  ngOnInit(): void {
    this.caddyService.articles.subscribe(caddy => this.caddyArticles = caddy);
  }
}
