import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProductsPricedRes} from '../products-priced/products-priced-res.model';
import {PolicyIssueReq} from '../policy-issue/policy-issue-req.model';


@Injectable({providedIn: 'root'})
export class DataService  {

  productsPriced: ProductsPricedRes[] = [];
  travelData: any = {};
  policyIssueData: PolicyIssueReq = {
    countryOfResidency: '',
    dateOfBirth: '',
    departureCountry: '',
    departureDate: '',
    destinationCountry: '',
    email: '',
    firstName: '',
    surname: '',
    nationalId: '',
    oneWay: true,
    productId: '',
    returnDate: '',
  };

  constructor(private http: HttpClient) {
  }


}
