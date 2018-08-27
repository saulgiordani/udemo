import { Injectable } from '@angular/core';
import { Delegate } from './delegate-authentication/delegate.model';

@Injectable()
export class ToolService {

  constructor() { }

  submitDelegate(delegate: Delegate) {
    console.log(delegate);
  }
}
