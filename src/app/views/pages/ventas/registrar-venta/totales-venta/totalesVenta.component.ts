// Angular
import { Component, Input, OnInit } from '@angular/core';
// Lodash
import { shuffle } from 'lodash';
export interface GruposTotales {
	group: number;
	totales: TotalesVenta[];
}
export interface TotalesVenta {
	title: string;
	value: string;
	valueClass?: string;
}

@Component({
	selector: 'kt-totales-venta',
	templateUrl: './totalesVenta.component.html',
	styleUrls: ['./totalesVenta.component.scss']
})
export class TotalesVentaComponent implements OnInit {
	// Public properties
	@Input() data: GruposTotales[];

	/**
	 * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
	 */

	/**
	 * On init
	 */
	ngOnInit() {
		if (!this.data) {
			this.data = [
				{	group: 1,
					totales: [
						{
							title: 'Total Afecto',
							value: '+$17,800',
							valueClass: 'kt-font-brand'
						}, {
							title: 'Total Inafecto',
							value: '+$1,800',
							valueClass: 'kt-font-danger'
						}, {
							title: 'Total Exonerado',
							value: '-27,49%',
							valueClass: 'kt-font-success'
						}
					]
				},
				{
					group: 2,
					totales: [
						{
							title: 'Total Exportación',
							value: '+$17,800',
							valueClass: 'kt-font-brand'
						}, {
							title: 'Total Gratuito',
							value: '+$1,800',
							valueClass: 'kt-font-danger'
						}, {
							title: 'Total Impuesto IGV',
							value: '-27,49%',
							valueClass: 'kt-font-success'
						}
					]
				},
				{
					group: 3,
					totales: [
						{
							title: 'Total Descuento',
							value: '+$17,800',
							valueClass: 'kt-font-brand'
						}, {
							title: 'Total Documento',
							value: '+$1,800',
							valueClass: 'kt-font-danger'
						}
					]
				}

			];
		}
	}

}
