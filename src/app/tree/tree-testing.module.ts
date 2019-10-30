import { NgModule } from '@angular/core';
import { VlibTreeModule } from 'vlib-tree';
import { RouterModule } from '@angular/router';
import { TreeTestingComponent } from './tree-testing.component';

@NgModule({
   imports: [
      VlibTreeModule,
      RouterModule.forChild([
         {
            path: '',
            component: TreeTestingComponent
         }
      ])
   ],
   declarations: [
      TreeTestingComponent
   ]
})
export class TreeTestingModule {
   constructor() {
      console.log('Loading TreeTestingModule');
   }
}
