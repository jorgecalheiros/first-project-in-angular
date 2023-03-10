import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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

@Injectable({
  providedIn: 'root',
})
export class ApiCepService {
  private urlApi = 'https://viacep.com.br/ws';
  private endopoint = 'json';
  constructor(private http: HttpClient) {}

  getLocation(cep: number): Observable<Cep> {
    return this.http.get<Cep>(`${this.urlApi}/${cep}/${this.endopoint}`);
  }
}
