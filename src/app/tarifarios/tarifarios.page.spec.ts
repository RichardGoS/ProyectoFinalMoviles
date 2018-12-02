import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarifariosPage } from './tarifarios.page';

describe('TarifariosPage', () => {
  let component: TarifariosPage;
  let fixture: ComponentFixture<TarifariosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarifariosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarifariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
