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
    { title: 'inicio', url: 'inicio', icon: 'home' },
    { title: 'registro', url: 'registro', icon: 'log-in' },
    { title: 'login', url: 'login', icon: 'log-in' },
    
  ];
 
  constructor() {}
}
 
 
