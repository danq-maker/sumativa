import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReporteService {
  private reportesKey = 'reportes'; // Clave para almacenar en localStorage

  constructor() { }

  // Método para obtener todos los reportes
  obtenerReportes(): any[] {
    const reportes = localStorage.getItem(this.reportesKey);
    return reportes ? JSON.parse(reportes) : [];
  }

  // Método para agregar un nuevo reporte
  agregarReporte(reporte: any): void {
    const reportes = this.obtenerReportes();
    reporte.id = new Date().getTime(); // Generar un ID único basado en timestamp
    reportes.push(reporte);
    localStorage.setItem(this.reportesKey, JSON.stringify(reportes));
  }

  // Método para obtener un reporte por ID
  obtenerReportePorId(id: number): any | null {
    const reportes = this.obtenerReportes();
    return reportes.find(r => r.id === id) || null;
  }

  // Método para eliminar un reporte por ID
  eliminarReporte(id: number): void {
    let reportes = this.obtenerReportes();
    reportes = reportes.filter(r => r.id !== id);
    localStorage.setItem(this.reportesKey, JSON.stringify(reportes));
  }
}
