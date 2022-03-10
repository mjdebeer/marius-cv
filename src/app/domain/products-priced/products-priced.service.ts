import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProductsPricedReq} from './products-priced-req.model';
import {BaseResponse} from '../base/base-response';
import {Router} from '@angular/router';
import {ProductsPricedRes} from './products-priced-res.model';
import {Observable} from 'rxjs';


@Injectable({providedIn: 'root'})
export class ProductsPricedService {

  constructor(private http: HttpClient) {
  }

  getProducts(requestParams: ProductsPricedReq): Observable<ProductsPricedRes[]> {
    return this.http.get<ProductsPricedRes[]>(this.buildUrl(requestParams));
  }

  buildUrl(requestParams: ProductsPricedReq): string {
    let baseUrl = 'https://hepstar-backend.herokuapp.com/api/v1/test/productsPriced?';

    Object.keys(requestParams).forEach(key => {
      baseUrl += `&${key}=${requestParams[key]}`;
    });

    return baseUrl;
  }
}
