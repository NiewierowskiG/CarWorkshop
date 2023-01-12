import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientListComponent } from './components/client-list/client-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CrudComponent } from './components/crud/crud.component';
import { WorkerListComponent } from './components/worker-list/worker-list.component';
import { RepairListComponent } from './components/repair-list/repair-list.component';
import {AddclientComponent} from "./components/addclient/addclient.component";
import {MainPageComponent} from "./components/main-page/main-page.component";
import {AddworkerComponent} from "./components/addworker/addworker.component";
import {SearchFilterPipe} from "./services/search-pipe.pipe";
import {AddrepairComponent} from "./components/addrepair/addrepair.component";
import {ZoomDirective} from "./zoom.directive";
import { EditworkerComponent } from './components/editworker/editworker.component';
import { ShowRepairComponent } from './components/show-repair/show-repair.component';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    ClientListComponent,
    NavbarComponent,
    FooterComponent,
    CrudComponent,
    WorkerListComponent,
    RepairListComponent,
    MainPageComponent,
    AddclientComponent,
    AddworkerComponent,
    AddrepairComponent,
    SearchFilterPipe,
    ZoomDirective,
    EditworkerComponent,
    ShowRepairComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterLink,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
