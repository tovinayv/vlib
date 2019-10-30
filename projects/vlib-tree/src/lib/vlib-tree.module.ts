import { NgModule } from '@angular/core';
import { VlibTreeComponent } from './vlib-tree.component';
import { CommonModule } from '@angular/common';
import { VlibTreeNodeComponent } from './node/vlib-tree-node.component';
import { ClarityModule } from '@clr/angular';

@NgModule({
   imports: [
      CommonModule,
      ClarityModule
   ],
   declarations: [VlibTreeComponent, VlibTreeNodeComponent],
   exports: [VlibTreeComponent]
})
export class VlibTreeModule { }
