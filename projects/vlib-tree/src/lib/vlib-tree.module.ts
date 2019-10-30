import { NgModule } from '@angular/core';
import { VlibTreeComponent } from './vlib-tree.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [VlibTreeComponent],
  imports: [
     CommonModule
  ],
  exports: [VlibTreeComponent]
})
export class VlibTreeModule { }
