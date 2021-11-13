import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { Clipboard } from '@angular/cdk/clipboard';
import { DataUserService } from '../../../services/data-user.service';
import { environment } from '../../../../environments/environment';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {

  viewShowMembers!: boolean;
  viewShowNotes!: boolean;
  classActiveMembers!: string;
  classActiveNotes!: string;
  headerBgColor: any;
  botonCodeAnimate!: string;


  createNote: boolean = false;
  permisos!: boolean;
  adminGroup: any;
  title!: string;
  groupCode: any;
  groupId: any;
  idUser: any;


  groupName: any;
  materias: any;
  coProfesorName: any;
  users!: any[];

  darkMode_bg: any;
  darkMode_bg2: any;
  darkMode_txt: any;


  groupColor: Array<any> = [{color: 'bg-danger', btn: 'bg-danger btn mx-2 my-2'}, {color: 'bg-primary', btn: 'bg-primary btn mx-2 my-2'}, {color: 'bg-success', btn: 'bg-success btn mx-2 my-2'}, {color: 'bg-info', btn: 'bg-info btn mx-2 my-2'}, {color: 'bg-dark', btn: 'bg-dark btn mx-2 my-2'}, {color: 'bg-warning', btn: 'bg-warning btn mx-2 my-2'}, {color: 'colorUno', btn: 'colorUno btn mx-2 my-2'}, {color: 'colorDos', btn: 'colorDos btn mx-2 my-2'}, {color: 'bg-secondary', btn: 'bg-secondary btn mx-2 my-2'}];
  groupColorGradient: Array<any> = [{color: 'degradadoUno', btn: 'degradadoUno btn mx-2 my-2'}, {color: 'degradadoDos', btn: 'degradadoDos btn mx-2 my-2'}, {color: 'degradadoTres', btn: 'degradadoTres btn mx-2 my-2'}, {color: 'degradadoCuatro', btn: 'degradadoCuatro btn mx-2 my-2'}, {color: 'degradadoCinco', btn: 'degradadoCinco btn mx-2 my-2'}, {color: 'degradadoSeis', btn: 'degradadoSeis btn mx-2 my-2'}, {color: 'degradadoSiete', btn: 'degradadoSiete btn mx-2 my-2'}, {color: 'degradadoOcho', btn: 'degradadoOcho btn mx-2 my-2'}, {color: 'degradadoNueve', btn: 'degradadoNueve btn mx-2 my-2'}, {color: 'degradadoDiez', btn: 'degradadoDiez btn mx-2 my-2'}];



  constructor(private titleService: Title, private route: ActivatedRoute, private dataUser: DataUserService, private router: Router, private clipboard: Clipboard) { }

  ngOnInit(): void {
    this.darkMode_bg = localStorage.getItem('dark-mode-bg');
    this.darkMode_bg2 = localStorage.getItem('dark-mode-bg2');
    this.darkMode_txt = localStorage.getItem('dark-mode-txt');
    
    this.groupCode = this.route.snapshot.paramMap.get('id');

    
    this.dataUser.getDataProfile().subscribe((res: any) => {
      this.idUser = res._id;
      this.permisos = res.permisos;
      
      this.dataUser.groupJoin({_id: this.idUser, groupCode: this.groupCode}).subscribe((res: any) => {
        this.title = res.name;
        this.groupId = res._id;
        this.groupName = res.name;
        this.materias = res.materias;
        this.adminGroup = res.adminGroup;
        this.coProfesorName = res.coProfesor;
        

        
        this.dataUser.getGroupMembers({groupId: this.groupId}).subscribe((res: any) => {
          this.users = res;
        });

        
        this.setTitle(this.title);
      }, err => {
        this.router.navigate([`/group/${this.groupCode}/_PageNotFound`]);
      });
      
    });
    
    this.headerBgColor = localStorage.getItem('bgcolor' + `${this.groupCode}`);
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
  

  viewMembers () {
    this.classActiveNotes = '';
    this.classActiveMembers = 'active';
    this.viewShowNotes = false;
    this.viewShowMembers = true;
  }

  viewNotes () {
    this.classActiveMembers = '';
    this.classActiveNotes = 'active';
    this.viewShowMembers = false;
    this.viewShowNotes = true;
  }

  groupBgColor (value: any) {
    localStorage.removeItem('bgcolor' + `${this.groupCode}`);
    localStorage.setItem('bgcolor' + `${this.groupCode}`, value);
    window.location.reload();
  }

  regresar () {
    this.createNote = false;
  }

  animateCopy () {
    this.botonCodeAnimate = 'animate__bounceIn';

    setTimeout(() => {
      this.botonCodeAnimate = '';
    }, 1000);
  }

  inviteMembers () {
    var URL = document.location.href;
    navigator.share({
      title: 'Express Notes',
      text: '¡Únete a nuestro grupo!',
      url: `${URL}`
    });
  }

  copyGroupCode () {
    this.clipboard.copy(this.groupCode);
  }

  coProfesor (value: any) {
    
    Swal.fire({
      icon: 'question',
      title: `¿Seguro que quieres que este usuario sea tu asistente?`,
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

        this.dataUser.coProfesor({groupId: this.groupId, coProfesorValue: `${value}`}).subscribe(res => {
          
          window.location.reload();

        });

      }
      
    });

  }

  deleteCoProfesor () {

    Swal.fire({
      icon: 'question',
      title: `¿Seguro que desea eliminar el asistente actual?`,
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

        this.dataUser.coProfesor({groupId: this.groupId, coProfesorValue: ' '}).subscribe(res => {
          
          window.location.reload();

        });

      }
      
    });

  }

}
