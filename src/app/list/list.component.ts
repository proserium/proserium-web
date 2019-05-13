import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Service } from './../../Service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  readonly url = 'http://127.0.0.1:3000';
  services: Observable<any>;


  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getServices();
  }

  getServices() {
    this.services = this.http.get(this.url + '/services')
  }


}
