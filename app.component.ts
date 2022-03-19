import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Datos Personales', url: '/datos', icon: 'copy' }, 
    { title: 'Datos de Origen', url: '/datoso', icon: 'compass' },
    { title: 'Metas Personales', url: '/metas', icon: 'golf' },
    
  ];

}
