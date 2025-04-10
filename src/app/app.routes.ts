import { Routes } from '@angular/router';
import { RegistrationformComponent } from './registrationform/registrationform.component';
import { HomepageComponent } from './homepage/homepage.component';

export const routes: Routes = [
    {path:"" ,component:HomepageComponent},
    {path:"registration-form" ,component:RegistrationformComponent}, 

];
