import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerMostrarLocalizacaoComponent } from './container-mostrar-localizacao.component';

describe('ContainerMostrarLocalizacaoComponent', () => {
  let component: ContainerMostrarLocalizacaoComponent;
  let fixture: ComponentFixture<ContainerMostrarLocalizacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerMostrarLocalizacaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerMostrarLocalizacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
