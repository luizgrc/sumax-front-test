
// Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaOrdenComponent } from './lista-orden/lista-orden.component';

// Components

// Auth


const routes: Routes = [
	{
		path: 'orden',
		component: ListaOrdenComponent
	},
	{
		path: '',
		component: ListaOrdenComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class OrdenRoutingModule {
}
