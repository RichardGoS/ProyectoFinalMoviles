import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ClientesService } from '../sevices/clientes/clientes.service';
import { Cliente } from '../models/cliente';
import { Router, NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage implements OnInit {

	
  constructor(private _location: Location,
              private serviceClientes: ClientesService,
              public router: Router
             ) { }

  public clientes: Array<Cliente>;

  ngOnInit() {
    this.obtenerClientes();
  }

  public backSite(){
    this._location.back();
  }

  public itemSelected(cliente: any){
  //alert(cliente.nombre+ ' '+cliente.cc);
    let navigationExtras: NavigationExtras = {
      queryParams: {
          'nombre': cliente.nombre,
          'cc': cliente.cc,
          'departamento': cliente.departamento,
          'municipio': cliente.municipio,
          'direccion': cliente.direccion,
          'correo': cliente.correo,
          'tipo_cliente': cliente.tipo_cliente
      }
  };
  this.router.navigate(['detalleCliente'], navigationExtras);
  }

  async obtenerClientes() {
    await this.serviceClientes.obtenerClientesService()
      .subscribe(res => {
        this.clientes = res.clientes;
      }, err => {
        console.log(err);
      });
  }

}
