import { Component, OnInit } from '@angular/core';
import {DataService} from "./../../service/data.service";
@Component({
  selector: 'app-questionpage',
  templateUrl: './questionpage.component.html',
  styleUrls: ['./questionpage.component.css']
})
export class QuestionpageComponent implements OnInit {
displayData;
disp;
currentQues=1;
  constructor(private ds:DataService) { }

  ngOnInit() {
this.displayData=this.ds.getData();
this.disp=this.displayData[0];
console.log(this.displayData)
  }

  callQuestions(no){
    this.disp=this.displayData[no];
    this.currentQues=no+1;
  }

}
