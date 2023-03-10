import { ComponentsModule } from './components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscarCepComponent } from './buscar-cep.component';

@NgModule({
  declarations: [BuscarCepComponent],
  imports: [CommonModule, ComponentsModule],
})
export class BuscarCepModule {}
