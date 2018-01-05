import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }
data=[{"questions":"'1'===1","choice":["true","false"],"type":"radio"},
{"questions":"which keywords used to declare variable in javascript","choice":false,"type":"text"}
];
getData(){
  return this.data;
}


}
