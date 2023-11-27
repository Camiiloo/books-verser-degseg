import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditLibrosPage } from './edit-libros.page';

const routes: Routes = [
  {
    path: '',
    component: EditLibrosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditLibrosPageRoutingModule {}
