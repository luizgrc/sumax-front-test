
// Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components

// Auth


const routes: Routes = [
	{
		path: 'orden',
		loadChildren: () => import('app/views/pages/transporte/gestion/orden/orden.module').then(m => m.OrdenModule)
	},
	{
		path: '',
		redirectTo: 'orden',
		pathMatch: 'full'
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class TransporteRoutingModule {
}
