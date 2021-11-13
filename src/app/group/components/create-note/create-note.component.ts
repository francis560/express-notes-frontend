import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgProgress ,NgProgressRef } from 'ngx-progressbar';
import { DataUserService } from '../../../services/data-user.service';
import { NoteDataService } from '../../../services/note-data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {

  @Input('groupId') groupId: any;
  @Output() hide: EventEmitter<boolean> = new EventEmitter<boolean>();


  formPeriodos!: FormGroup;
  formAsignaturas!: FormGroup;
  formIntegrantes!: FormGroup;
  formIntegrantesValue: any;
  formDescripcionValue: any;
  users!: any;

  progressRef!: NgProgressRef;
  
  constructor(private progress: NgProgress, private formBuilder: FormBuilder, private dataUser: DataUserService, private noteData: NoteDataService) { }

  ngOnInit(): void {
    this.progressRef = this.progress.ref('barra');
    this.progressRef.start();

    this.dataUser.getGroupMembers({groupId: this.groupId}).subscribe((res: any) => {
      this.users = res;
      this.progressRef.complete();
    }, err => {
      this.progressRef.complete();
    });

    this.formPeriodos = this.formBuilder.group({
      periodo: ['', [Validators.required]]
    });

    this.formAsignaturas = this.formBuilder.group({
      asignatura: ['', [Validators.required]]
    });

    this.formIntegrantes = this.formBuilder.group({
      integrantes: ['', [Validators.required]],
      descripcion: ['', [Validators.required, Validators.maxLength(20)]],
    });
  }

  materias: Array<any> = []
  meses: number[] = [];

  dataMeses: any;
  dataMaterias: any;

  agregarMeses () {
    this.meses.push(this.dataMeses);
    this.dataMeses = '';
  }

  agregarMaterias () {
    this.materias.push( { materias: this.dataMaterias } );
    this.dataMaterias = '';
  }

  nota: any = [];

  guardarNota () {
    var datoFinal = [];
    for (let item in this.materias) {
      
      var notes = [];
      for (let j in this.meses) {
        var datos: any = (<HTMLInputElement>document.getElementById(`valorNota${item}${j}`)).value;
        notes.push(datos);
      }

      this.nota = notes;
      datoFinal.push( {materias: this.materias[item], meses: this.meses, nota: this.nota} );
    }
    
    this.progressRef.start();

    this.noteData.noteCreate({userId: this.formIntegrantesValue, groupId: this.groupId, descripcion: this.formDescripcionValue, notas: datoFinal}).subscribe(res => {
      this.progressRef.complete();

      const Toast = Swal.mixin({
        toast: true,
        position: 'bottom-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      });
      
      Toast.fire({
        icon: 'success',
        title: 'Nota creada con exito'
      });

    }, err => {
      this.progressRef.complete();

      const Toast = Swal.mixin({
        toast: true,
        position: 'bottom-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      });
      
      Toast.fire({
        icon: 'error',
        title: 'Error al crear la nota'
      });

    });
  }

  regresar () {
    this.hide.emit(false);
  }

  deleteMaterias () {
    this.materias.pop();
  }

  deletePeriodos () {
    this.meses.pop();
  }
}