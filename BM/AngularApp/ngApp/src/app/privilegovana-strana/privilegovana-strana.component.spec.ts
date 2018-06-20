import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivilegovanaStranaComponent } from './privilegovana-strana.component';

describe('PrivilegovanaStranaComponent', () => {
  let component: PrivilegovanaStranaComponent;
  let fixture: ComponentFixture<PrivilegovanaStranaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivilegovanaStranaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivilegovanaStranaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
