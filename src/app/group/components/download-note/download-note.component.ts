import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NoteDataService } from '../../../services/note-data.service';
import Swal from 'sweetalert2';
import jsPDF from 'jspdf';


@Component({
  selector: 'app-download-note',
  templateUrl: './download-note.component.html',
  styleUrls: ['./download-note.component.scss']
})
export class DownloadNoteComponent implements OnInit {

  @Input('noteId') noteId: any;
  @Output() hide: EventEmitter<boolean> = new EventEmitter<boolean>();
  notas: any[] = [];


  constructor(private noteData: NoteDataService) { }

  ngOnInit(): void {

    this.noteData.getOneNote({noteId: this.noteId}).subscribe((res: any) => {

      this.notas = res.notas;

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
      
    });

  }


  regresar () {
    this.hide.emit(false);
  }

  downloadNote () {

    const data: any = document.getElementById('myTable');
    const doc = new jsPDF('l','pt','letter');

    doc.fromHTML(data, 15, 15);
    doc.save('nota.pdf');

  }

}
