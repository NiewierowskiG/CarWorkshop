import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientListComponent } from './client-list/client-list.component';
import { FetchapiComponent } from './components/fetchapi/fetchapi.component';
import { RepairListComponent } from './repair-list/repair-list.component';

const routes: Routes = [
  {path:'WorkerList',component: FetchapiComponent},
  {path: 'RepairList', component: RepairListComponent},
  {path: 'ClientList', component: ClientListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
