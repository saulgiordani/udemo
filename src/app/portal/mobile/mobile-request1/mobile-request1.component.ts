import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MobileService } from '../mobile.service';

@Component({
  selector: 'app-mobile-request1',
  templateUrl: './mobile-request1.component.html',
  styleUrls: ['./mobile-request1.component.css']
})
export class MobileRequest1Component implements OnInit {
  mobileRequestForm: FormGroup;

  constructor(private mobileService: MobileService) { }

  onSubmit() {
    this.mobileService.sendMobileRequestV1(this.mobileRequestForm.value);
  }

  onReset() {
    this.mobileRequestForm.reset();
  }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    let username: string;
    let password: string;
    let app: string = 'app';
    let appVersion: string = 'appVersion';
    let os: string = 'os';
    let osVersion: string = 'osVersion';
    let deviceId: string = 'deviceId';
    let deviceType: string = 'deviceType';

    this.mobileRequestForm = new FormGroup({
      'username' : new FormControl(username, Validators.required),
      'password' : new FormControl(password, Validators.required),
      'app' : new FormControl(app, Validators.required),
      'appVersion' : new FormControl(appVersion, Validators.required),
      'os' : new FormControl(os, Validators.required),
      'osVersion' : new FormControl(osVersion, Validators.required),
      'deviceId' : new FormControl(deviceId, Validators.required),
      'deviceType' : new FormControl(deviceType, Validators.required)
    });
  }

}
