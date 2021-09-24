import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class MedicosService {

  constructor( public http: HttpClient ) { }

  getMedicos() {
    return this.http.get('...')
                .map( (resp:any):any => resp['medicos'] );
  }

  agregarMedico( medico: any ) {
    return this.http.post('...', medico )
                .map( (resp:any):any => resp['medico'] );
  }

  borrarMedico( id: string ) {
    return this.http.delete('...' )
                .map( (resp:any):any => resp['medico'] );
  }
}
