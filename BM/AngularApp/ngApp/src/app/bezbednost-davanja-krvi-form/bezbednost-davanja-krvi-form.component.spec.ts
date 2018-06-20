/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BezbednostDavanjaKrviFormComponent } from './bezbednost-davanja-krvi-form.component';

describe('BezbednostDavanjaKrviFormComponent', () => {
  let component: BezbednostDavanjaKrviFormComponent;
  let fixture: ComponentFixture<BezbednostDavanjaKrviFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BezbednostDavanjaKrviFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BezbednostDavanjaKrviFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
