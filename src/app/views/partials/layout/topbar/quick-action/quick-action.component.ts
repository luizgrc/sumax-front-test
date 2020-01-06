import { Router } from '@angular/router';
// Angular
import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'kt-quick-action',
	templateUrl: './quick-action.component.html',
})
export class QuickActionComponent implements OnInit, AfterViewInit {
	// Public properties

	// Set icon class name
	@Input() icon = 'flaticon2-gear';

	@Input() iconType: '' | 'warning';

	// Set true to icon as SVG or false as icon class
	@Input() useSVG: boolean;

	// Set bg image path
	@Input() bgImage: string;

	// Set skin color, default to light
	@Input() skin: 'light' | 'dark' = 'light';

	@Input() gridNavSkin: 'light' | 'dark' = 'light';

	/**
	 * Component constructor
	 */
	constructor(private router: Router) {
	}

	/**
	 * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
	 */

	/**
	 * After view init
	 */
	ngAfterViewInit(): void {
	}

	/**
	 * On init
	 */
	ngOnInit(): void {
	}

	onSVGInserted(svg) {
		svg.classList.add('kt-svg-icon', 'kt-svg-icon--success', 'kt-svg-icon--lg');
	}

	sistemas(event) {
		switch (event) {
			case 1:
				this.router.navigateByUrl("/comprobante-venta/01");
				break;
			case 2:
				this.router.navigateByUrl("/transporte");
				break;
			case 3:
				this.router.navigateByUrl("/registrar");
				break;
			case 3:
				this.router.navigateByUrl("/registrar");
				break;
			default:
				this.router.navigateByUrl("/registrar");
		}
	}
}
