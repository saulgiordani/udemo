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
    this.delegateForm = new FormGroup({
      'sessionSubtype' : new FormControl('', Validators.required),
      'sessionId': new FormControl(null, [Validators.required, Validators.pattern("^[0-9]*$")]),
      'randomSessionId' : new FormControl(null, [Validators.required, Validators.pattern("^[0-9]*$")]),
      'userId' : new FormControl(null, [Validators.required, Validators.pattern("^[0-9]*$")]),
      'password' : new FormControl('', Validators.required)
    });
  }

}
