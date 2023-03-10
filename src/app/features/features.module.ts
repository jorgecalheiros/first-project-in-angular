import { LocalstorageManagerModule } from './localstorage-manager/localstorage-manager.module';
import { TesteApiModule } from './teste-api/teste-api.module';
import { JsonPlacheholderModule } from './json-placheholder/json-placheholder.module';
import { BuscarCepModule } from './buscar-cep/buscar-cep.module';
import { HomeModule } from './home/home.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeModule,
    BuscarCepModule,
    JsonPlacheholderModule,
    TesteApiModule,
    LocalstorageManagerModule,
  ],
})
export class FeaturesModule {}
