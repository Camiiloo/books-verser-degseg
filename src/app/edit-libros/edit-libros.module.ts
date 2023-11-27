import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditLibrosPageRoutingModule } from './edit-libros-routing.module';

import { EditLibrosPage } from './edit-libros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditLibrosPageRoutingModule
  ],
  declarations: [EditLibrosPage]
})
export class EditLibrosPageModule {}
