import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DeputadoService {
  private URL: string;

  constructor(private http: HttpClient) {
    this.URL = 'https://dadosabertos.camara.leg.br/api/v2/';
    this.obterDeputadoPorNome = this.obterDeputadoPorNome;
  }

  /** retorna as informações de todos os deputados e deputadas */
  obterDeputados(): Observable<any> {
    return this.http.get<any>(
      `${this.URL}/deputados?ordem=ASC&ordenarPor=nome`
    );
  }

  obterDeputadoPorNome(nome: string) {
    `${this.URL}/deputados?nome=${nome}&ordem=ASC&ordenarPor=nome`;
  }
}
