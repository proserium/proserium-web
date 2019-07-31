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
  doScedule: boolean = true;

  serviceName: String;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.template = this.formBuilder.group({
      template: ['', Validators.required],
      name: ['', Validators.required]
    });
    this.scedule = this.formBuilder.group({
      scedule: ['', Validators.required]
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
}
