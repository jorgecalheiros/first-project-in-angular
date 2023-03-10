import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TesteApiComponent } from './teste-api.component';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [TesteApiComponent],
  imports: [CommonModule, ComponentsModule],
})
export class TesteApiModule {}
