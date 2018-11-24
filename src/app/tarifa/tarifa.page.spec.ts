import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarifaPage } from './tarifa.page';

describe('TarifaPage', () => {
  let component: TarifaPage;
  let fixture: ComponentFixture<TarifaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarifaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarifaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
