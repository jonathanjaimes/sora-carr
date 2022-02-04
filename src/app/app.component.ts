import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {
  title = 'carr';
  
  bandera1: boolean = true;
  bandera2: boolean = false;
  bandera3: boolean = false

  cambiar() {
    this.bandera1 = true;
    this.bandera2 = false;
    this.bandera3 = false;
  }

  cambiar2() {
    this.bandera1 = false;
    this.bandera2 = true;
    this.bandera3 = false;
  }

  cambiar3() {
    this.bandera1 = false;
    this.bandera2 = false;
    this.bandera3 = true;
  }
  

}
