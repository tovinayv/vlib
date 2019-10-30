import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';

export interface TreeNodeData {
   label: string;
   collapsed?: boolean;
   children?: TreeNodeData[];
}

export type ChildrenLoader = (node: TreeNodeData) => Observable<TreeNodeData[]>;

@Component({
   selector: 'vlib-tree-node',
   templateUrl: './vlib-tree-node.component.html',
   styleUrls: ['./vlib-tree-node.component.scss']
})
export class VlibTreeNodeComponent implements OnChanges {

   @Input()
   data: TreeNodeData;

   @Input()
   selectedNode: TreeNodeData;

   @Output()
   selected: EventEmitter<TreeNodeData> = new EventEmitter<TreeNodeData>();

   @Output()
   collapsed: EventEmitter<TreeNodeData> = new EventEmitter<TreeNodeData>();

   isSelected = false;
   isLoading = false;

   @Input()
   childrenLoader: ChildrenLoader;

   constructor() { }

   ngOnChanges(changes: SimpleChanges): void {
      this.isSelected = JSON.stringify(this.data) === JSON.stringify(this.selectedNode);
   }

   clicked() {
      this.selected.emit(this.data);
   }
   expand() {
      this.emitCollapsed(false);
      this.loadChildren(this.data);
   }
   private loadChildren(node: TreeNodeData) {
      if (this.childrenLoader) {
         this.isLoading = true;
         this.childrenLoader(node).subscribe((children) => {
            setTimeout(() => {
               this.isLoading = false;
               this.data.children = children;
            }, 1000);
         });
      }
   }
   collapse() {
      this.emitCollapsed(true);
   }
   private emitCollapsed(collapsed: boolean) {
      this.data.collapsed = collapsed;
      const out = { ...this.data };
      this.collapsed.emit(out);
   }

   nodeSelected($event) {
      this.selected.emit($event);
   }
   nodeCollapsed($event) {
      this.collapsed.emit($event);
   }
}
