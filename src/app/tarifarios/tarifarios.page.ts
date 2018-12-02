import { Component, OnInit } from '@angular/core';
import { Location} from '@angular/common';
import { TarifasService } from '../sevices/tarifarios/tarifas.service';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { Producto } from '../models/producto';

@Component({
  selector: 'app-tarifarios',
  templateUrl: './tarifarios.page.html',
  styleUrls: ['./tarifarios.page.scss'],
})
export class TarifariosPage implements OnInit {

  public tarifas = {
    producto:null,
    cantidad:null,
    unidad:null,
    producto_id:null,
    precios:[]
  };

  public producto;
  /*public producto = {
    nombre:null,
    cantidad:null,
    unidad:null,
    id_producto:null
  };*/

  constructor(public _location: Location,
             public serviceTarifa: TarifasService,
             public  route: ActivatedRoute
             ) 
  {

      this.producto = Producto;
       //console.log("---"+this.route.snapshot.paramMap.get('producto'));
   }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.producto.nombre = params['nombre'];
      this.producto.id_producto = params['id_producto'];
      this.producto.cantidad = params['cantidad'];
      this.producto.unidad = params['unidad'];
    });
       this.getTarifaProducto();
  }

  backSite() {
    this._location.back();
  }

  async getTarifaProducto() {
    await this.serviceTarifa.getTarifas()
      .subscribe(res => {
        this.tarifas = res.tarifas;
        //console.log("..>>>"+res.tarifas);
        //console.log("..>>>"+this.tarifas);
      }, err => {
        console.log(err);
      });
  }


}
