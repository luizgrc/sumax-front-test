import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaOrdenModule } from './lista-orden/lista-orden.module';
import { OrdenRoutingModule } from './orden.routing';



@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		OrdenRoutingModule,
		ListaOrdenModule
	]
})
export class OrdenModule { }
