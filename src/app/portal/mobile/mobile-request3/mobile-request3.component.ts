import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MobileService } from '../mobile.service';

@Component({
  selector: 'app-mobile-request3',
  templateUrl: './mobile-request3.component.html',
  styleUrls: ['./mobile-request3.component.css']
})
export class MobileRequest3Component implements OnInit {
  activationRequestForm: FormGroup;
  loginRequestForm: FormGroup;
  requestXMLForm: FormGroup;
  languages: string[] = ['ENG', 'FRA', 'GER', 'ITA'];
  responseXML: string;
  errors: string[] = ['err1', 'err2'];

  constructor(private mobileService: MobileService) { }

  onSubmitActivationRequest() {
    console.log(this.activationRequestForm.value);
    this.mobileService.submitActivationRequest();
  }

  onResetActivationRequest() {
    this.activationRequestForm.reset();
  }

  onSubmitLoginRequest() {
    console.log(this.loginRequestForm.value);
    this.mobileService.submitLoginRequest();
  }

  onLookupCertificate() {
    this.mobileService.lookupcertificate();
  }

  onResetLoginRequest() {
    this.loginRequestForm.reset();
  }

  generateIdActivationReq() {
    this.activationRequestForm.get('deviceId').setValue(123);
  }

  generatePublickKey() {
    this.activationRequestForm.get('publicKey').setValue('asd123');
  }

  generateIdLoginReq() {
    this.loginRequestForm.get('deviceId').setValue(123);
  }

  onSubmitRequest() {
    console.log(this.requestXMLForm.value);
    this.mobileService.submitRequest();
  }

  onParseRequest() {
    this.mobileService.parseRequest();
  }

  onResetRequestForm() {
    this.requestXMLForm.reset();
  }

  ngOnInit() {
    this.initActivationReqForm();
    this.initLoginReqForm();
    this.initRequestXMLForm();
  }

  private initActivationReqForm() {
    this.activationRequestForm = new FormGroup({
      'securityLevel': new FormControl('securityLevel', Validators.required),
      'os': new FormControl('os', Validators.required),
      'osVersion': new FormControl('osVersion', Validators.required),
      'deviceId': new FormControl('deviceId', Validators.required),
      'deviceType': new FormControl('deviceType', Validators.required),
      'deviceBrand': new FormControl('deviceBrand', Validators.required),
      'appName': new FormControl('appName', Validators.required),
      'appVersion': new FormControl('appVersion', Validators.required),
      'username': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required),
      'activationCode': new FormControl('', Validators.required),
      'publicKey': new FormControl('', Validators.required),
      'language': new FormControl('', Validators.required)
    });
  }

  private initLoginReqForm() {
    this.loginRequestForm = new FormGroup({
      'securityLevel': new FormControl('securityLevel', Validators.required),
      'os': new FormControl('os', Validators.required),
      'osVersion': new FormControl('osVersion', Validators.required),
      'deviceId': new FormControl('deviceId', Validators.required),
      'deviceType': new FormControl('deviceType', Validators.required),
      'deviceBrand': new FormControl('deviceBrand', Validators.required),
      'appName': new FormControl('appName', Validators.required),
      'appVersion': new FormControl('appVersion', Validators.required),
      'username': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required),
      'language': new FormControl('', Validators.required)
    });
  }

  private initRequestXMLForm() {
    this.requestXMLForm = new FormGroup({
      'certificate': new FormControl('', Validators.required),
      'requestXML': new FormControl('', Validators.required)
    });
  }

}
