import { Observable } from 'rxjs';
import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/throw';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';


describe('MedicosComponent', () => {

  let componente: MedicosComponent;
  let fixture: ComponentFixture<MedicosComponent>;
  //const servicio = new MedicosService(null);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicosComponent ],
      imports: [
        HttpClientModule,
      ],
      providers: [
        {
          provide: MedicosService
        }
      ]
    })
    .compileComponents();
  });

  beforeEach( () => {
    //componente = new MedicosComponent(servicio);
    fixture = TestBed.createComponent(MedicosComponent);
    componente = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('Init: Debe de cargar los médicos', () => {
    const medicos = ['medico1', 'medico2', 'medico3'];
    spyOn( componente._medicoService, 'getMedicos' ).and.callFake( () => {
      //return Observable.from( [['medico1', 'medico2', 'medico3']] );
      return Observable.from( [medicos] );
    });
    componente.ngOnInit();
    expect( componente.medicos.length ).toBeGreaterThan(0);

  });

  it('Debe de llamar al servidor para agregar un médido', () => {
    const espia = spyOn( componente._medicoService, 'agregarMedico' ).and.callFake( medico => {
      return Observable.empty();
    });

    componente.agregarMedico();
    expect( espia ).toHaveBeenCalled();
  });

  it( 'Debe de agregar un nuevo médico al array de médicos', () => {
    const medico = { id:1, nombre: 'Juan' };
    spyOn( componente._medicoService, 'agregarMedico' ).and.returnValue( Observable.from( [ medico ] ) );
    componente.agregarMedico();
    expect( componente.medicos.length ).toBe(1);
  });

  it( 'Debe de agregar un nuevo médico al array de médicos otra forma', () => {
    const medico = { id:1, nombre: 'Juan'};
    spyOn( componente._medicoService, 'agregarMedico' ).and.returnValue( Observable.from( [ medico ] ) );
    componente.agregarMedico();
    expect( componente.medicos.indexOf( medico )).toBeGreaterThanOrEqual(0);
  });

  it( 'Si falla la adición, la propiedade mensajeError, debe ser igual al error del servicio', () => {
    const miError = 'No se pudo agregar al médico';

    spyOn( componente._medicoService, 'agregarMedico' ).and.returnValue( Observable.throw( miError) );
    componente.agregarMedico();
    expect( componente.mensajeError ).toBe( miError );

  });

  it( 'Debe de llamar al servidor para borrar un médico', () => {
    spyOn( window, 'confirm' ).and.returnValue(true);

    const espia = spyOn( componente._medicoService, 'borrarMedico' ).and.returnValue( Observable.empty() );
    componente.borrarMedico('1');
    expect( espia ).toHaveBeenCalledWith('1');
  });

  it( 'No debe de llamar al servidor para borrar un médico', () => {
    spyOn( window, 'confirm' ).and.returnValue(false); //si fuera true, el test fallaría

    const espia = spyOn( componente._medicoService, 'borrarMedico' ).and.returnValue( Observable.empty() );
    componente.borrarMedico('1');
    expect( espia ).not.toHaveBeenCalledWith('1');
  });
});
