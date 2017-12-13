import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './/app-routing.module';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HavaintoComponent } from './havainto/havainto.component';
import { HavaintoIlmoitusComponent } from './havainto-ilmoitus/havainto-ilmoitus.component';
import { HavainnotComponent } from './havainnot/havainnot.component';
import { DataService } from './data.service';

const routes: Routes = [
  { path: 'havainnot', component: HavainnotComponent },
  { path: 'havainto', component: HavaintoIlmoitusComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HavaintoComponent,
    HavaintoIlmoitusComponent,
    HavainnotComponent
  ],
  imports: [
    BrowserModule,
//    RouterModule.forRoot(routes),
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
