/*
 * service-add.component.ts
 *
 * Copyright by proserium, all rights reserved.
 * MIT License: https://mit-license.org
 */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-service-add',
  templateUrl: './service-add.component.html',
  styleUrls: ['./service-add.component.scss']
})
export class ServiceAddComponent implements OnInit {

  template: FormGroup;
  scedule: FormGroup;
  doScedule = false;

  serviceName: String;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.template = this.formBuilder.group({
      name: ['apa', Validators.required]
    });
    this.scedule = this.formBuilder.group({
      scedule: ['', Validators.nullValidator]
    });

    /*this.template.valueChanges.subscribe( data => {
      console.log(data);
    });*/
  }

  toggleScedule(event): void {
    if (this.doScedule) {
      this.doScedule = false;
    } else {
      this.doScedule = true;
    }
  }

  search() {
    console.log('search: ' + this.template.get('name').value);
  }

}
