import { Transferencia } from './../models/transferencia.model';
import { TransfService } from './../services/transf.service';
import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transf',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransfComponent {
  @Output() aoTransferir = new EventEmitter<any>();

  data: Date = new Date();
  valor: number = 50;
  destino: string = '0000-0';

  constructor(private service: TransfService, private router: Router) {}

  transferir() {
    console.log('tranferencia realizada!');
    const valorEmitir: Transferencia = {
      data: this.data,
      valor: this.valor,
      destino: this.destino
    }
    this.service.adicionar(valorEmitir)
        .subscribe(
          (resultado) => {
          console.log('valor emitir', resultado);
          this.limparCampos();
          this.router.navigateByUrl('extrato');
        }, (erro) => {
            console.error('erro', erro);
        });
  }

  limparCampos() {
    this.data = new Date();
    this.valor = 50;
    this.destino = '0000-0';
  }


}
