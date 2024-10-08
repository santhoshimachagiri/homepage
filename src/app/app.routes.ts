import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [
    { path: '', component:HomeComponent},
    { path:'login',component:LoginComponent},
     {path:'signup',component:SignupComponent}
];
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]

})
export class AppRoutingModule{}