import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import Swiper from 'swiper';
import { ActivatedRoute , Router} from '@angular/router';
import { HttpClient  } from '@angular/common/http';
/* import {  Plugins } from '@capacitor/core'; */
import { Title } from '@angular/platform-browser';
import { Share } from '@capacitor/share';
/* const { Share } = Plugins; */
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  @ViewChild('swiper')
  swiperRef: ElementRef | undefined;
  swiper?: Swiper;
  images = [
    'https://i.pinimg.com/564x/1f/03/5d/1f035d318d5f6ce4deccf5e4ab3c0efc.jpg',
    'https://i.pinimg.com/564x/f2/eb/54/f2eb5409211cf036f934b18a0b4f8711.jpg',
    'https://i.pinimg.com/564x/4e/bd/8a/4ebd8a8b49964eacded5e3e0cb9bdcc7.jpg',
    'https://i.pinimg.com/564x/61/92/ea/6192eac97639d8aa8fc4eb7f86019bcf.jpg',
  ];

  /* constructor(public alertController: AlertController,
    public navCtrl: NavController) { } */
  constructor(private activateRoute: ActivatedRoute, private router: Router, http: HttpClient, public  alertController: AlertController,
    public navCtrl: NavController) { 
    this.activateRoute.queryParams.subscribe(() => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        this.data = this.router.getCurrentNavigation()?.extras.state?.['user'];
        console.log(this.data);
      }else{
        this.router.navigate(["/inicio"]);
      }
    });
    
  }
  async basicShare(){
    await Share.share({
      title: 'has visto la nueva app books-verser',
      text: 'te invito a verla',
      url: 'http://ionicframework.com/',
      
    });

  }
  async shareImahe() {

  }
  async shareLocalFile (){

  }

  data(data: any) {
    throw new Error('Method not implemented.');
  }
  swiperReady() {
    this.swiper = this.swiperRef?.nativeElement.swiper;
  }
  goNext(){
    this.swiper?.slideNext();
  }
  swiperSlideChanged(e: any) {
    console.log('changed: ', e);
  }
 /*  cerrarSesion(){
    localStorage.removeItem('ingresado');
    this.router.navigate(["/home"]);
  } */
  async salir(){
    const alert = await this.alertController.create({
      header: 'Salir',
      message: '¿Deberitas te quieres salir?',
      buttons: [
        {
          text: 'No mejor no',
          handler: () => {
            
          }
        }, {
          text: 'Sii',
          handler: () => {
            localStorage.removeItem('ingresado');
            this.navCtrl.navigateRoot('login');
          }
        }
      ]
    });

    await alert.present();
  }

  ngOnInit(): void {
  }

}
