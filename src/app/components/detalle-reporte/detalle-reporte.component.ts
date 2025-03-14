import { Component, OnInit } from '@angular/core';
import { ReporteService } from '../../services/reporte.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalle-reporte',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalle-reporte.component.html',
  styleUrls: ['./detalle-reporte.component.css']
})
export class DetalleReporteComponent implements OnInit {
  reporte: any = {};
  id: number = 0;

  constructor(private reporteService: ReporteService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    this.id = idParam !== null ? +idParam : 0; // Asigna 0 si es null
    this.reporte = this.reporteService.obtenerReportePorId(this.id);
  }
}