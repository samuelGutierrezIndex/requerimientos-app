import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Filtros1Component } from './filtros1.component';

describe('Filtros1Component', () => {
  let component: Filtros1Component;
  let fixture: ComponentFixture<Filtros1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Filtros1Component]
    });
    fixture = TestBed.createComponent(Filtros1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
