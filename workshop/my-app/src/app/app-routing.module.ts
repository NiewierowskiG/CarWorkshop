import { ShowRepairComponent } from './components/show-repair/show-repair.component';
import { EditworkerComponent } from './components/editworker/editworker.component';
import { NgModule } from '@angular/core';
import { CanActivate, Router, RouterModule, Routes } from '@angular/router';
import { AddclientComponent } from './components/addclient/addclient.component';
import { AddrepairComponent } from './components/addrepair/addrepair.component';
import { AddworkerComponent } from './components/addworker/addworker.component';
import { ClientListComponent } from './components/client-list/client-list.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { RepairListComponent } from './components/repair-list/repair-list.component';
import { WorkerListComponent } from './components/worker-list/worker-list.component';
import { LoginComponent } from './components/login/login.component';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    if (!localStorage.getItem('token')) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
const routes: Routes = [
  {path: '', component: MainPageComponent, canActivate: [AuthGuard] },
  {path:'RepairList',component: RepairListComponent, canActivate: [AuthGuard] },
  {path: 'ClientList', component: ClientListComponent, canActivate: [AuthGuard] },
  {path: 'WorkerList', component: WorkerListComponent, canActivate: [AuthGuard] },
  {path: 'MainPage', component: MainPageComponent, canActivate: [AuthGuard] },
  {path: 'AddRepair', component: AddrepairComponent, canActivate: [AuthGuard] },
  {path: 'AddClient', component: AddclientComponent, canActivate: [AuthGuard] },
  {path: 'AddWorker', component: AddworkerComponent, canActivate: [AuthGuard] },
  {path: 'EditWorker/:salary/:id', component: EditworkerComponent, canActivate: [AuthGuard] },
  {path: 'Showrepair/:repairId/:workerId', component: ShowRepairComponent, canActivate: [AuthGuard] },
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
