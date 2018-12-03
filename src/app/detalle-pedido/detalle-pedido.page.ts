import { Component, OnInit } from '@angular/core';
import { TarifasService } from '../sevices/tarifarios/tarifas.service';
import { Pedido } from '../models/pedido';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { Location} from '@angular/common';
import { ClientesService } from '../sevices/clientes/clientes.service';
import { Cliente } from '../models/cliente';
import { ProductoService } from '../sevices/productos/productos.service';
import { Producto } from '../models/producto';
import { Tarifa } from '../models/tarifa';


@Component({
  selector: 'app-detalle-pedido',
  templateUrl: './detalle-pedido.page.html',
  styleUrls: ['./detalle-pedido.page.scss'],
})
export class DetallePedidoPage implements OnInit {

	public pedido;
	public cliente;
	public producto;
	public tarifa;
	public tipo_cliente: number;
	public clientes: Array<Cliente>;
	public productos: Array<Producto>;
	public tarifas : Array<Tarifa>;

	constructor(public _location: Location, public  route: ActivatedRoute, private serviceClientes: ClientesService, public serviceTarifa: TarifasService, private serviceProducto: ProductoService) 
	{ 
		this.pedido = Pedido;
		this.cliente = Cliente;
		this.producto = Producto;
		this.tarifa = Tarifa;
	}

	ngOnInit() 
	{
		this.route.queryParams.subscribe(params => 
		{
			this.pedido.cc = params['cc'];
			this.pedido.id_producto = params['id_producto'];
			this.pedido.cantidad = params['cantidad'];
			this.pedido.observacion = params['observacion'];
    	});
    	this.getTarifaProducto();
    	this.obtenerClientes();
    	this.obtenerProductos();
	}

	backSite() 
	{
    	this._location.back();
	}

	async getTarifaProducto() 
	{
    	await this.serviceTarifa.getTarifas().subscribe(res => 
    	{
        	this.tarifas = res.tarifas;
      	}, 
      	err => 
      	{
        	console.log(err);
      	});
  	}

  	async obtenerClientes() 
  	{
    	await this.serviceClientes.obtenerClientesService().subscribe(res => 
    	{
        	this.clientes = res.clientes;
      	}, err => 
      	{
        	console.log(err);
      	});
  	}

  	async obtenerProductos() 
  	{
    	await this.serviceProducto.obtenerProductosService().subscribe(res => 
    	{
        	this.productos = res.productos;
      	}, err => 
      	{
        	console.log(err);
      	});
  	}

  	cualesSon()
  	{
  		for (let cli of this.clientes) 
  		{
   			if(cli.cc == this.pedido.cc)
   			{
   				this.cliente = cli;
   			}
		}

		for (let prod of this.productos) 
  		{
   			if(prod.id_producto == this.pedido.id_producto)
   			{
   				this.producto = prod;
   			}
		}

		for (let tar of this.tarifas) 
  		{
   			if(tar.producto_id == this.pedido.id_producto && tar.tipo_cliente==this.cliente.tipo_cliente)
   			{
   				this.tarifa = tar;
   			}
		}
		console.log('<<<<<<<<<<<<<<<<<<<<<<<<<<'+this.tarifa.precio);
  	}


  	async delay(milliseconds: number) 
  	{
	    return new Promise<void>(resolve => {
	        setTimeout(resolve, milliseconds);
	    });
	}


}
