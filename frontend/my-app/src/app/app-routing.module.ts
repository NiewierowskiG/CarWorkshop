import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FetchapiComponent } from './fetchapi/fetchapi.component';

const routes: Routes = [
  {path:'index1',component: FetchapiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
