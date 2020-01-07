import { InicioComponent } from './views/pages/inicio/inicio.component';
import { NuevoDocumentoComponent } from './views/pages/transporte/nuevo-documento/nuevo-documento.component';
import { RegistrarVentaComponent } from './views/pages/ventas/registrar-venta/registrar-venta.component';
// Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Components
import { BaseComponent } from './views/theme/base/base.component';
import { ErrorPageComponent } from './views/theme/content/error-page/error-page.component';
// Auth
import { AuthGuard } from './core/auth';
import { ComprobanteVentaComponent } from './views/pages/ventas/comprobante-venta/comprobante-venta.component';

const routes: Routes = [
	// {path: 'auth', loadChildren: () => import('app/views/pages/auth/auth.module').then(m => m.AuthModule)},
	{ path: 'inicio', component: InicioComponent },

	{
		path: '',
		component: BaseComponent,
		// canActivate: [AuthGuard],
		children: [
			{
				path: 'comprobante-venta/:cod',
				component: ComprobanteVentaComponent
			},
			{
				path: 'registrar',
				component: RegistrarVentaComponent
			},
			// {
			// 	path: 'transporte',
			// 	component: GestionTransporteComponent
			// },
			// {
			// 	path: 'nueva-orden',
			// 	component: NuevoDocumentoComponent
			// },
			// {
			// 	path: 'inicio',
			// 	component: InicioComponent
			// },
			{
				path: 'transporte',
				// component : ListaOrdenComponent,
				loadChildren: () => import('app/views/pages/transporte/transporte.module').then(m => m.TransporteModule)
			},
			// {
			// 	path: 'dashboard',
			// 	loadChildren: () => import('app/views/pages/dashboard/dashboard.module').then(m => m.DashboardModule),
			// },
			{
				path: 'mail',
				loadChildren: () => import('app/views/pages/apps/mail/mail.module').then(m => m.MailModule)
			},
			{
				path: 'ecommerce',
				loadChildren: () => import('app/views/pages/apps/e-commerce/e-commerce.module').then(m => m.ECommerceModule),
			},
			// {
			// 	path: 'ngbootstrap',
			// 	loadChildren: () => import('app/views/pages/ngbootstrap/ngbootstrap.module').then(m => m.NgbootstrapModule),
			// },
			// {
			// 	path: 'material',
			// 	loadChildren: () => import('app/views/pages/material/material.module').then(m => m.MaterialModule),
			// },
			// {
			// 	path: 'user-management',
			// 	loadChildren: () => import('app/views/pages/user-management/user-management.module').then(m => m.UserManagementModule),
			// },
			{
				path: 'wizard',
				loadChildren: () => import('app/views/pages/wizard/wizard.module').then(m => m.WizardModule),
			},
			{
				path: 'builder',
				loadChildren: () => import('app/views/theme/content/builder/builder.module').then(m => m.BuilderModule),
			},
			{
				path: 'error/403',
				component: ErrorPageComponent,
				data: {
					type: 'error-v6',
					code: 403,
					title: 'Prohibido pasar',
					desc: 'Tranquilo ratón, aún no desarrollamos esto.<br> Please, contact Almircar.',
				},
			},
			{ path: 'error/:type', component: ErrorPageComponent },
			{ path: '', redirectTo: 'transporte/orden', pathMatch: 'full' },
			{ path: '**', redirectTo: 'error/403', pathMatch: 'full' },
		],
	},

	{ path: '**', redirectTo: 'error/403', pathMatch: 'full' },
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes),
	],
	exports: [RouterModule],
})
export class AppRoutingModule {
}
