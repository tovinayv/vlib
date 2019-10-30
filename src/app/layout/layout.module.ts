import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

const COMPONENTS = [
   LayoutComponent
];

@NgModule({
   imports: [
      CommonModule,
      RouterModule
   ],
   declarations: [
      ...COMPONENTS
   ],
   exports: [
      ...COMPONENTS
   ]
})
export class LayoutModule {
   constructor() {
      console.log('Loading LayoutModule');
   }
}
