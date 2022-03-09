import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-policy-issue',
  templateUrl: './policy-issue.component.html',
  styleUrls: ['./policy-issue.component.scss']
})
export class PolicyIssueComponent implements OnInit {

  firstName: string;
  surname: string;
  email: string;
  nationalId: string;
  dateOfBirth: string;
  countryOfResidency: string;
  oneWay: boolean;
  departureDate: string;
  returnDate: string;
  departureCountry: string;
  destinationCountry: string;

  constructor() { }

  ngOnInit(): void {
  }

}
