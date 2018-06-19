/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ZavodInformacijeComponent } from './zavod-informacije.component';

describe('ZavodInformacijeComponent', () => {
  let component: ZavodInformacijeComponent;
  let fixture: ComponentFixture<ZavodInformacijeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZavodInformacijeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZavodInformacijeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
