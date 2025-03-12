import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReporteService } from '../../services/reporte.service';
import Swal from 'sweetalert2'; // Importa SweetAlert2

@Component({
  selector: 'app-crear-reporte',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './crear-reporte.component.html',
  styleUrls: ['./crear-reporte.component.css']
})
export class CrearReporteComponent {
  idEquipo: string = '';
  descripcion: string = '';
  imagen: string | ArrayBuffer | null = null;

  constructor(private reporteService: ReporteService) {}

  takePicture() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.capture = 'camera';
    input.onchange = (event) => {
      const file = (event.target as HTMLInputElement).files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          this.imagen = reader.result;
        };
        reader.readAsDataURL(file);
      }
    };
    input.click();
  }

  guardarInforme(reporteForm: any) {
    // Validar que todos los campos estén llenos
    if (!this.idEquipo || !this.descripcion) {
      Swal.fire({
        title: 'Error',
        text: 'Por favor, completa todos los campos requeridos.',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
      return;
    }

    // Validar que el ID del equipo tenga exactamente 10 caracteres
    if (this.idEquipo.length !== 10) {
      Swal.fire({
        title: 'Error',
        text: 'El ID del equipo debe tener exactamente 10 caracteres.',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
      return;
    }

    const informe = {
      idEquipo: this.idEquipo,
      descripcion: this.descripcion,
      imagen: this.imagen,
      fecha: new Date() // Agrega la fecha actual
    };
    this.reporteService.agregarInforme(informe); // Agrega el informe al servicio
    console.log('Informe guardado:', informe);

    // Mostrar la alerta de éxito
    Swal.fire({
      title: '¡Éxito!',
      text: 'El informe se ha guardado correctamente.',
      icon: 'success',
      confirmButtonText: 'Aceptar'
    });
  }
}