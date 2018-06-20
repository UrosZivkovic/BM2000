import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObrisiUserFormComponent } from './obrisi-user-form.component';

describe('ObrisiUserFormComponent', () => {
  let component: ObrisiUserFormComponent;
  let fixture: ComponentFixture<ObrisiUserFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObrisiUserFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObrisiUserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
