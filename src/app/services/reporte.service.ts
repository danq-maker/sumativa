import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReporteService {
  private reportes: any[] = []; // Array para almacenar los informes

  constructor() {}

  agregarInforme(informe: any) {
    this.reportes.push(informe); // Agrega el informe al array
  }

  obtenerReportes() {
    return this.reportes; // Devuelve la lista de informes
  }

  obtenerReportePorId(id: number) {
    return this.reportes.find(reporte => reporte.idEquipo === id.toString()); // Busca el informe por ID
  }

  eliminarReporte(id: string) {
    this.reportes = this.reportes.filter(reporte => reporte.idEquipo !== id); // Elimina el informe por ID
  }
}