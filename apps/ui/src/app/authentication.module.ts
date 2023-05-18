import {NgModule} from "@angular/core";
import {Route, RouterModule} from "@angular/router";
import {LoginComponent} from "./containers/login/login.component";
import {LoginFormComponent} from "./presentational/login-form/login-form.component";
import {RegisterFormComponent} from "./presentational/register-form/register-form.component";
import {RegisterComponent} from "./containers/register/register.component";

export const authRoutes: Route[] = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
]

@NgModule({
  imports: [RouterModule],
  declarations: [LoginComponent, LoginFormComponent, RegisterFormComponent, RegisterComponent]
})
export class AuthenticationModule {}
