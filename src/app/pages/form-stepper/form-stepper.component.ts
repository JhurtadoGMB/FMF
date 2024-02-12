import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TDocumentDefinitions} from "pdfmake";
import * as pdfMake from "pdfmake/build/pdfmake";
import * as moment from 'moment';
import { GendersService } from 'src/app/services/genders.service';
import { NationalitiesService } from 'src/app/services/nationalities.service';
import { ClubesService } from 'src/app/services/clubes.service';

@Component({
  selector: 'app-form-stepper',
  templateUrl: './form-stepper.component.html',
  styleUrls: []
})
export class FormStepperComponent implements OnInit {
  generalInfoForm: FormGroup;
  isLinear = false;
  isOptional = false;

  ocultarRfc: boolean = false;
  comboClubes:any[] = [];
  comboGenero:any[] = [];
  comboNacionalidades:any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private genderService: GendersService,
    private nationalityService : NationalitiesService,
    private clubesService: ClubesService
    ) {}

  ngOnInit(): void {
   this.createForm();
  }

  createForm(){
    this.comboGenero = this.genderService.getGenders();
    this.comboClubes = this.clubesService.getClubes();
    this.comboNacionalidades = this.nationalityService.getNationalities();
    console.log(this.comboClubes);
    
    this.generalInfoForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellidoPaterno: ['', Validators.required],
      apellidoMaterno: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      genero: ['', Validators.required],
      nacionalidad: ['', Validators.required],
      clubFutbol: ['', Validators.required],
      rfc: ['', Validators.pattern('^(([A-Z]|[a-z]){4})([0-9]{6})((([A-Z]|[a-z]|[0-9]){3}))')],
      ocupacion: ['']
    });
  }

  formatDate(date: string): string {
    return moment(date).format('DD/MM/YYYY');
  }

  validarMayorEdad(){

    let fechaActual: Date = new Date();

    let fechaNacimiento: Date = new Date(this.generalInfoForm.get('fechaNacimiento')?.value);
    
    
    let anios = moment(fechaActual).diff(fechaNacimiento, 'years');
    
    if(anios >= 18)
    {
      this.ocultarRfc = true;
    }
    else
    {      
      this.ocultarRfc = false;
    }

  }

  createPDF(){
    const formData = this.generalInfoForm.value;

    const PDFdefinition: TDocumentDefinitions = {
      content: [
        { text: 'Datos Personales', style: 'header' },
        { text: 'Nombre: ' + formData.nombre, style: 'info' },
        { text: 'Apellido Paterno: ' + formData.apellidoPaterno, style: 'info' },
        { text: 'Apellido Materno: ' + formData.apellidoMaterno, style: 'info' },
        { text: 'Fecha de Nacimiento: ' + moment(formData.fechaNacimiento).format("DD/MM/YYYY"), style: 'info' },
        { text: 'Género: ' + formData.genero, style: 'info' },
        { text: 'Nacionalidad: ' + formData.nacionalidad, style: 'info' },
        { text: 'Club de Fútbol: ' + formData.clubFutbol, style: 'info' },
        { text: 'RFC: ' + formData.rfc, style: 'info' },
        { text: 'Ocupación: ' + formData.ocupacion, style: 'info' }
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          margin: [0, 0, 0, 10]
        },
        info: {
          fontSize: 12,
          margin: [0, 5, 0, 0]
        }
      }
    };

    const pdf = pdfMake.createPdf(PDFdefinition);
    pdf.download();
  }

  resetearFormulario(){
    this.generalInfoForm.reset();
  }
}
