import { Component } from '@angular/core';
import {register} from 'swiper/element/bundle'; 


register();
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: 'inicio', icon: 'home' },
    { title: 'Registro', url: 'registro', icon: 'document-text' },
    { title: 'Login', url: 'login', icon: 'log-in' },
    { title: 'Rating', url: 'rating', icon: 'star' },
    
  ];
 
  constructor() {}
}
 
 
