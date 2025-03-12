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
  nombre: string = ''; // Nuevo campo para el nombre
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
    if (!this.idEquipo || !this.descripcion || !this.nombre) {
      Swal.fire({
        icon: "error",
        title: "Error",
 text: "Por favor, completa todos los campos requeridos.",
        footer: '<a href="#">¿Por qué tengo este problema?</a>',
        animation: true,
        customClass: {
          popup: 'animated-popup'
        }
      });
      return;
    }

    // Validar que el ID del equipo tenga exactamente 10 caracteres
    if (this.idEquipo.length !== 10) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "El ID del equipo debe tener exactamente 10 caracteres.",
        footer: '<a href="#">¿Por qué tengo este problema?</a>',
        animation: true,
        customClass: {
          popup: 'animated-popup'
        }
      });
      return;
    }

    const informe = {
      idEquipo: this.idEquipo,
      descripcion: this.descripcion,
      nombre: this.nombre, // Agregar el nombre al informe
      imagen: this.imagen,
      fecha: new Date()
    };
    this.reporteService.agregarInforme(informe);
    console.log('Informe guardado:', informe);

    // Mostrar la alerta de éxito
    Swal.fire({
      icon: "success",
      title: "¡Éxito!",
      text: "El informe se ha guardado correctamente.",
      footer: '<a href="#">¿Por qué tengo este problema?</a>',
      animation: true,
      customClass: {
        popup: 'animated-popup'
      }
    });

    // Reiniciar los campos después de guardar
    this.idEquipo = '';
    this.descripcion = '';
    this.nombre = ''; // Reiniciar el campo nombre
    this.imagen = null;
    reporteForm.resetForm();
  }
}