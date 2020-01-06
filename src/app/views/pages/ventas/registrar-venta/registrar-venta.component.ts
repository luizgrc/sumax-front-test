import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'kt-registrar-venta',
  templateUrl: './registrar-venta.component.html',
  styleUrls: ['./registrar-venta.component.scss']
})
export class RegistrarVentaComponent implements OnInit {
  titulo: String;
  panelOpenState: boolean = false;

  expandedParts = [
    { id: 1, title: "Datos generales del documento", expanded: true },
    { id: 2, title: "Documentos relacionados", expanded: false },
    { id: 3, title: "Detalle de documento y Totales", expanded: false },
    { id: 4, title: "Observaciones y Referencias", expanded: false }
  ];
  constructor(private router: Router) { }

  ngOnInit() {
    this.titulo = "Registrar Venta";
  }

  togglePanel() {
    this.panelOpenState = !this.panelOpenState
  }

  toggle(expanded) {
    expanded = !expanded;
  }

  // togglePart(part, expanded, manual = false) {
  //   if(manual && expanded){      
  //     this.expandedParts[part] = true;
  //   }else{
  //     this.expandedParts[part] = expanded;
  //   }
  //   console.log(this.expandedParts);
  // }

  isExpanded(part) {
    return this.expandedParts[part];
  }

  findSerie() {
    alert("Este sería el F1");
  }
  returnPage() {
    this.router.navigateByUrl("/comprobante-venta/01");
  }

}
