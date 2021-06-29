import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public configUrl = 'https://www.dmb.somee.com/api/dmb/';
  public IsApiConnected:any;
  public model:any = {};

  submitted = false;

  onSubmit() { this.submitted = true; }

  constructor(private http: HttpClient) {
     this.http.get(this.configUrl+'test').subscribe((data)=>{
          debugger;
          this.IsApiConnected = data['data'];
     });
   }

  ngOnInit(): void {

  }

  newAppoitment(){
    this.http.post(this.configUrl+'booking', this.model).subscribe(res=>{
      alert("Request Send Succssfully !");
      console.log(res);
    })
  }

}
