import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-service-add',
  templateUrl: './service-add.component.html',
  styleUrls: ['./service-add.component.scss']
})
export class ServiceAddComponent implements OnInit {

  template: FormGroup;
  scedule: FormGroup;
  public doScedule = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.template = this.formBuilder.group({
      templateControl: ['', Validators.required]
    });
    this.scedule = this.formBuilder.group({
      sceduleControl: ['', Validators.required]
    });
  }

  toggleScedule(event) {
    if (this.doScedule) {
      this.doScedule = false;
    } else {
      this.doScedule = true;
    }
  }
}
