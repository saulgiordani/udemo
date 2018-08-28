import { Injectable } from '@angular/core';
import { Delegate } from './delegate-authentication/delegate.model';

@Injectable()
export class ToolService {

  constructor() { }

  submitDelegate(delegate: Delegate) {
    console.log(delegate);
  }

  signObject(id: number, type: string) {
    console.log("object id: " + id + ", type: " + type);
  }

  signObjects(type: string) {
    console.log("object type: " + type);
  }

  testRegexp(regex: string, text: string) {
    console.log("regexp: " + regex + ", text: " + text);
  }
}
