import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Service } from 'src/Service';
import { ServiceAction } from 'src/ServiceAction';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  sid: any;
  readonly url = 'http://127.0.0.1:3000';
  service: Observable<Service>;
  serviceAction: Observable<ServiceAction>;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.sid = params.get("sid");
    });
    this.getService();
    this.getAction();
  }

  getService() {
    const url: string = this.url + '/services' + '?sid=' + this.sid;

    console.log('[Service] Make request to: ' + url);
    this.service = this.http.get<Service>(url);
  }

  getAction() {
    const url: string = this.url + '/services' + '?sid=' + this.sid;

    console.log('[Service] Make request to: ' + url);
    this.serviceAction = this.http.get<ServiceAction>(url);
  }

}
