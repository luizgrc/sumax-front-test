import { ThemeModule } from './../theme/theme.module';
import { HeaderComponent } from './../theme/header/header.component';
import { PreviewTransporteComponent } from './transporte/nuevo-documento/preview-transporte/preview-transporte.component';
import { AddDetalleTransporteComponent } from './transporte/nuevo-documento/add-detalle-transporte/add-detalle-transporte.component';
import { DetalleTransporteComponent } from './transporte/nuevo-documento/detalle-transporte/detalle-transporte.component';
import { CabeceraTransporteComponent } from './transporte/nuevo-documento/cabecera-transporte/cabecera-transporte.component';
import { NuevoDocumentoComponent } from './transporte/nuevo-documento/nuevo-documento.component';
import { TotalesVentaComponent } from './ventas/registrar-venta/totales-venta/totalesVenta.component';
import { DctoRelacionadoComponent } from './ventas/registrar-venta/dcto-relacionado/dcto-relacionado.component';
import { DatosGeneralesComponent } from './ventas/registrar-venta/datos-generales/datos-generales.component';
import { MatCardModule } from '@angular/material/card';
// Angular
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// Partials
import { PartialsModule } from '../partials/partials.module';
// Pages
import { CoreModule } from '../../core/core.module';
import { MailModule } from './apps/mail/mail.module';
import { ECommerceModule } from './apps/e-commerce/e-commerce.module';
import { ComprobanteVentaComponent } from './ventas/comprobante-venta/comprobante-venta.component';
import { MatButtonModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatIconModule, MatTableModule, MatSortModule, MatPaginatorModule, MatCheckboxModule, MatDatepickerModule, MatAccordion, MatExpansionModule, MatAutocompleteModule, MatTooltipModule, MatTabsModule } from '@angular/material';
import { NgbDatepickerModule, NgbTypeaheadModule, NgbDateAdapter, NgbDateNativeAdapter, NgbModalModule, NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';
import { RegistrarVentaComponent } from './ventas/registrar-venta/registrar-venta.component';

import { NgOptionHighlightModule } from '@ng-select/ng-option-highlight';
import { NgSelectModule } from '@ng-select/ng-select';

import { AgGridModule } from 'ag-grid-angular';
import { TableDetalleComponent } from './ventas/registrar-venta/table-detalle/table-detalle.component';
import { ObservacionesComponent } from './ventas/registrar-venta/observaciones/observaciones.component';
import { InicioComponent } from './inicio/inicio.component';
import { TransporteModule } from './transporte/transporte.module';

@NgModule({
	declarations: [
		ComprobanteVentaComponent,
		RegistrarVentaComponent,
		DatosGeneralesComponent,
		DctoRelacionadoComponent,
		TableDetalleComponent,
		TotalesVentaComponent,
		NuevoDocumentoComponent,
		CabeceraTransporteComponent,
		DetalleTransporteComponent,
		AddDetalleTransporteComponent,
		PreviewTransporteComponent,
		ObservacionesComponent,
		InicioComponent
	],
	exports: [],
	imports: [
		CommonModule,
		HttpClientModule,
		FormsModule,
		CoreModule,
		PartialsModule,
		MailModule,
		ReactiveFormsModule,
		ECommerceModule,
		MatButtonModule,
		MatFormFieldModule,
		MatSelectModule,
		MatInputModule,
		MatIconModule,
		MatTableModule,
		MatSortModule,
		MatPaginatorModule,
		MatCheckboxModule,
		MatDatepickerModule,
		MatCardModule,
		MatExpansionModule,
		MatAutocompleteModule,
		MatTooltipModule,
		MatTabsModule,
		NgbDatepickerModule,
		NgSelectModule,
		NgbTypeaheadModule,
		NgbModalModule,
		NgOptionHighlightModule,
		NgbTabsetModule,
		AgGridModule.withComponents([]),
		TransporteModule
	],
	providers: [{ provide: NgbDateAdapter, useClass: NgbDateNativeAdapter }],
	entryComponents: [AddDetalleTransporteComponent],
})
export class PagesModule {
}
