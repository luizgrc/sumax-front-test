import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaOrdenComponent } from './lista-orden.component';
import { ListaOrdenFiltroComponent } from './lista-orden-filtro/lista-orden-filtro.component';
import { MatIconModule, MatTooltipModule, MatButtonModule, MatExpansionModule, MatCardModule } from '@angular/material';
import { AgGridModule } from 'ag-grid-angular';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { PartialsModule } from 'app/views/partials/partials.module';



@NgModule({
	declarations: [
		ListaOrdenComponent,
		ListaOrdenFiltroComponent
	],
	imports: [
		CommonModule,
		/* Ng-Boostrap */
		NgbDatepickerModule,

		/*Material */
		MatIconModule,
		MatTooltipModule,
		MatButtonModule,
		MatCardModule,
		MatExpansionModule,

		/*Ag-Grid*/
		AgGridModule.withComponents([]),

		/* Metronic */
		PartialsModule
	],
	exports: [
		ListaOrdenComponent,
		ListaOrdenFiltroComponent
	]
})
export class ListaOrdenModule { }
