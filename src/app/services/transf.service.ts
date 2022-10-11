import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransfService {

  transfs: any[];
  private firstTime: boolean = true;

  constructor() {
    this.transfs = [{data: new Date(),valor: 50, destino: '0000-0'}]
  }

  getTransf() {
    return this.transfs;
  }

  adicionar(t: any) {
    t.data = new Date();

    if(this.firstTime) { //replace placeholder
      this.firstTime = false;
      this.transfs[0] = t;
    }else {
      this.transfs.push(t);
    }
  }
}
