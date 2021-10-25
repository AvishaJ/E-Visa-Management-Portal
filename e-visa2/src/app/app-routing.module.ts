import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplyComponent } from './apply/apply.component';
import { HomeComponent } from './home/home.component';
import { MoreReportsComponent } from './morereports/morereports.component';
import { OnsiteComponent } from './onsite/onsite.component';
import { ReportsComponent } from './reports/reports.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'apply', component:ApplyComponent},
  {path:'onsite', component:OnsiteComponent},
  {path:'reports', component:ReportsComponent},
  {path:'morereports', component:MoreReportsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
