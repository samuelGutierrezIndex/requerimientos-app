import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RequerimientosComponent } from './components/requerimientos/requerimientos.component';
import { DataTablesModule } from "angular-datatables";
import { Filtros1Component } from './components/filtros1/filtros1.component';

import { HttpClientModule } from '@angular/common/http';
import { RequerimientosService } from './services/requerimientos.service';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    RequerimientosComponent,
    Filtros1Component,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    DataTablesModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [RequerimientosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
