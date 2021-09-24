import { HttpClientModule } from "@angular/common/http";
import { TestBed, ComponentFixture } from "@angular/core/testing";
import { MedicosService } from "src/app/intermedias/espias/medicos.service";
import { MedicoComponent } from "./medico.component";

describe('Medico Component', ()=>{
  let component: MedicoComponent;
  let fixture: ComponentFixture<MedicoComponent>;

  beforeEach( () => {
    //component = new MedicoComponent();
    TestBed.configureTestingModule({
      declarations: [ MedicoComponent ],
      providers: [ MedicosService ],
      imports: [ HttpClientModule ]
    });

    fixture = TestBed.createComponent( MedicoComponent ); //permite tener acceso al http, disparar el ciclo de detección de cambios, querys o selectores del HTML sobre el DOM
    component = fixture.componentInstance; //permite usar todos los métodos y otros elementos definidos
  });

  it('Debe crearse el componente', () => {
    expect( component ).toBeTruthy();
  });

  it('Debe retornar el nombre del médico', () => {
    const nombre = 'Juan';
    const res = component.saludarMedico( nombre );
    expect( res ).toContain( nombre );
  });
});
