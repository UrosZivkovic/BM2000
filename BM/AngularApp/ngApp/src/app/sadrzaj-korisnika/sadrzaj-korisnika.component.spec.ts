import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SadrzajKorisnikaComponent } from './sadrzaj-korisnika.component';

describe('SadrzajKorisnikaComponent', () => {
  let component: SadrzajKorisnikaComponent;
  let fixture: ComponentFixture<SadrzajKorisnikaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SadrzajKorisnikaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SadrzajKorisnikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
