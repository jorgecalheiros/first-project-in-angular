import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputBuscarCepComponent } from './input-buscar-cep.component';

describe('InputBuscarCepComponent', () => {
  let component: InputBuscarCepComponent;
  let fixture: ComponentFixture<InputBuscarCepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputBuscarCepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputBuscarCepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
