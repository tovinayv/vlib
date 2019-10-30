import { Component } from '@angular/core';
import { TreeData, TreeNodeData, ChildrenLoader } from 'vlib-tree';
import { Observable, of } from 'rxjs';

@Component({
   template: `<vlib-tree [data]="data" (selected)="nodeSelected($event)" (collapsed)="nodeCollapsed($event)"
   [childrenLoader]="childrenLoader"></vlib-tree>`
})
export class TreeTestingComponent {
   data: TreeData = [
      {
         label: 'root',
         children: [
            {
               label: 'child1',
               children: [
                  {
                     label: 'grandchild1'
                  }
               ]
            },
            {
               label: 'child2',
               children: [
                  {
                     label: 'grandchild2'
                  }
               ]
            }
         ]
      }
   ];

   nodeSelected($event) {
      console.log('selected' + JSON.stringify($event));
   }
   nodeCollapsed($event) {
      console.log('collapsed' + JSON.stringify($event));
   }

   childrenLoader: ChildrenLoader = (node?: TreeNodeData): Observable<TreeNodeData[]> => {
      if (node.label === 'grandchild1') {
         return of([{ label: 'cc1' }]);
      }
      if (node.label === 'grandchild2') {
         return of([{ label: 'cc2' }]);
      }
      return of(node.children);
   }
}
