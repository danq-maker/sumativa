import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { ReporteService } from '../../services/reporte.service';

@Component({
  selector: 'app-crear-reporte',
  standalone: true, // Asegúrate de que el componente sea standalone
  imports: [FormsModule], // Agrega FormsModule aquí
  templateUrl: './crear-reporte.component.html',
  styleUrls: ['./crear-reporte.component.css']
})
export class CrearReporteComponent {
  idEquipo: string = '';
  descripcion: string = '';
  foto: string | null = null;
  stream: MediaStream | null = null;

  @ViewChild('videoElement', { static: false }) videoElement!: ElementRef;
  @ViewChild('canvasElement', { static: false }) canvasElement!: ElementRef;

  constructor(private reporteService: ReporteService) {}

  async capturarFoto() {
    try {
      this.stream = await navigator.mediaDevices.getUserMedia({ video: true });

      const video: HTMLVideoElement = this.videoElement.nativeElement;
      video.srcObject = this.stream;
      video.play();
    } catch (error) {
      console.error('Error al acceder a la cámara', error);
    }
  }

  tomarFoto() {
    const video: HTMLVideoElement = this.videoElement.nativeElement;
    const canvas: HTMLCanvasElement = this.canvasElement.nativeElement;
    const context = canvas.getContext('2d');

    if (context) {
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      this.foto = canvas.toDataURL('image/png');
    }

    // Detener la cámara
    if (this.stream) {
      this.stream.getTracks().forEach(track => track.stop());
    }
  }

  guardarReporte() {
    if (!this.idEquipo || !this.descripcion || !this.foto) {
      alert('Todos los campos son obligatorios.');
      return;
    }

    const nuevoReporte = {
      idEquipo: this.idEquipo,
      descripcion: this.descripcion,
      foto: this.foto,
      fecha: new Date().toISOString()
    };

    this.reporteService.agregarReporte(nuevoReporte);
    alert('Reporte guardado exitosamente.');

    // Limpiar el formulario
    this.idEquipo = '';
    this.descripcion = '';
    this.foto = null;
  }
}