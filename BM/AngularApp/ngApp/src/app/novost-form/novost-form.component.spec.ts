import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovostFormComponent } from './novost-form.component';

describe('NovostFormComponent', () => {
  let component: NovostFormComponent;
  let fixture: ComponentFixture<NovostFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovostFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovostFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
