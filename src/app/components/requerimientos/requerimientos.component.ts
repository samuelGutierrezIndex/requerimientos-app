import { Component, OnInit } from '@angular/core';
import { RequerimientosService } from 'src/app/services/requerimientos.service';

@Component({
  selector: 'app-requerimientos',
  templateUrl: './requerimientos.component.html',
  styleUrls: ['./requerimientos.component.scss']
})
export class RequerimientosComponent implements OnInit {

  public lista_requerimientos: any[];

  dtOptions: DataTables.Settings = {};

  constructor(private http: RequerimientosService) {
    this.lista_requerimientos = []
  }

  ngOnInit(): void {

    this.dtOptions = {
      pagingType: 'full_numbers'
    }

    this.ConsultarRequerimientos();

  }

  ConsultarRequerimientos() {
    this.http.ConsultarRequerimientos().subscribe(data => {
      this.lista_requerimientos = data;
    }, error => { console.log("Error") });
  }

}