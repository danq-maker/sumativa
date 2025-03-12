import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReporteService } from '../../services/reporte.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-reportes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-reportes.component.html',
  styleUrls: ['./lista-reportes.component.css']
})
export class ListaReportesComponent {
  reportes: any[] = [];
  imagenExpandida: string | null = null; // Variable para almacenar la imagen expandida

  constructor(private reporteService: ReporteService, private router: Router) {
    this.cargarReportes();
  }

  cargarReportes() {
    this.reportes = this.reporteService.obtenerReportes();
  }

  eliminarReporte(id: string) {
    if (confirm('¿Estás seguro de que deseas eliminar este reporte?')) {
      this.reporteService.eliminarReporte(id);
      this.cargarReportes(); // Recargar la lista después de eliminar
    }
  }

  verDetalle(id: string) {
    this.router.navigate(['/detalle-reporte', id]);
  }

  abrirModal(imagen: string) {
    this.imagenExpandida = imagen; // Asignar la imagen a mostrar en el modal
  }

  cerrarModal() {
    this.imagenExpandida = null; // Limpiar la imagen al cerrar el modal
  }
}