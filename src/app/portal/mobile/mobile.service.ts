import { Injectable } from '@angular/core';

@Injectable()
export class MobileService {

  constructor() { }

  sendMobileRequestV1(mobileRequest: any) {
    console.log("send request: " + mobileRequest);
  }

  sendMobileRequestV3(mobileRequest: any) {
    console.log(mobileRequest);
  }

  submitActivationRequest() {

  }

  submitLoginRequest() {

  }

  lookupcertificate() {

  }

  submitRequest() {

  }

  parseRequest() {
    
  }

}
