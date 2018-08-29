import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToolService } from '../tool.service';

@Component({
  selector: 'app-regexp',
  templateUrl: './regexp.component.html',
  styleUrls: ['./regexp.component.css']
})
export class RegexpComponent implements OnInit {
  regexpForm: FormGroup;

  constructor(private toolService: ToolService) { }

  onSubmit() {
    this.toolService.testRegexp(this.regexpForm.value['regex'], this.regexpForm.value['textVal']);
  }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.regexpForm = new FormGroup({
      'regex' : new FormControl('', Validators.required),
      'textVal' : new FormControl('', Validators.required)
    })
  }

}
