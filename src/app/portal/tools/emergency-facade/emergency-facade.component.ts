import { Component, OnInit } from '@angular/core';
import { ToolService } from '../tool.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-emergency-facade',
  templateUrl: './emergency-facade.component.html',
  styleUrls: ['./emergency-facade.component.css']
})
export class EmergencyFacadeComponent implements OnInit {
  objectTypes: string[] = ['AdminEvent', 'ArchivedAudit', 'ArchivedSession', 'Audit', 'CapOrderfile'];
  signObjectForm: FormGroup;
  signObjectsForm: FormGroup;

  constructor(private toolService: ToolService) { }

  onSubmitSignObjectForm() {
    this.toolService.signObject(this.signObjectForm.value['objectId'], this.signObjectForm.value['objectType']);
  }

  onSubmitSignObjectsForm() {
    this.toolService.signObjects(this.signObjectsForm.value['objectType']);
  }

  ngOnInit() {
    this.initObjectForm();
    this.initObjectsForm();
  }

  private initObjectForm() {
    this.signObjectForm = new FormGroup({
      'objectId': new FormControl(null, Validators.required),
      'objectType': new FormControl('', Validators.required)
    });
  }

  private initObjectsForm() {
    this.signObjectsForm = new FormGroup({
      'objectType': new FormControl('', Validators.required)
    });
  }

}
