// app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CrearReporteComponent } from './components/crear-reporte/crear-reporte.component';
import { ListaReportesComponent } from './components/lista-reportes/lista-reportes.component';
import { DetalleReporteComponent } from './components/detalle-reporte/detalle-reporte.component';

@Component({
  selector: 'app-root',
  standalone: true,
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
  isSidebarHidden = true; // Inicialmente el menú está oculto
  isDarkMode = false; // Inicialmente el modo oscuro está desactivado

  toggleSidebar() {
    this.isSidebarHidden = !this.isSidebarHidden; // Alternar el estado del menú
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode; // Alternar el estado del modo oscuro
    document.body.classList.toggle('dark-mode', this.isDarkMode); // Aplicar clase para el modo oscuro
  }
}