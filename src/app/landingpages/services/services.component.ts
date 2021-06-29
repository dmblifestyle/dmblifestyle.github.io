import { Component, OnInit } from '@angular/core';
import {treatments} from "../services/servicesdata.json";
import { FormControl } from '@angular/forms';

import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  public data: any;

  public configUrl = 'https://www.dmb.somee.com/api/dmb/';
  constructor(private http: HttpClient) {
    this.http.get(this.configUrl+'services').subscribe((data)=>{
      debugger;
      this.data = data['data'];
 });
   }

  ngOnInit(): void {

  }

}
