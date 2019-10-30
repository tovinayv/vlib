import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TreeNodeData, ChildrenLoader } from './node/vlib-tree-node.component';

export type TreeData = TreeNodeData[];

@Component({
   selector: 'vlib-tree',
   templateUrl: './vlib-tree.component.html',
   styleUrls: ['./vlib-tree.component.scss']
})
export class VlibTreeComponent implements OnInit {
   @Input()
   data: TreeData = [];

   @Input()
   childrenLoader: ChildrenLoader;

   selectedNode: TreeNodeData;

   @Output()
   selected: EventEmitter<TreeNodeData> = new EventEmitter<TreeNodeData>();
   @Output()
   collapsed: EventEmitter<boolean> = new EventEmitter<boolean>();



   constructor() { }

   ngOnInit() {
   }

   nodeSelected($event) {
      this.selectedNode = { ...$event };
      this.selected.emit($event);
   }
   nodeCollapsed($event) {
      this.collapsed.emit($event);
   }
}
