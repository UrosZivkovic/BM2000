import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Korisnik2Component } from './korisnik2.component';

describe('Korisnik2Component', () => {
  let component: Korisnik2Component;
  let fixture: ComponentFixture<Korisnik2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Korisnik2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Korisnik2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
