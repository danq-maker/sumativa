import { Component } from '@angular/core';
import { ReporteService } from '../../services/reporte.service';
import { CommonModule } from '@angular/common'; // Importa CommonModule

@Component({
  selector: 'app-lista-reportes',
  standalone: true, // Esto indica que es un componente independiente
  imports: [CommonModule], // Asegúrate de incluir CommonModule aquí
  templateUrl: './lista-reportes.component.html',
  styleUrls: ['./lista-reportes.component.css']
})
export class ListaReportesComponent {
  reportes: any[] = [];

  constructor(private reporteService: ReporteService) {
    this.reportes = this.reporteService.obtenerReportes(); // Obtiene la lista de reportes
  }

  eliminarReporte(id: string) {
    this.reporteService.eliminarReporte(id); // Llama al método para eliminar el reporte
    this.reportes = this.reporteService.obtenerReportes(); // Actualiza la lista de reportes
  }
}