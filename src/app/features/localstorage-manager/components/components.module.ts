import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListLocalstorageComponent } from './list-localstorage/list-localstorage.component';
import { FormLocalstorageComponent } from './form-localstorage/form-localstorage.component';

@NgModule({
  declarations: [ListLocalstorageComponent, FormLocalstorageComponent],
  imports: [CommonModule],
  exports: [ListLocalstorageComponent, FormLocalstorageComponent],
})
export class ComponentsModule {}
