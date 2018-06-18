import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZavodComponent } from './zavod.component';

describe('ZavodComponent', () => {
  let component: ZavodComponent;
  let fixture: ComponentFixture<ZavodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZavodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZavodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
