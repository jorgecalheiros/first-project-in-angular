import { ApiCepService } from './../../shared/services/api-cep.service';
import { Component } from '@angular/core';
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
  selector: 'app-buscar-cep',
  templateUrl: './buscar-cep.component.html',
  styleUrls: ['./buscar-cep.component.css'],
})
export class BuscarCepComponent {
  location: Cep = {
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
  constructor(private service: ApiCepService) {}

  getData(value: number) {
    this.service.getLocation(value).subscribe((location) => {
      this.location = location;
    });
  }
}
