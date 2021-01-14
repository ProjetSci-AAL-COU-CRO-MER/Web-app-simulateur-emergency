import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtablissementVehiculeComponent } from './etablissement-vehicule.component';

describe('EtablissementVehiculeComponent', () => {
  let component: EtablissementVehiculeComponent;
  let fixture: ComponentFixture<EtablissementVehiculeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtablissementVehiculeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtablissementVehiculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
