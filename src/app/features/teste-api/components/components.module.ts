import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputApiComponent } from './input-api/input-api.component';
import { RequestApiComponent } from './request-api/request-api.component';

@NgModule({
  declarations: [InputApiComponent, RequestApiComponent],
  imports: [CommonModule],
  exports: [InputApiComponent, RequestApiComponent],
})
export class ComponentsModule {}
