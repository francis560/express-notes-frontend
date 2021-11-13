import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AvatarUserService {

  constructor() { }

  avatarUser: any[] = [
    { id: '1', icon: 'https://avatar-api.herokuapp.com/001-man.png' },
    { id: '2', icon: 'https://avatar-api.herokuapp.com/002-girl.png' },
    { id: '3', icon: 'https://avatar-api.herokuapp.com/003-boy.png' },
    { id: '6', icon: 'https://avatar-api.herokuapp.com/007-boy-1.png' },
    { id: '7', icon: 'https://avatar-api.herokuapp.com/010-girl-1.png' },
    { id: '10', icon: 'https://avatar-api.herokuapp.com/013-woman-3.png' },
    { id: '11', icon: 'https://avatar-api.herokuapp.com/015-woman-4.png' },
    { id: '36', icon: 'https://avatar-api.herokuapp.com/065-pinup.png' },
    { id: '37', icon: 'https://avatar-api.herokuapp.com/066-boy-6.png' },
    { id: '38', icon: 'https://avatar-api.herokuapp.com/068-girl-8.png' },
    { id: '57', icon: 'https://avatar-api.herokuapp.com/064-punk.png' },
    { id: '39', icon: 'https://avatar-api.herokuapp.com/069-woman-15.png' },
    { id: '27', icon: 'https://avatar-api.herokuapp.com/039-woman-10.png' },
    { id: '73', icon: 'https://avatar-api.herokuapp.com/woman-1.png' },
    { id: '74', icon: 'https://avatar-api.herokuapp.com/woman-2.png' },
    { id: '12', icon: 'https://avatar-api.herokuapp.com/016-boy-2.png' },
    { id: '33', icon: 'https://avatar-api.herokuapp.com/056-girl-6.png' },
    { id: '13', icon: 'https://avatar-api.herokuapp.com/017-girl-2.png' },
    { id: '14', icon: 'https://avatar-api.herokuapp.com/018-boy-3.png' },
    { id: '68', icon: 'https://avatar-api.herokuapp.com/014-man-3.png' },
    { id: '70', icon: 'https://avatar-api.herokuapp.com/067-man-14.png' },
    { id: '16', icon: 'https://avatar-api.herokuapp.com/021-girl-3.png' },
    { id: '19', icon: 'https://avatar-api.herokuapp.com/025-boy-4.png' },
    { id: '20', icon: 'https://avatar-api.herokuapp.com/026-girl-4.png' },
    { id: '23', icon: 'https://avatar-api.herokuapp.com/032-girl-5.png' },
    { id: '21', icon: 'https://avatar-api.herokuapp.com/028-woman-7.png' },
  ];
  
  avatarUser2: any[] = [
    { id: '17', icon: 'https://avatar-api.herokuapp.com/023-man-6.png' },
    { id: '15', icon: 'https://avatar-api.herokuapp.com/019-woman-5.png' },
    { id: '18', icon: 'https://avatar-api.herokuapp.com/024-woman-6.png' },
    { id: '22', icon: 'https://avatar-api.herokuapp.com/029-man-8.png' },
    { id: '24', icon: 'https://avatar-api.herokuapp.com/034-woman-8.png' },
    { id: '25', icon: 'https://avatar-api.herokuapp.com/035-woman-9.png' },
    { id: '26', icon: 'https://avatar-api.herokuapp.com/036-man-9.png' },
    { id: '4', icon: 'https://avatar-api.herokuapp.com/004-woman.png' },
    { id: '8', icon: 'https://avatar-api.herokuapp.com/011-man-2.png' },
    { id: '9', icon: 'https://avatar-api.herokuapp.com/012-woman-2.png' },
    { id: '5', icon: 'https://avatar-api.herokuapp.com/006-woman-1.png' },
    { id: '28', icon: 'https://avatar-api.herokuapp.com/040-man-11.png' },
    { id: '29', icon: 'https://avatar-api.herokuapp.com/041-woman-11.png' },
    { id: '30', icon: 'https://avatar-api.herokuapp.com/045-man-12.png' },
    { id: '31', icon: 'https://avatar-api.herokuapp.com/047-man-13.png' },
    { id: '32', icon: 'https://avatar-api.herokuapp.com/054-woman-13.png' },
    { id: '78', icon: 'https://avatar-api.herokuapp.com/judge.png' },
    { id: '34', icon: 'https://avatar-api.herokuapp.com/057-woman-14.png' },
    { id: '35', icon: 'https://avatar-api.herokuapp.com/063-girl-7.png' },
    { id: '40', icon: 'https://avatar-api.herokuapp.com/070-man-15.png' },
    { id: '58', icon: 'https://avatar-api.herokuapp.com/027-man-7.png' },
    { id: '59', icon: 'https://avatar-api.herokuapp.com/022-man-5.png' },
    { id: '60', icon: 'https://avatar-api.herokuapp.com/050-catwoman.png' },
    { id: '71', icon: 'https://avatar-api.herokuapp.com/man-1.png' },
    { id: '61', icon: 'https://avatar-api.herokuapp.com/055-bodybuilder.png' },    
    { id: '43', icon: 'https://avatar-api.herokuapp.com/020-man-4.png' },
    { id: '47', icon: 'https://avatar-api.herokuapp.com/044-farmer.png' },
    { id: '56', icon: 'https://avatar-api.herokuapp.com/038-man-10.png' },
  ];
  
  avatarUser3: any[] = [
    { id: '81', icon: 'https://avatar-api.herokuapp.com/priest.png' },
    { id: '67', icon: 'https://avatar-api.herokuapp.com/061-nun.png' },
    { id: '72', icon: 'https://avatar-api.herokuapp.com/man-2.png' },
    { id: '55', icon: 'https://avatar-api.herokuapp.com/037-arab-woman.png' },
    { id: '54', icon: 'https://avatar-api.herokuapp.com/049-thief.png' },
    { id: '79', icon: 'https://avatar-api.herokuapp.com/thief.png' },
    { id: '65', icon: 'https://avatar-api.herokuapp.com/060-doctor-1.png' },
    { id: '63', icon: 'https://avatar-api.herokuapp.com/059-doctor.png' },
    { id: '44', icon: 'https://avatar-api.herokuapp.com/031-policeman.png' },
    { id: '48', icon: 'https://avatar-api.herokuapp.com/030-policewoman.png' },
    { id: '80', icon: 'https://avatar-api.herokuapp.com/soldier.png' },
    { id: '45', icon: 'https://avatar-api.herokuapp.com/033-superhero.png' },
    { id: '41', icon: 'https://avatar-api.herokuapp.com/008-clown.png' },
    { id: '53', icon: 'https://avatar-api.herokuapp.com/048-boy-5.png' },
    { id: '64', icon: 'https://avatar-api.herokuapp.com/058-death.png' },
    { id: '46', icon: 'https://avatar-api.herokuapp.com/042-vampire.png' },
    { id: '83', icon: 'https://avatar-api.herokuapp.com/ghost.png' },
    { id: '84', icon: 'https://avatar-api.herokuapp.com/knight.png' },
    { id: '85', icon: 'https://avatar-api.herokuapp.com/man-3.png' },
    { id: '86', icon: 'https://avatar-api.herokuapp.com/unicorn.png' },
    { id: '87', icon: 'https://avatar-api.herokuapp.com/man-4.png' },
    { id: '88', icon: 'https://avatar-api.herokuapp.com/woman-3.png' },
    { id: '82', icon: 'https://avatar-api.herokuapp.com/elf.png' },
  ];
  
}
