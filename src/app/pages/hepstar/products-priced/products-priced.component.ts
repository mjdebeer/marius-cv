import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductsPricedReq} from '../../../domain/products-priced/products-priced-req.model';
import {ProductsPricedService} from '../../../domain/products-priced/products-priced.service';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';
import {Router} from '@angular/router';
import {DataService} from '../../../domain/base/data.service';

@Component({
  selector: 'app-products-priced',
  templateUrl: './products-priced.component.html',
  styleUrls: ['./products-priced.component.scss']
})
export class ProductsPricedComponent implements OnInit, OnDestroy {

  // tslint:disable-next-line:variable-name
  _destroyed = new Subject();

  params: ProductsPricedReq = {
    countryOfResidency: '',
    departureCountry: '',
    departureDate: '',
    destinationCountry: '',
    oneWay: false,
    returnDate: '',
  };

  constructor(private productsPricedService: ProductsPricedService,
              private dataService: DataService,
              private router: Router) { }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this._destroyed.next();
    this._destroyed.complete();
  }

  onSubmit() {
    this.productsPricedService.getProducts(this.params)
      .pipe(takeUntil(this._destroyed))
      .subscribe((res) => {
        res.forEach((item) => {
          this.dataService.productsPriced.push(item);
          this.dataService.travelData = this.params;
      });
        this.router.navigate(['/pages/hepstar/products-list']);
    });
  }

}
