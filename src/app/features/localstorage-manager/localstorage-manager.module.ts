import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalstorageManagerComponent } from './localstorage-manager.component';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [LocalstorageManagerComponent],
  imports: [CommonModule, ComponentsModule],
})
export class LocalstorageManagerModule {}
