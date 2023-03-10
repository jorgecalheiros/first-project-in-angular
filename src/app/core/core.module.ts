import { AppRoutingModule } from './../app-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { AsideComponent } from './components/aside/aside.component';

@NgModule({
  declarations: [HeaderComponent, AsideComponent],
  imports: [CommonModule, MatIconModule, AppRoutingModule],
  exports: [HeaderComponent, AsideComponent],
})
export class CoreModule {}
