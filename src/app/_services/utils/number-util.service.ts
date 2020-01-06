import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberUtilService {

  constructor() { }

  decimalFormatter(params) {
    return params.value.toFixed(2);
  }

}
