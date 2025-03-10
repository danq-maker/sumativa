import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReporteService } from '../../services/reporte.service';

@Component({
  selector: 'app-lista-reportes',
  standalone: true, // Este es un componente independiente
  imports: [CommonModule, RouterModule], // Importa CommonModule y RouterModule
  templateUrl: './lista-reportes.component.html',
  styleUrls: ['./lista-reportes.component.css']
})
export class ListaReportesComponent implements OnInit {
  reportes: any[] = []; // Aquí almacenaremos los reportes

  constructor(private reporteService: ReporteService) {}

  ngOnInit() {
    // Al iniciar el componente, cargamos los reportes
    this.reportes = this.reporteService.obtenerReportes();
  }

  eliminarReporte(id: number) {
    // Eliminamos el reporte por su ID
    this.reporteService.eliminarReporte(id);
    // Actualizamos la lista de reportes
    this.reportes = this.reporteService.obtenerReportes();
  }
}