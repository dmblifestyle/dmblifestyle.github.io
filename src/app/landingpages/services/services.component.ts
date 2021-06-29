import { Component, OnInit } from '@angular/core';
import {treatments} from "../services/servicesdata.json";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  public data = treatments;
  constructor() { }

  ngOnInit(): void {

  }

}
