import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { ReporteService } from '../../services/reporte.service';
import { Router } from '@angular/router'; // Importa Router

@Component({
  selector: 'app-lista-reportes',
  standalone: true,
  imports: [CommonModule], // Asegúrate de que CommonModule esté aquí
  templateUrl: './lista-reportes.component.html',
  styleUrls: ['./lista-reportes.component.css']
})
export class ListaReportesComponent {
  reportes: any[] = [];

  constructor(private reporteService: ReporteService, private router: Router) { // Inyecta Router
    this.reportes = this.reporteService.obtenerReportes();
  }

  eliminarReporte(id: string) {
    this.reporteService.eliminarReporte(id);
    this.reportes = this.reporteService.obtenerReportes();
  }

  verDetalle(id: string) {
    this.router.navigate(['/detalle-reporte', id]); // Navega al detalle del reporte
  }
}