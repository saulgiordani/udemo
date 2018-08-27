import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToolService } from '../tool.service';

@Component({
  selector: 'app-delegate-authentication',
  templateUrl: './delegate-authentication.component.html',
  styleUrls: ['./delegate-authentication.component.css']
})
export class DelegateAuthenticationComponent implements OnInit {
  delegateForm: FormGroup;
  sessionSubtypes: string[] = ["BCV_MOBILE"];

  constructor(private toolService: ToolService) { }

  onSubmit() {
    this.toolService.submitDelegate(this.delegateForm.value);
  }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    let sessionSubtype: string = '';
    let sessionId: number;
    let randomSessionId: number;
    let userId: number;
    let password: string = '';

    this.delegateForm = new FormGroup({
      'sessionSubtype' : new FormControl(sessionSubtype, Validators.required),
      'sessionId': new FormControl(sessionId, [Validators.required, Validators.pattern("^[0-9]*$")]),
      'randomSessionId' : new FormControl(randomSessionId, [Validators.required, Validators.pattern("^[0-9]*$")]),
      'userId' : new FormControl(userId, [Validators.required, Validators.pattern("^[0-9]*$")]),
      'password' : new FormControl(password, Validators.required)
    });
  }

}
