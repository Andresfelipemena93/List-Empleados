import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  constructor(private firestorage: AngularFirestore) { }

  agregarEmpleado(empleado: any) { 
    return this.firestorage.collection('empleados').add(empleado);
    
  }
}
