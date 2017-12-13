import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HavainnotComponent} from './havainnot/havainnot.component';
import { HavaintoIlmoitusComponent} from './havainto-ilmoitus/havainto-ilmoitus.component';

const routes: Routes = [
  { path: 'havainnot', component: HavainnotComponent },
  { path: 'havainto', component: HavaintoIlmoitusComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
