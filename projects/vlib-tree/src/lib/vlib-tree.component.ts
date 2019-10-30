import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'vlib-tree',
   templateUrl: './vlib-tree.component.html',
   styleUrls: ['./vlib-tree.component.scss']
})
export class VlibTreeComponent implements OnInit {
   numbers = Array(8);
   constructor() { }

   ngOnInit() {
   }
}
