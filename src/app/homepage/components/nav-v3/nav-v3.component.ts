import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DataUserService } from '../../../services/data-user.service';
import { AvatarUserService } from '../../../services/avatar-user.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-nav-v3',
  templateUrl: './nav-v3.component.html',
  styleUrls: ['./nav-v3.component.scss']
})
export class NavV3Component implements OnInit {

  @Input() permisos!: boolean;
  @Input('_id') _id: any;
  @Input('iconUser') iconUser: any;

  
  currentIconProfileTeacher: string = 'https://avatar-api.herokuapp.com/027-man-7.png';
  currentIconProfileStudent: string = 'https://avatar-api.herokuapp.com/016-boy-2.png';
  

  // iconProfileTeacher: any[] = [{icon: 'fas fa-user-tie'}, {icon: 'fas fa-user-ninja'}, {icon: 'fas fa-user-md'}, {icon: 'fas fa-user-secret'}, {icon: 'fas fa-user-astronaut'}, {icon: 'fas fa-hat-wizard'}];
  // iconProfileAnimal: any[] = [{icon: 'fas fa-dove'}, {icon: 'fas fa-paw'}, {icon: 'fas fa-hippo'}, {icon: 'fas fa-dragon'}, {icon: 'fas fa-horse-head'}, {icon: 'fas fa-spider'}, {icon: 'fas fa-crow'}, {icon: 'fas fa-cat'}, {icon: 'fas fa-frog'}, {icon: 'fas fa-kiwi-bird'}];
  // iconProfileVaried: any[] = [{icon: 'fas fa-chess-rook'}, {icon: 'fas fa-bone'}, {icon: 'fas fa-headphones-alt'}, {icon: 'fas fa-football-ball'}, {icon: 'fas fa-headphones'}, {icon: 'fas fa-chess-queen'}, {icon: 'fas fa-pizza-slice'}, {icon: 'fas fa-utensils'}, {icon: 'fas fa-seedling'}, {icon: 'fas fa-chess-king'}, {icon: 'fas fa-guitar'}, {icon: 'fas fa-hotdog'}, {icon: 'fas fa-paper-plane'}, {icon: 'fab fa-napster'}, {icon: 'fas fa-pepper-hot'}, {icon: 'fas fa-brain'}, {icon: 'fas fa-compact-disc'}, {icon: 'fas fa-cookie'}, {icon: 'fas fa-drum'}, {icon: 'fas fa-lemon'}, {icon: 'fas fa-graduation-cap'}, {icon: 'fas fa-icons'}, {icon: 'fas fa-user-graduate'}, {icon: 'fas fa-carrot'}, {icon: 'fas fa-robot'}];

  iconAvatar: any[] = [];
  iconAvatar2: any[] = [];
  iconAvatar3: any[] = [];
  
  
  darkMode_bg: any;
  darkMode_bg2: any;
  darkMode_txt: any;

  bgColor!: string;
  

  constructor(private avatarService: AvatarUserService, private router: Router, private DataUser: DataUserService) { }
  
  ngOnInit(): void {
    this.darkMode_bg = localStorage.getItem('dark-mode-bg');
    this.darkMode_bg2 = localStorage.getItem('dark-mode-bg2');
    this.darkMode_txt = localStorage.getItem('dark-mode-txt');

    this.iconAvatar = this.avatarService.avatarUser;
    this.iconAvatar2 = this.avatarService.avatarUser2;
    this.iconAvatar3 = this.avatarService.avatarUser3;
  }

  groupJoin () {
    if (this.darkMode_bg == 'dark-mode-bg') {
      this.bgColor = '#121A21'
    }

    Swal.fire({
      title: 'Únete a un grupo',
      icon: 'question',
      background: `${this.bgColor}`,
      input: 'text',
      inputValidator: (value): any => {
        if (!value) {
          return 'Debes completar los campos'
        }
      },
      inputLabel: 'Ingrese el código de un grupo',
      inputPlaceholder: 'Código de grupo',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Unirme',
      buttonsStyling: true,
      allowOutsideClick: false,
      stopKeydownPropagation: true,
      showLoaderOnConfirm: true,
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    }).then(result => {

      if (result.isConfirmed) {
        
        this.router.navigate(['/group/', result.value]);

      }

    });
  }

  async groupCreate () {
    await Swal.mixin({
      input: 'text',
      inputValidator: (value): any => {
        if (!value) {
          return 'Debes completar los campos'
        }
      },
      showConfirmButton: true,
      confirmButtonText: 'Siguiente',
      cancelButtonText: 'Cancelar',
      showCancelButton: true,
      allowOutsideClick: false,
      stopKeydownPropagation: true,
      showLoaderOnConfirm: true,
      progressSteps: ['1', '2'],
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    }).queue([
      {
        icon: 'question',
        title: '¿Cual es el nombre del grupo?',
        text: 'Ingrese un nombre que describa su grupo',
        inputAttributes: {
          maxlength: '17',
        },
        inputPlaceholder: 'Nombre de grupo',
      },
      {
        icon: 'question',
        title: 'Coloca las materias de tu grupo',
        text: 'Ingrese las materias que su grupo debe tener',
        inputPlaceholder: 'Materias'
      }
    ]).then((res: any) => {
      
      if (res.dismiss == "cancel") {
    
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

      } else {

        this.DataUser.groupCreate({_id: this._id, name: res.value[0], materias: res.value[1] }).subscribe(response => {

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
          
          window.location.reload();

          Toast.fire({
            icon: 'success',
            title: 'Grupo creado con exito'
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
            title: 'Error al crear el grupo'
          });
        });
        
      }

    })
    
  }

  editAccount () {
    this.router.navigate(['/editAccount']);
  }

  cerrarSesion () {
    Swal.fire({
      icon: 'question',
      title: '¿Seguro que quieres cerrar la sesión?',
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

        localStorage.removeItem('token');
        this.router.navigate(['/home']);

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
    })
  }

  iconProfile (value: any) {
    this.currentIconProfileTeacher = value;
    this.currentIconProfileStudent = value;
    this.iconUser = value;
    
    this.DataUser.iconProfile({_id: this._id, iconProfile: value}).subscribe(res => {

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
        title: 'No se pudo actualizar el icono'
      });

    });
  }

}