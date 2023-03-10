import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsonPlacheholderComponent } from './json-placheholder.component';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [JsonPlacheholderComponent],
  imports: [CommonModule, ComponentsModule],
})
export class JsonPlacheholderModule {}
