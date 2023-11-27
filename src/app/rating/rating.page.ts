import { Component, } from '@angular/core';
import { ServiceRestService } from '../services/service-rest.service';
import { ToastController, ToastOptions } from '@ionic/angular';
import { BarcodeScanner } from
'@awesome-cordova-plugins/barcode-scanner/ngx';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.page.html',
  styleUrls: ['./rating.page.scss'],
})
export class RatingPage  {

  data: any; 

  code: any; 
  libros: any; 

    libro: any ={
    id: null,
    codigo: "",
    titulo: "",
    autor: "",
    cita: "",
    resena: ""
  }

  constructor(private api: ServiceRestService, 
    private toastController: ToastController,
    private barcodeScanner: BarcodeScanner) { 

    }


    scannerQr(){
      this.barcodeScanner.scan().then(barcodeData => {
      this.code = barcodeData.text
      console.log('Barcode data', barcodeData);
      }).catch(err => {
      console.log('Error', err);
      })
      }
      



  limpiar(){
    this.libro.titulo="";
    this.libro.autor="";
    this.libro.cita="";
    this.libro.resena="";
  }


  ionViewWillEnter() {
    this.getLibrolist();
    this.limpiar(); 
  }

//====GET ALL LIBROS=====
getLibrolist(){
  this.api.getLibroList().subscribe((data) =>{
    console.log(data);
    this.libros = data;
  });
}

 //=====AGREGAR LIBRO======
 addLibro(){
  if (this.libro.titulo == "" || this.libro.autor == "" || this.libro.cita == "" || this.libro.resena == "") {
    this.presentToast({
      message: ' Error al registrar Libro, debe llenar los campos ',
      duration: 3000,
      position: 'middle',
      icon: 'alert-circle-outline'
    });
    return;
  }else{
    this.api.addLibro(this.libro).subscribe({
      next: (() => {
        console.log("Libro creado: "+ this.libro)
        this.presentToast({
          message: ' Libro creado ',
          duration: 3000,
          position: 'middle',
          icon: 'alert-circle-outline'
        });
        this.getLibrolist();
        this.limpiar();
      })
    })
  }
}

getLibroId(id: any){
  this.api.getLibroId(id).subscribe((data) => {
    console.log(data);
    this.libro = data
  })
}

deleteLibro(id: any){
  this.api.deleteLibro(id).subscribe({
    next: (() => {
      this.presentToast({
        message: 'Libro eliminado',
        duration: 1500,
        position: 'middle',
        icon: 'alert-circle-outline'
      });
      console.log("Libro eliminado");
      this.getLibrolist();
    }),
    error: (error => {
      console.log("Error"+ error)
    })
  })
}



async presentToast(opts?: ToastOptions) {
  const toast = await this.toastController.create(opts);
  toast.present();
}

}


