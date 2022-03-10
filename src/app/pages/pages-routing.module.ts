import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PagesComponent} from './pages.component';
import {ProductsPricedComponent} from './hepstar/products-priced/products-priced.component';
import {PolicyIssueComponent} from './hepstar/policy-issue/policy-issue.component';
import {MariusCvComponent} from './marius-cv/marius-cv.component';
import {ProductsListComponent} from './hepstar/products-list/products-list.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: '',
      redirectTo: 'marius-cv',
      pathMatch: 'full',
    },
    {
      path: 'marius-cv',
      component: MariusCvComponent,
    },
    {
      path: 'hepstar/products-priced',
      component: ProductsPricedComponent,
    },
    {
      path: 'hepstar/policy-issue',
      component: PolicyIssueComponent,
    },
    {
      path: 'hepstar/products-list',
      component: ProductsListComponent,
    },
    {
      path: '**',
      component: MariusCvComponent,
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
