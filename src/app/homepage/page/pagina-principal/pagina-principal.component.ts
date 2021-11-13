import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { NgProgress ,NgProgressRef } from 'ngx-progressbar';
import { DataUserService } from '../../../services/data-user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.scss']
})
export class PaginaPrincipalComponent implements OnInit {

  title: string = 'Grupos';
  groupVerify!: boolean;
  groupVerify2!: boolean;
  permisos!: boolean;
  _id: any;
  iconUser!: string;
  
  groupsData: any = [];

  darkMode_bg: any;
  darkMode_bg2: any;
  darkMode_txt: any;
  showSplashScreen: string = 'block';

  progressRef!: NgProgressRef;

  constructor(private progress: NgProgress, private router: Router, private titleService: Title, private dataUserService: DataUserService) { }


  ngOnInit(): void {
    this.darkMode_bg = localStorage.getItem('dark-mode-bg');
    this.darkMode_bg2 = localStorage.getItem('dark-mode-bg2');
    this.darkMode_txt = localStorage.getItem('dark-mode-txt');

    this.progressRef = this.progress.ref('barra');
    this.setTitle(this.title);

    this.dataUserService.getDataProfile().subscribe((res: any) => {
      this.progressRef.start();

      this.showSplashScreen = 'none'
      this.permisos = res.permisos;
      this._id = res._id;
      this.iconUser = res.iconProfile;

      this.dataUserService.getGroupData({_id: res._id}).subscribe(res => {
        this.progressRef.complete();

        this.groupsData = res;
        this.groupVerifyData(res);
      }, err => {
        this.progressRef.complete();
      });

    }, err => {
      //tirarle un ojo a esta funcion
      localStorage.removeItem('token');
      this.router.navigate(['/home']);
    });
  }

  exitGroup (data: any) {

    Swal.fire({
      icon: 'question',
      title: '¿Seguro que quieres dejar el grupo?',
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

        this.dataUserService.exitGroup({_id: this._id, groupId: data}).subscribe(res => {

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
          
          var count = 0;

          for (let item of this.groupsData) {
            
            if (item._id == data) {
              this.groupsData.splice(count, 1);
            }

            count++;

          }

          if (this.groupsData.length < 1) {
            this.groupVerify = false;
            this.groupVerify2 = true;
          }

          Toast.fire({
            icon: 'success',
            title: 'Dejaste el grupo con éxito'
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
            title: 'Error al salir del grupo'
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

  async editGroup (data: any) {
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
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    }).queue([
      {
        title: 'Editar datos del grupo',
        text: 'Ingrese un nuevo nombre de grupo',
        inputPlaceholder: 'Nombre de grupo',
        inputAttributes: {
          maxlength: '17',
        },
        inputValue: ''
      },
      {
        title: 'Editar datos del grupo',
        text: 'Ingrese nuevas materias para su grupo',
        inputPlaceholder: 'Materias',
        confirmButtonText: 'Actualizar',
        inputValue: ''
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

        this.dataUserService.updateGroupData({_id: data, name: res.value[0], materias: res.value[1]}).subscribe(res => {

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
            title: 'Grupo actualizado con exito'
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
            title: 'No se pudo actualizar el grupo'
          });

        });
      }

    })
    
  }

  deleteGroup (data: any) {
    Swal.fire({
      icon: 'question',
      title: '¿Seguro que quieres eliminar el grupo?',
      text: 'Este grupo será eliminado para todos sus estudiantes',
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

        this.dataUserService.deleteGroupData({_id: this._id, groupId: data}).subscribe(res => {
          
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
          
          var count = 0;

          for (let item of this.groupsData) {
            
            if (item._id == data) {
              this.groupsData.splice(count, 1);
            }

            count++;

          }

          if (this.groupsData.length < 1) {
            this.groupVerify = false;
            this.groupVerify2 = true;
          }

          Toast.fire({
            icon: 'success',
            title: 'Grupo eliminado con éxito'
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
            title: 'No se pudo borrar el grupo'
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

  groupJoin (data: any) {
    this.router.navigate([`/group/${data}`]);
  }
  
  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }


  groupVerifyData (value: any) {

    var count = 0;

    for (let item of value) {
      count++
    }

    if (count >= 1) {
      this.groupVerify = true;
    }
     
    if (count == 0) {
      this.groupVerify2 = true;
    }

  }

  cambiarColor (value: any) {
    var bgColor = localStorage.getItem('bgcolor' + `${value}`);
    if (bgColor == null) {
      return '';
    }
    return bgColor;
  }
}
