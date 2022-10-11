import { Component, Input, OnInit } from '@angular/core';
import { TransfService } from '../services/transf.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {
  transfs: any[] = [];

  constructor(private service: TransfService) {

  }

  ngOnInit(): void {
    this.transfs = this.service.transfs;
  }

}
