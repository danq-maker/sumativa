import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CrearReporteComponent } from './components/crear-reporte/crear-reporte.component';
import { ListaReportesComponent } from './components/lista-reportes/lista-reportes.component';
import { DetalleReporteComponent } from './components/detalle-reporte/detalle-reporte.component';

@Component({
  selector: 'app-root',
  standalone: true, // Esto indica que es un componente independiente
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    CommonModule,
    FormsModule,
    CrearReporteComponent,
    ListaReportesComponent,
    DetalleReporteComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sumativa';

  crearReporte() {
    // Lógica para crear un reporte
    console.log('Crear reporte');
  }

  listarReportes() {
    // Lógica para listar reportes
    console.log('Lista de reportes');
  }
}