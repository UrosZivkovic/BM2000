import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrisanjeNalogaComponent } from './brisanje-naloga.component';

describe('BrisanjeNalogaComponent', () => {
  let component: BrisanjeNalogaComponent;
  let fixture: ComponentFixture<BrisanjeNalogaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrisanjeNalogaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrisanjeNalogaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
