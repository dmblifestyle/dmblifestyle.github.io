import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './landingpages/about/about.component';
import { BlogComponent } from './landingpages/blog/blog.component';
import { ContactComponent } from './landingpages/contact/contact.component';
import { DoctorComponent } from './landingpages/doctor/doctor.component';
import { HomeComponent } from './landingpages/home/home.component';
import { PricingComponent } from './landingpages/pricing/pricing.component';
import { ServicesComponent } from './landingpages/services/services.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "blog", component: BlogComponent },
  { path: "contact", component: ContactComponent },
  { path: "doctor", component: DoctorComponent },
  { path: "pricing", component: PricingComponent },
  { path: "services", component: ServicesComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
