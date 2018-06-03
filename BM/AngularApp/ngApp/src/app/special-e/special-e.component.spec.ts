import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialEComponent } from './special-e.component';

describe('SpecialEComponent', () => {
  let component: SpecialEComponent;
  let fixture: ComponentFixture<SpecialEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
