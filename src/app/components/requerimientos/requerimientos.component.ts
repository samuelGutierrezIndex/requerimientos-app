import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-requerimientos',
  templateUrl: './requerimientos.component.html',
  styleUrls: ['./requerimientos.component.scss']
})
export class RequerimientosComponent implements OnInit {

  public lista_requerimientos: any[] = [];

  dtOptions: DataTables.Settings = {};

  constructor() {
    this.lista_requerimientos = [
      {
        Id: 1, Autor: 'cordinador 1', Sucursal: 'Bogota', Estado: 'Pendiente', Descripcion: 'Problema en el formato de fecha en los documentos',
        FechaCrea: '01/06/2023'
      },
      {
        Id: 2, Autor: 'cordinador 1', Sucursal: 'Bucaramanga', Estado: 'Aceptado', Descripcion: 'Problema en el formato de fecha en los documentos',
        FechaCrea: '01/06/2023'
      },
      {
        Id: 3, Autor: 'cordinador 1', Sucursal: 'Medellin', Estado: 'Solucionado', Descripcion: 'Problema en el formato de fecha en los documentos',
        FechaCrea: '01/06/2023'
      },
      {
        Id: 4, Autor: 'cordinador 1', Sucursal: 'Bogota', Estado: 'Pendiente', Descripcion: 'Problema en el formato de fecha en los documentos',
        FechaCrea: '01/06/2023'
      },
      {
        Id: 5, Autor: 'cordinador 1', Sucursal: 'Bucaramanga', Estado: 'Aceptado', Descripcion: 'Problema en el formato de fecha en los documentos',
        FechaCrea: '01/06/2023'
      },
      {
        Id: 6, Autor: 'cordinador 1', Sucursal: 'Medellin', Estado: 'Solucionado', Descripcion: 'Problema en el formato de fecha en los documentos',
        FechaCrea: '01/06/2023'
      },
      {
        Id: 7, Autor: 'cordinador 1', Sucursal: 'Bogota', Estado: 'Pendiente', Descripcion: 'Problema en el formato de fecha en los documentos',
        FechaCrea: '01/06/2023'
      },
      {
        Id: 8, Autor: 'cordinador 1', Sucursal: 'Bucaramanga', Estado: 'Aceptado', Descripcion: 'Problema en el formato de fecha en los documentos',
        FechaCrea: '01/06/2023'
      },
      {
        Id: 9, Autor: 'cordinador 1', Sucursal: 'Medellin', Estado: 'Solucionado', Descripcion: 'Problema en el formato de fecha en los documentos',
        FechaCrea: '01/06/2023'
      },
      {
        Id: 10, Autor: 'cordinador 1', Sucursal: 'Bogota', Estado: 'Pendiente', Descripcion: 'Problema en el formato de fecha en los documentos',
        FechaCrea: '01/06/2023'
      },
      {
        Id: 11, Autor: 'cordinador 1', Sucursal: 'Bucaramanga', Estado: 'Aceptado', Descripcion: 'Problema en el formato de fecha en los documentos',
        FechaCrea: '01/06/2023'
      },
      {
        Id: 12, Autor: 'cordinador 1', Sucursal: 'Medellin', Estado: 'Solucionado', Descripcion: 'Problema en el formato de fecha en los documentos',
        FechaCrea: '01/06/2023'
      }
    ]
  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers'
    }
  }

}
