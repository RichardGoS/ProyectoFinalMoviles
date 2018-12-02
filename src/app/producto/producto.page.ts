import { Component, OnInit } from '@angular/core';
import { Location} from '@angular/common';
import { ProductoService } from '../sevices/productos/productos.service';
import { Producto } from '../models/producto';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {

  constructor(private _location: Location,
              private serviceProducto: ProductoService,
              public router: Router
             ) { }

  /*public productos = {
    nombre:null,
    cantidad:null,
    unidad:null,
    id_producto:null
  };*/

  public productos: Array<Producto>;

  ngOnInit() {
    this.obtenerProductos();
  }

  public backSite(){
    this._location.back();
  }

  public itemSelected(producto: any){
  //alert(producto.nombre+ ' '+producto.id_producto);
    let navigationExtras: NavigationExtras = {
      queryParams: {
          'nombre': producto.nombre,
          'id_producto': producto.id_producto,
          'cantidad': producto.cantidad,
          'unidad': producto.unidad
      }
  };
  this.router.navigate(['tarifarios'], navigationExtras);
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