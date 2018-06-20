/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ZnacajDavanjaKrviFormComponent } from './znacaj-davanja-krvi-form.component';

describe('ZnacajDavanjaKrviFormComponent', () => {
  let component: ZnacajDavanjaKrviFormComponent;
  let fixture: ComponentFixture<ZnacajDavanjaKrviFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZnacajDavanjaKrviFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZnacajDavanjaKrviFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
