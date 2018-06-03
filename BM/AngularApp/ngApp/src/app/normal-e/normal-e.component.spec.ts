import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalEComponent } from './normal-e.component';

describe('NormalEComponent', () => {
  let component: NormalEComponent;
  let fixture: ComponentFixture<NormalEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormalEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
