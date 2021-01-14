import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtablissementMainComponent } from './etablissement-main.component';

describe('EtablissementMainComponent', () => {
  let component: EtablissementMainComponent;
  let fixture: ComponentFixture<EtablissementMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtablissementMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtablissementMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
