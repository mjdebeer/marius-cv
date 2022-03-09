import { Component, OnInit } from '@angular/core';
import {ProductsPricedReq} from '../../../domain/products-priced/products-priced-req.model';
import {ProductsPricedService} from '../../../domain/products-priced/products-priced.service';

@Component({
  selector: 'app-products-priced',
  templateUrl: './products-priced.component.html',
  styleUrls: ['./products-priced.component.scss']
})
export class ProductsPricedComponent implements OnInit {

  params: ProductsPricedReq = {
    countryOfResidency: '',
    departureCountry: '',
    departureDate: '',
    destinationCountry: '',
    oneWay: false,
    returnDate: '',
  };

  constructor(private productsPricedService: ProductsPricedService) { }

  ngOnInit(): void {

  }

  onSubmit() {
    this.productsPricedService.getProducts(this.params);
  }

}
