import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientListComponent } from './components/client-list/client-list.component';
import { RepairListComponent } from './components/repair-list/repair-list.component';
import { WorkerListComponent } from './components/worker-list/worker-list.component';
const routes: Routes = [
  {path:'RepairList',component: RepairListComponent},
  {path: 'ClientList', component: ClientListComponent},
  {path: 'WorkerList', component: WorkerListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
