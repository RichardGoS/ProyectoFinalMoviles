import { Component, OnInit } from '@angular/core';
import { Location} from '@angular/common';
import { TarifasService } from '../sevices/tarifarios/tarifas.service'

@Component({
  selector: 'app-tarifa',
  templateUrl: './tarifa.page.html',
  styleUrls: ['./tarifa.page.scss'],
})
export class TarifaPage implements OnInit {

	
	public tarifas : {

	produto: null,
	cantidad: null,
	unidad: null
	producto_id: null,
	precios: []

	};

  constructor(public _location: Location, public serviceTarifa: TarifasService) { }

  ngOnInit() {
  	this.getTarifaProducto();
  }

  backsite(){
  	this._location.back();
  }

  async getTarifaProducto(){
  	await this.serviceTarifa.getTarifa()
      .subscribe(res => {
        console.log(res);
        this.tarifas = res;
      }, err => {
        console.log(err);
        
      });
  }

}
