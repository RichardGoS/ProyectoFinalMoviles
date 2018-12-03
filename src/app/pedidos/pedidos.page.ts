import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ClientesService } from '../sevices/clientes/clientes.service';
import { Cliente } from '../models/cliente';
import { ProductoService } from '../sevices/productos/productos.service';
import { Producto } from '../models/producto';
import { Pedido } from '../models/pedido';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.page.html',
  styleUrls: ['./pedidos.page.scss'],
})
export class PedidosPage implements OnInit {

  public clientes: Array<Cliente>;
  public productos: Array<Producto>;
  public cc: number = null;
  public id_producto: number = null;
  public cantidad: number = null;
  public observacion: String = null;

  constructor(private _location: Location,
              private serviceClientes: ClientesService,
              private serviceProducto: ProductoService,
              public router: Router) { }

  ngOnInit() 
  {
  	this.obtenerClientes();
  	this.obtenerProductos();
  }

  backsite(){
  	this._location.back();
  }

  public tomarPedido()
  {
    let navigationExtras: NavigationExtras = 
    {
      queryParams: 
      {
          'cc': this.cc,
          'id_producto': this.id_producto,
          'cantidad': this.cantidad,
          'observacion': this.observacion
      }
  };
  this.router.navigate(['detallePedido'], navigationExtras);
  }

  async obtenerClientes() {
    await this.serviceClientes.obtenerClientesService()
      .subscribe(res => {
        this.clientes = res.clientes;
      }, err => {
        console.log(err);
      });
  }

  async obtenerProductos() {
    await this.serviceProducto.obtenerProductosService()
      .subscribe(res => {
        this.productos = res.productos;
      }, err => {
        console.log(err);
      });
  }

}
