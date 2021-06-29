import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './landingpages/home/home.component';
import { AboutComponent } from './landingpages/about/about.component';
import { BlogComponent } from './landingpages/blog/blog.component';
import { ContactComponent } from './landingpages/contact/contact.component';
import { DoctorComponent } from './landingpages/doctor/doctor.component';
import { FooterComponent } from './landingpages/footer/footer.component';
import { HeaderComponent } from './landingpages/header/header.component';
import { PricingComponent } from './landingpages/pricing/pricing.component';
import { ServicesComponent } from './landingpages/services/services.component';
import { ServiceDetailComponent } from './service-detail/service-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    BlogComponent,
    ContactComponent,
    DoctorComponent,
    FooterComponent,
    HeaderComponent,
    PricingComponent,
    ServicesComponent,
    ServiceDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
