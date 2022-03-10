import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProductsPricedReq} from '../products-priced/products-priced-req.model';
import {Observable} from 'rxjs';
import {ProductsPricedRes} from '../products-priced/products-priced-res.model';
import {PolicyIssueReq} from './policy-issue-req.model';


@Injectable({providedIn: 'root'})
export class PolicyIssueService {

  constructor(private http: HttpClient) {
  }

  issuePolicy(requestParams: PolicyIssueReq): Observable<any> {
    return this.http.get(this.buildUrl(requestParams));
  }

  buildUrl(requestParams: PolicyIssueReq): string {
    let baseUrl = 'https://hepstar-backend.herokuapp.com/api/v1/test/policyIssue?';

    Object.keys(requestParams).forEach(key => {
      baseUrl += `&${key}=${requestParams[key]}`;
    });

    return baseUrl;
  }
}
