import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DataService} from '../../../domain/base/data.service';
import {ProductsPricedRes} from '../../../domain/products-priced/products-priced-res.model';
import {PolicyIssueService} from '../../../domain/policy-issue/policy-issue.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  productsPriced: ProductsPricedRes[];
  travelData: any;

  constructor(private route: ActivatedRoute,
              private dataService: DataService,
              private router: Router) {}

  ngOnInit(): void {
    this.productsPriced = this.dataService.productsPriced;
    this.travelData = this.dataService.travelData;
  }

  onSelection(product: ProductsPricedRes) {
    this.dataService.policyIssueData.departureDate = this.travelData.departureDate;
    this.dataService.policyIssueData.returnDate = this.travelData.returnDate;
    this.dataService.policyIssueData.oneWay = this.travelData.oneWay;
    this.dataService.policyIssueData.departureCountry = this.travelData.departureCountry;
    this.dataService.policyIssueData.destinationCountry = this.travelData.destinationCountry;
    this.dataService.policyIssueData.countryOfResidency = this.travelData.countryOfResidency;
    this.dataService.policyIssueData.productId = product.productId;

    this.router.navigate(['/pages/hepstar/policy-issue']);
  }

}
