import { Component, OnInit } from '@angular/core';
import {DataService} from '../../../domain/base/data.service';
import {PolicyIssueService} from '../../../domain/policy-issue/policy-issue.service';

@Component({
  selector: 'app-policy-issue',
  templateUrl: './policy-issue.component.html',
  styleUrls: ['./policy-issue.component.scss']
})
export class PolicyIssueComponent implements OnInit {

  params = {
    firstName: '',
    surname: '',
    email: '',
    nationalId: '',
    dateOfBirth: '',
    countryOfResidency: '',
    oneWay: true,
    departureDate: '',
    returnDate: '',
    departureCountry: '',
    destinationCountry: '',
    productId: '',
  };

  constructor(private dataService: DataService,
              private policyService: PolicyIssueService) { }

  ngOnInit(): void {
    this.params.departureDate = this.dataService.policyIssueData.departureDate;
    this.params.returnDate = this.dataService.policyIssueData.returnDate;
    this.params.oneWay = this.dataService.policyIssueData.oneWay;
    this.params.departureCountry = this.dataService.policyIssueData.departureCountry;
    this.params.destinationCountry = this.dataService.policyIssueData.destinationCountry;
    this.params.countryOfResidency = this.dataService.policyIssueData.countryOfResidency;
    this.params.productId = this.dataService.policyIssueData.productId;
  }

  onSubmit() {
    this.policyService.issuePolicy(this.params)
      .pipe()
      .subscribe(res => {
        console.log(res);
      });
  }

}
