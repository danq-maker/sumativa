import { Routes } from '@angular/router';
import { CrearReporteComponent } from './components/crear-reporte/crear-reporte.component';
 import { ListaReportesComponent } from './components/lista-reportes/lista-reportes.component';
import { DetalleReporteComponent } from './components/detalle-reporte/detalle-reporte.component';

export const routes: Routes = [
  { path: '', redirectTo: 'reportes', pathMatch: 'full' },
  { path: 'crear-reporte', component: CrearReporteComponent },
  { path: 'reportes', component: ListaReportesComponent },
  { path: 'detalle-reporte/:id', component: DetalleReporteComponent }
];