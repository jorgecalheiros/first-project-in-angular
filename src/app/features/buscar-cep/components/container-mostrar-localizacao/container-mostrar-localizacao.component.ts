import { Component, Input } from '@angular/core';

type Cep = {
  cep: string;
  logradouro: string;
  complemento: string | null;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
};
@Component({
  selector: 'app-container-mostrar-localizacao',
  templateUrl: './container-mostrar-localizacao.component.html',
  styleUrls: ['./container-mostrar-localizacao.component.css'],
})
export class ContainerMostrarLocalizacaoComponent {
  @Input() location: Cep = {
    cep: '',
    logradouro: '',
    complemento: '',
    bairro: '',
    localidade: '',
    uf: '',
    ibge: '',
    gia: '',
    ddd: '',
    siafi: '',
  };
}
