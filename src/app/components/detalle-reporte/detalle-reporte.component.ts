import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ReporteService } from '../../services/reporte.service';

@Component({
  selector: 'app-detalle-reporte',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalle-reporte.component.html',
  styleUrls: ['./detalle-reporte.component.css']
})
export class DetalleReporteComponent implements OnInit {
  reporte: any = null;

  constructor(
    private route: ActivatedRoute,
    private reporteService: ReporteService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.reporte = this.reporteService.obtenerReportePorId(+id);
    }
  }
}