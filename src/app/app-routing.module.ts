import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'clientes', loadChildren: './clientes/clientes.module#ClientesPageModule' },
  { path: 'tarifarios', loadChildren: './tarifarios/tarifarios.module#TarifariosPageModule' },
  { path: 'tarifarios/:producto', loadChildren: './tarifarios/tarifarios.module#TarifariosPageModule' },
  { path: 'pedidos',   loadChildren: './pedidos/pedidos.module#PedidosPageModule'  },
  { path: 'producto',  loadChildren: './producto/producto.module#ProductoPageModule'  },
  { path: 'detalleCliente', loadChildren: './detalle-cliente/detalle-cliente.module#DetalleClientePageModule' },
  { path: 'detalleCliente/:cliente', loadChildren: './detalle-cliente/detalle-cliente.module#DetalleClientePageModule' },
  { path: 'detallePedido', loadChildren: './detalle-pedido/detalle-pedido.module#DetallePedidoPageModule' },
  { path: 'detallePedido/:pedido', loadChildren: './detalle-pedido/detalle-pedido.module#DetallePedidoPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
