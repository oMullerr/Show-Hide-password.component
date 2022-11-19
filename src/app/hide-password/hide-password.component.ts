import { Component } from '@angular/core';

@Component({
  selector: 'app-hide-password',
  templateUrl: './hide-password.component.html',
  styleUrls: ['./hide-password.component.scss']
})
export class HidePasswordComponent {
  public showPassword: boolean = false;

  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
}
