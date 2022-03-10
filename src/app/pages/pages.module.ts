import {NgModule} from '@angular/core';
import {
  NbButtonModule,
  NbCardModule,
  NbDatepickerModule,
  NbFormFieldModule,
  NbInputModule,
  NbListModule, NbThemeModule,
  NbToggleModule
} from '@nebular/theme';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PagesComponent} from './pages.component';
import {PagesRoutingModule} from './pages-routing.module';
import {ProductsPricedComponent} from './hepstar/products-priced/products-priced.component';
import {PolicyIssueComponent} from './hepstar/policy-issue/policy-issue.component';
import {HeaderComponent} from './marius-cv/header/header.component';
import {BodyComponent} from './marius-cv/body/body.component';
import {FooterComponent} from './marius-cv/footer/footer.component';
import {CardsComponent} from './marius-cv/cards/cards.component';
import { MariusCvComponent } from './marius-cv/marius-cv.component';
import {CommonModule} from '@angular/common';
import { ProductsListComponent } from './hepstar/products-list/products-list.component';

@NgModule({
  imports: [
    NbThemeModule,
    PagesRoutingModule,
    NbDatepickerModule,
    FormsModule,
    NbCardModule,
    NbInputModule,
    NbFormFieldModule,
    NbListModule,
    NbToggleModule,
    NbButtonModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations: [
    PagesComponent,
    ProductsPricedComponent,
    PolicyIssueComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    CardsComponent,
    MariusCvComponent,
    ProductsListComponent,
  ],
})
export class PagesModule {
}
