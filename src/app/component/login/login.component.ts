import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { Auth } from '../../model/auth';
import { AuthService } from '../../service/auth.service';
import { NotificationService } from '../../service/notification.service';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatLabel, 
    MatCardModule , MatButtonModule, MenuComponent,
    MatIconModule, ToastrModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: [Router, NotificationService]
})
export class LoginComponent {

  public hide: boolean = true;

  constructor(private router: Router,
    private authService: AuthService,
    private notificationService: NotificationService) {
  }

  connect(email: string, password: string): void {
    this.authService.login(email, password)
      .subscribe( result => {
        this.notificationService.sucess("Connecté avec succès !");
        sessionStorage.setItem('token', (result as Auth).token);
        this.router.navigate(['/home']);
      },
      error => {
        this.notificationService.error("Email ou mot de passe éronné !");
      });
  }

  goRegister(): void {
    this.router.navigate(['/register'])
  }
}
