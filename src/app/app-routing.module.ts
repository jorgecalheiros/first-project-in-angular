import { LocalstorageManagerComponent } from './features/localstorage-manager/localstorage-manager.component';
import { TesteApiComponent } from './features/teste-api/teste-api.component';
import { JsonPlacheholderComponent } from './features/json-placheholder/json-placheholder.component';
import { BuscarCepComponent } from './features/buscar-cep/buscar-cep.component';
import { HomeComponent } from './features/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'buscar/cep',
    component: BuscarCepComponent,
  },
  {
    path: 'jsonplaceholder',
    component: JsonPlacheholderComponent,
  },
  {
    path: 'teste/api',
    component: TesteApiComponent,
  },
  {
    path: 'localstorage',
    component: LocalstorageManagerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
