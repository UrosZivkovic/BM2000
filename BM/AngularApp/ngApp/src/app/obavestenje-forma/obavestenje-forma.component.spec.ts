import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObavestenjeFormaComponent } from './obavestenje-forma.component';

describe('ObavestenjeFormaComponent', () => {
  let component: ObavestenjeFormaComponent;
  let fixture: ComponentFixture<ObavestenjeFormaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObavestenjeFormaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObavestenjeFormaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
