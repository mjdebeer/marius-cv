import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-priced',
  templateUrl: './products-priced.component.html',
  styleUrls: ['./products-priced.component.scss']
})
export class ProductsPricedComponent implements OnInit {

  countryOfResidency: string;
  departureCountry: string;
  destinationCountry: string;
  oneWay: string;
  departureDate: string;
  returnDate: string;

  constructor() { }

  ngOnInit(): void {

  }

}
