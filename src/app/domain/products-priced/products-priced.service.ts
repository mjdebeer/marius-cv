import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ProductsPricedReq} from './products-priced-req.model';
import {BaseResponse} from '../base/base-response';


@Injectable({providedIn: 'root'})
export class ProductsPricedService {

  constructor(private http: HttpClient) {
  }

  getProducts(requestParams: ProductsPricedReq) {
    const response = this.http.get<BaseResponse<any>>(this.buildUrl(requestParams));

    response.subscribe(res => {
      console.log(res);
    });
  }

  buildUrl(requestParams: ProductsPricedReq): string {
    let baseUrl = 'https://hepstar-backend.herokuapp.com/api/v1/test/productsPriced';

    Object.keys(requestParams).forEach(key => {
      baseUrl += `?${key}=${requestParams[key]}`;
    });

    return baseUrl;
  }
}
