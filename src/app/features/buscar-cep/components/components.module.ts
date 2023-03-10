import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputBuscarCepComponent } from './input-buscar-cep/input-buscar-cep.component';
import { ContainerMostrarLocalizacaoComponent } from './container-mostrar-localizacao/container-mostrar-localizacao.component';

@NgModule({
  declarations: [InputBuscarCepComponent, ContainerMostrarLocalizacaoComponent],
  imports: [CommonModule, MatIconModule],
  exports: [InputBuscarCepComponent, ContainerMostrarLocalizacaoComponent],
})
export class ComponentsModule {}
