import { Component, OnInit } from '@angular/core';
import { Location} from '@angular/common';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { Cliente } from '../models/cliente';

@Component({
  selector: 'app-detalle-cliente',
  templateUrl: './detalle-cliente.page.html',
  styleUrls: ['./detalle-cliente.page.scss'],
})
export class DetalleClientePage implements OnInit {

	public cliente;

	constructor(public _location: Location, public  route: ActivatedRoute) 
    { 
    	this.cliente = Cliente;
		//console.log("---"+this.route.snapshot.paramMap.get('cliente'));
    }

	ngOnInit() 
	{
		this.route.queryParams.subscribe(params => 
		{
			this.cliente.nombre = params['nombre'];
			this.cliente.cc = params['cc'];
			this.cliente.departamento = params['departamento'];
			this.cliente.municipio = params['municipio'];
			this.cliente.direccion = params['direccion'];
			this.cliente.correo = params['correo'];
			this.cliente.tipo_cliente = params['tipo_cliente'];
    	});
	}

	backSite() 
	{
    	this._location.back();
	}

}
