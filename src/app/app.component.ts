import { Component } from '@angular/core';
import { TransfService } from './services/transf.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';

  constructor(private service: TransfService) {}

}
