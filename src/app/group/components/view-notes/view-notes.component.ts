import { Component, OnInit, Input } from '@angular/core';
import { NgProgress ,NgProgressRef } from 'ngx-progressbar';
import { NoteDataService } from '../../../services/note-data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-notes',
  templateUrl: './view-notes.component.html',
  styleUrls: ['./view-notes.component.scss']
})
export class ViewNotesComponent implements OnInit {

  @Input('groupCode') groupCode: any;
  @Input('groupId') groupId: any;
  @Input('permisos') permisos: any;
  @Input('idUser') idUser: any;
  @Input('adminGroup') adminGroup: any;


  viewNoteVerify!: boolean;
  editNote: boolean = false;
  downloadNote: boolean = false;
  noteId: any;
  notes: any = [];

  progressRef!: NgProgressRef;

  constructor(private progress: NgProgress, private noteData: NoteDataService) { }

  ngOnInit(): void {
    this.progressRef = this.progress.ref('barra');
    this.progressRef.start();
    
    this.noteData.getNote({userId: this.idUser, permisos: this.permisos, groupId: this.groupId}).subscribe(res => {

      this.notes = res;

      if (this.notes == '') {
        this.viewNoteVerify = true;
      } else {
        this.viewNoteVerify = false;
      }

      this.progressRef.complete();
    }, err => {

      if (this.notes == '') {
        this.viewNoteVerify = true;
      } else {
        this.viewNoteVerify = false;
      }

      this.progressRef.complete();
    });

  }


  regresar () {
    this.editNote = false;
    this.downloadNote = false;
  }

  editNoteShow (value: any) {
    this.noteId = value;
    this.editNote = true;
  }

  downloadNoteShow (value: any) {
    this.noteId = value;
    this.downloadNote = true;
  }

  deleteNote (value: any) {

    Swal.fire({
      icon: 'question',
      title: '¿Seguro que quieres eliminar esta nota?',
      showDenyButton: true,
      allowOutsideClick: false,
      stopKeydownPropagation: true,
      confirmButtonText: `Aceptar`,
      denyButtonText: `Cancelar`,
      showLoaderOnConfirm: true,
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    }).then((result) => {

      if (result.isConfirmed) {

        this.noteData.deleteNote({noteId: value, groupId: this.groupId}).subscribe(res => {

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
            title: 'Nota eliminada con exito'
          });
    
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
            title: 'Error al eliminar la nota'
          });
    
        });

      } else if (result.isDenied) {
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
          icon: 'info',
          title: 'Acción cancelada'
        });
      }
    });
  }

}
