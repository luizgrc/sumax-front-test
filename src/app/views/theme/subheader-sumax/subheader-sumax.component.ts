import { Component, OnInit, AfterViewInit, Input, OnDestroy } from '@angular/core';
import { Breadcrumb, SubheaderService } from '../../../core/_base/layout/services/subheader.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'kt-subheader-sumax',
	templateUrl: './subheader-sumax.component.html',
	styleUrls: ['./subheader-sumax.component.scss']
})
export class SubheaderSumaxComponent implements OnInit, OnDestroy,  AfterViewInit {

	// Public properties
	@Input() fluid: boolean;
	@Input() clear: boolean;

	today: number = Date.now();
	title = '';
	desc = '';
	breadcrumbs: Breadcrumb[] = [];

	// Private properties
	private subscriptions: Subscription[] = [];

	/**
	 * Component constructor
	 *
	 * @param subheaderService: SubheaderService
	 */
	constructor(public subheaderService: SubheaderService) {
	}

	ngOnInit() {
		this.title = "Ventas";
	}

	ngAfterViewInit(): void {
		this.subscriptions.push(this.subheaderService.title$.subscribe(bt => {
			// breadcrumbs title sometimes can be undefined
			if (bt) {
				Promise.resolve(null).then(() => {
					// this.title = bt.title;
					this.title = "Facturas";
					this.desc = bt.desc;
				});
			}
		}));

		this.subscriptions.push(this.subheaderService.breadcrumbs$.subscribe(bc => {
			Promise.resolve(null).then(() => {
				this.breadcrumbs = bc;
			});
		}));
	}

	ngOnDestroy(): void {
		this.subscriptions.forEach(sb => sb.unsubscribe());
	}

}
