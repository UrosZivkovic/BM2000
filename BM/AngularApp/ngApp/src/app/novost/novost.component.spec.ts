import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovostComponent } from './novost.component';

describe('NovostComponent', () => {
  let component: NovostComponent;
  let fixture: ComponentFixture<NovostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
