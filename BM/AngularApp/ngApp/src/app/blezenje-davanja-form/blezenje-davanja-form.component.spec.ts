import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlezenjeDavanjaFormComponent } from './blezenje-davanja-form.component';

describe('BlezenjeDavanjaFormComponent', () => {
  let component: BlezenjeDavanjaFormComponent;
  let fixture: ComponentFixture<BlezenjeDavanjaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlezenjeDavanjaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlezenjeDavanjaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
