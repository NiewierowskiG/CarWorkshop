import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddclientComponent } from './components/addclient/addclient.component';
import { AddrepairComponent } from './components/addrepair/addrepair.component';
import { AddworkerComponent } from './components/addworker/addworker.component';
import { ClientListComponent } from './components/client-list/client-list.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { RepairListComponent } from './components/repair-list/repair-list.component';
import { WorkerListComponent } from './components/worker-list/worker-list.component';
const routes: Routes = [
  {path:'RepairList',component: RepairListComponent},
  {path: 'ClientList', component: ClientListComponent},
  {path: 'WorkerList', component: WorkerListComponent},
  {path: 'MainPage', component: MainPageComponent},
  {path: 'AddRepair', component: AddrepairComponent},
  {path: 'AddClient', component: AddclientComponent},
  {path: 'AddWorker', component: AddworkerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
