// Object-Path
import * as objectPath from 'object-path';
import { LayoutConfigService } from './../../../core/_base/layout/services/layout-config.service';
import { Router } from '@angular/router';
import { routerReducer } from '@ngrx/router-store';
import { FormGroup } from '@angular/forms';
import { CustomerModel } from './../../../core/e-commerce/_models/customer.model';
import { Component, OnInit } from '@angular/core';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { FormBuilder,  Validators } from '@angular/forms';
import { Inject, ChangeDetectionStrategy, ViewEncapsulation, OnDestroy } from '@angular/core';

@Component({
  selector: 'inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
 
 
  customer: CustomerModel;
	customerForm: FormGroup;
  constructor(private router:Router,
		private layoutConfigService: LayoutConfigService) {    
  }

  ngOnInit() {
		// const config = this.layoutConfigService.getConfig(); 
    // objectPath.set(config, 'header.self.fixed.desktop',false);
    // objectPath.set(config, 'header.self.fixed.mobile',false);
    // this.layoutConfigService.setConfig(config);
  }
  returnPage() {
		this.router.navigateByUrl("/transporte");
  }
  ventasPage() {
		this.router.navigateByUrl("/comprobante-venta/01");
	}
}
