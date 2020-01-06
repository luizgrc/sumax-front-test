import { Injectable } from '@angular/core';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root',
})


export class DateUtilService {

  constructor() { }

  dateFormatter(params){
    return formatDate(params.value, 'dd-MM-yyyy', "en-US");
  }
}
