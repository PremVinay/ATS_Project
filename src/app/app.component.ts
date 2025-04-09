import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { RegistrationformComponent } from './registrationform/registrationform.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RegistrationformComponent,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ATS_Project';
  handleclick(){
    console.log("handle click event")
  }
}
