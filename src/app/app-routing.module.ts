import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {ProfileComponent} from "./profile/profile.component";
import {LoadStudentsComponent} from "./load-students/load-students.component";
import {LoadPayementsComponent} from "./load-payements/load-payements.component";
import {StudentsComponent} from "./students/students.component";
import {PayementsComponent} from "./payements/payements.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AdminTemplateComponent} from "./admin-template/admin-template.component";
import {AuthGuard} from "./guards/auth.guard";
import {AuthorizationGuard} from "./guards/authorization.guard";
import {RagComponent} from "./rag/rag.component";

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"login",component:LoginComponent},
  {path:"admin",component:AdminTemplateComponent,canActivate:[AuthGuard],
    children:[
  {path:"profile",component:ProfileComponent},
  {path:"admin",component:AdminTemplateComponent},
  {path:"home",component:HomeComponent},
  {path:"loadStudents",component:LoadStudentsComponent
    ,canActivate:[AuthorizationGuard],data:{roles:['ADMIN']}},
  {path:"loadPayments",component:LoadPayementsComponent,canActivate:[AuthorizationGuard],data:{roles:['ADMIN']}},
  {path:"students",component:StudentsComponent},
  {path:"payments",component:PayementsComponent},
  {path:"dashboard",component:DashboardComponent},{path:"rag",component:RagComponent}]}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
