import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResidencesComponent } from './residences/residences.component';
import { ResidenceFormComponent } from './residence-form/residence-form.component';
import { ResidenceDetailsComponent } from './residence-details/residence-details.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:"full"},
  {path:"home", component:HomeComponent},
  {path:"residences", component:ResidencesComponent},
  {path:"addResidence", component:ResidenceFormComponent},
  {path:"home/:id", component:ResidenceDetailsComponent},
  {path:"**", component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
