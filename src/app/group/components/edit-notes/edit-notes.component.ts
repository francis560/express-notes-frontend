import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgProgress ,NgProgressRef } from 'ngx-progressbar';
import { DataUserService } from '../../../services/data-user.service';
import { NoteDataService} from '../../../services/note-data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-notes',
  templateUrl: './edit-notes.component.html',
  styleUrls: ['./edit-notes.component.scss']
})
export class EditNotesComponent implements OnInit {

  @Input('groupId') groupId: any;
  @Input('noteId') noteId: any;
  @Output() hide: EventEmitter<boolean> = new EventEmitter<boolean>();


  formPeriodos!: FormGroup;
  formAsignaturas!: FormGroup;
  formIntegrantes!: FormGroup;
  formIntegrantesValue: any;
  formDescripcionValue: any;
  dataTable!: any[];

  users!: any[];

  progressRef!: NgProgressRef;
  
  constructor(private progress: NgProgress, private formBuilder: FormBuilder, private dataUser: DataUserService, private noteData: NoteDataService) { }

  ngOnInit(): void {
    this.progressRef = this.progress.ref('barra');
    this.progressRef.start();

    this.dataUser.getGroupMembers({groupId: this.groupId}).subscribe((res: any) => {
      this.users = res;
    });

    this.noteData.getOneNote({noteId: this.noteId}).subscribe((res: any) => {
      this.dataTable = res.notas;

      for (let i of this.dataTable) {

        this.materias.push({ materias: i.materias.materias });
  
        if (this.meses.length == 0) {
          for (let j of i.meses) {
            this.meses.push(j);
          }
        }

      }
      
      this.progressRef.complete();
    }, err => {

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
        title: 'Error al cargar la nota'
      });

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
      descripcion: ['', [Validators.required, Validators.maxLength(20)]]
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

  actualizarNota () {
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

    this.noteData.editNote({userId: this.formIntegrantesValue, noteId: this.noteId, descripcion: this.formDescripcionValue, notas: datoFinal}).subscribe(res => {
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
        title: 'Nota actualizada con exito'
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
        title: 'Error al actualizar la nota'
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
