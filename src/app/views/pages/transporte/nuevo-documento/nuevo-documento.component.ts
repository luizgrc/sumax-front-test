import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { AddDetalleTransporteComponent } from './add-detalle-transporte/add-detalle-transporte.component';

@Component({
	selector: 'kt-nuevo-documento',
	templateUrl: './nuevo-documento.component.html',
	styleUrls: ['./nuevo-documento.component.scss']
})
export class NuevoDocumentoComponent implements OnInit {
	animal: string;
	name: string;
	@ViewChild('wizard', { static: true }) el: ElementRef;
	submitted = false;

	constructor(private router: Router, public dialog: MatDialog) {
	}

	ngOnInit() {
	}

	ngAfterViewInit(): void {
		// Initialize form wizard
		const wizard = new KTWizard(this.el.nativeElement, {
			startStep: 1
		});

		// Validation before going to next page
		wizard.on('beforeNext', (wizardObj) => { });

		// Change event
		wizard.on('change', () => {
			setTimeout(() => {
				KTUtil.scrollTop();
			}, 500);
		});
	}
	onSubmit() {
		this.submitted = true;
	}

	returnPage() {
		this.router.navigateByUrl("/transporte");
	}

	openDialog(): void {
		const dialogRef = this.dialog.open(AddDetalleTransporteComponent, {
			width: '900px',
			// data: { name: this.name, animal: this.animal }
		});

		dialogRef.afterClosed().subscribe(result => {
			// console.log('The dialog was closed');
			// this.animal = result;
		});
	}
}
