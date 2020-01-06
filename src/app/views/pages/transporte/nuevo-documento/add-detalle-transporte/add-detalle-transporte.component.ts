import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material';
export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'kt-add-detalle-transporte',
  templateUrl: './add-detalle-transporte.component.html',
  styleUrls: ['./add-detalle-transporte.component.scss']
})
export class AddDetalleTransporteComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<AddDetalleTransporteComponent>) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
  }

}
