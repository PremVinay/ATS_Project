import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-registrationform',
  imports: [FormsModule,CommonModule],
  templateUrl: './registrationform.component.html',
  styleUrl: './registrationform.component.css'
})
export class RegistrationformComponent {
  showPassword=false;
  showRepeatPassword=false;

  ShowPassword(){

    this.showPassword=!this.showPassword;
  }
  ShowRepeatPassword(){
    this.showRepeatPassword=!this.showRepeatPassword;
  }
}
