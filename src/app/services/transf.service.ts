import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transferencia } from '../models/transferencia.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransfService {

  transfs: any[];
  private firstTime: boolean = true;
  private url = 'http://localhost:3000/transferencias';

  constructor(private httpClient: HttpClient) {
    this.transfs = [{data: new Date(),valor: 50, destino: '0000-0'}]
  }

  todas(): Observable<Transferencia[]> {
    return this.httpClient.get<Transferencia[]>(this.url);
  }
  getTransf() {
    return this.transfs;
  }

  adicionar(t: any): Observable<Transferencia> {
    t.data = new Date();
    return this.httpClient.post<Transferencia>(this.url, t);
  }
}
