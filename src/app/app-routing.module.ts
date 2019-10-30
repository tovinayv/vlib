import { NgModule, ErrorHandler } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';


const routes: Routes = [
   {
      path: '',
      component: LayoutComponent,
      children: [
         {
            path: 'tree',
            loadChildren: './tree/tree-testing.module#TreeTestingModule'
         }
      ]
   }
];

export const routerErrorHandler = (error: any): boolean => {
   // tslint:disable-next-line:no-console
   console.error('*** catching router error: ' + error);
   return true;
};

@NgModule({
   imports: [RouterModule.forRoot(routes, {
      useHash: true,
      errorHandler: routerErrorHandler
   })],
   exports: [RouterModule]
})
export class AppRoutingModule { }
