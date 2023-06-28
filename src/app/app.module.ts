import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RequerimientosComponent } from './components/requerimientos/requerimientos.component';
import { DataTablesModule } from "angular-datatables";
import { Filtros1Component } from './components/filtros1/filtros1.component';

@NgModule({
  declarations: [
    AppComponent,
    RequerimientosComponent,
    Filtros1Component
  ],
  imports: [
    BrowserModule,
    DataTablesModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
