import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private toastr: ToastrService) {
    toastr.toastrConfig.positionClass = "toast-bottom-right";
    toastr.toastrConfig.progressBar = true;
    toastr.toastrConfig.newestOnTop = true;
   }

  public sucess(message: string, title?: string) {
    this.toastr.success(message, title);
  }
  
  public error(message: string, title?: string) {
    this.toastr.error(message, title);
  }

  public warning(message: string, title?: string) {
    this.toastr.warning(message, title);
  }
  
  public info(message: string, title?: string) {
    this.toastr.info(message, title);
  }
}
