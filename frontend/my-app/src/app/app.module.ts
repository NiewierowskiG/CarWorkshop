import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FetchapiComponent } from './fetchapi/fetchapi.component';
import { RepairListComponent } from './repair-list/repair-list.component';
import { ClientListComponent } from './client-list/client-list.component';


@NgModule({
  declarations: [
    AppComponent,
    FetchapiComponent,
    RepairListComponent,
    ClientListComponent,
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
