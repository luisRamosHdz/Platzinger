import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';


//Este servicio puede ser inyectado en otra clase
@Injectable({
  ///Cualquier componente a nivel de root
  providedIn: 'root'
})
export class UserService {

  friends: User[];
  constructor() {
    let usuario1: User = {
      nick: 'Eduardo',
      age: 24,
      email: 'ed@aoe.aoe',
      friend: true,
      status:'1',
      uid: 1      
    };
    let usuario2: User = {
      nick: 'Freddy',
      age: 28,
      email: 'fred@aoe.aoe',
      friend: true,
      status:'1',
      uid: 2
    };
    let usuario3: User = {
      nick: 'Yuliana',
      age: 18,
      email: 'yuli@aoe.aoe',
      friend: true,
      status:'0',
      uid: 3
    };
    let usuario4: User = {
      nick: 'Ricardo',
      age: 17,
      email: 'rick@aoe.aoe',
      friend: false,
      status:'3',
      uid: 4
    };
    let usuario5: User = {
      nick: 'Marcos',
      age: 30,
      email:'marcos@aoe.aoe',
      friend: false,
      status:'2',
      uid: 5
    }; 
    
    this.friends = [usuario1,usuario2,usuario3,usuario4,usuario5];
  }

  getFriends(){
    return this.friends;
  }
}
