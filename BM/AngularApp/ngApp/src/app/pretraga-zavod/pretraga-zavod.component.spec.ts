import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PretragaZavodComponent } from './pretraga-zavod.component';

describe('PretragaZavodComponent', () => {
  let component: PretragaZavodComponent;
  let fixture: ComponentFixture<PretragaZavodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PretragaZavodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PretragaZavodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
