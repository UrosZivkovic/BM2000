/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ProcesDavanjaKrviFormComponent } from './proces-davanja-krvi-form.component';

describe('ProcesDavanjaKrviFormComponent', () => {
  let component: ProcesDavanjaKrviFormComponent;
  let fixture: ComponentFixture<ProcesDavanjaKrviFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcesDavanjaKrviFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcesDavanjaKrviFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
