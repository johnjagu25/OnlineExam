import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms"

import { AppComponent } from './app.component';
import { DescriptionComponent } from './component/description/description.component';
import {Routes,RouterModule} from "@angular/router";
import { QuestionpageComponent } from './component/questionpage/questionpage.component';
import { EndpageComponent } from './component/endpage/endpage.component'

import {DataService} from './service/data.service';
import {ValidationService} from './service/validation.service';

const routeConfig:Routes =[{
  "path":"login","component":DescriptionComponent},{
  "path":"question","component":QuestionpageComponent
  },{
  "path":"end","component":EndpageComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    DescriptionComponent,
    QuestionpageComponent,
    EndpageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routeConfig)
  ],
  providers: [DataService,ValidationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
