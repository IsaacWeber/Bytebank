import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';

  transfs: any = [{data: new Date(),valor: 50, destino: '0000-0'}];
  firstTime: boolean = true;
  //transf: any;
  transferir($event) {
    console.log($event);

    if(this.firstTime) { //replace placeholder
      this.transfs[0] = {...$event, data: new Date()};
      this.firstTime = false;
    }else {
      this.transfs.push({...$event, data: new Date()});
    }
  }


}
