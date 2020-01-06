export class MenuConfig {
	public defaults: any = {
		header: {
			self: {},
			items: [
				{
					title: 'Gestión',
					root: true,
					alignment: 'left',
					bullet: 'dot',
					icon: 'flaticon2-browser-2',
					submenu: [
						{
							title: 'Facturas',
							page: '/comprobante-venta/01',
							bullet: 'dot',
							icon: 'flaticon-interface-7'
						},
						{
							title: 'Boletas',
							page: '/comprobante-venta/03',
							bullet: 'dot',
							icon: 'flaticon-web'
						},
						{
							title: 'Notas de Crédito',
							page: '/comprobante-venta/07',
							bullet: 'dot',
							icon: 'flaticon-web'
						},
						{
							title: 'Notas de Débito',
							page: '/comprobante-venta/08',
							bullet: 'dot',
							icon: 'flaticon-web'
						},
						{
							title: 'Transmisión Electrónica',
							page: '/comprobante-venta/08',
							bullet: 'dot',
							icon: 'flaticon-web'
						},
					]
				},
				{
					title: 'Reportes',
					root: true,
					alignment: 'left',
					bullet: 'dot',
					icon: 'flaticon2-browser-2',
					submenu: [
						{
							title: 'Reporte de Ventas',
							page: 'error/403',
							bullet: 'dot',
							icon: 'flaticon-interface-7'
						},
						{
							title: 'Reporte Sunat',
							page: 'error/403',
							bullet: 'dot',
							icon: 'flaticon-web'
						}
					]
				},
				{
					title: 'Herramientas',
					root: true,
					alignment: 'left',
					bullet: 'dot',
					icon: 'flaticon2-browser-2',
					submenu: [
						{
							title: 'Cierre de Período',
							page: 'error/403',
							bullet: 'dot',
							icon: 'flaticon-interface-7'
						},
						{
							title: 'Copiar Documentos',
							page: 'error/403',
							bullet: 'dot',
							icon: 'flaticon-web'
						}
					]
				},
				{
					title: 'Configuración',
					root: true,
					alignment: 'left',
					bullet: 'dot',
					icon: 'flaticon2-browser-2'
				}
			]
		},
		aside: {
			self: {},
			items: [
				{section: 'Finanzas'},
				{
					title: 'Ventas',
					root: true,
					bullet: 'dot',
					icon: 'flaticon2-browser-2',
					submenu: [
						{
							title: 'Facturas',
							page: '/comprobante-venta/01',
							bullet: 'dot',
							icon: 'flaticon-interface-7'
						},
						{
							title: 'Boletas',
							page: '/comprobante-venta/03',
							bullet: 'dot',
							icon: 'flaticon-web'
						},
						{
							title: 'Notas de Crédito',
							page: '/comprobante-venta/07',
							bullet: 'dot',
							icon: 'flaticon-web'
						},
						{
							title: 'Notas de Débito',
							page: '/comprobante-venta/08',
							bullet: 'dot',
							icon: 'flaticon-web'
						},
					]
				},
				{
					title: 'Compras',
					root: true,
					bullet: 'dot',
					icon: 'flaticon2-browser-2',
					submenu: [
						{
							title: 'Solicitud de compra',
							page: 'error/403',
							bullet: 'dot',
							icon: 'flaticon-interface-7'
						},
						{
							title: 'Solicitud de cotización',
							page: 'error/403',
							bullet: 'dot',
							icon: 'flaticon-web'
						},
						{
							title: 'Cotización',
							page: 'error/403',
							bullet: 'dot',
							icon: 'flaticon-web'
						},
						{
							title: 'Orden de compra',
							page: 'error/403',
							bullet: 'dot',
							icon: 'flaticon-web'
						},
						{
							title: 'Comprobantes de compra',
							page: 'error/403',
							bullet: 'dot',
							icon: 'flaticon-web'
						},
						{
							title: 'Comprobantes de reembolsables',
							page: 'error/403',
							bullet: 'dot',
							icon: 'flaticon-web'
						}
					]
				}
			]
		},
	};

	public get configs(): any {
		return this.defaults;
	}
}
