import { Component, OnInit } from '@angular/core';
import { Reader } from './reader.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TokenService } from '../token.service';

@Component({
  selector: 'app-reader-update',
  templateUrl: './reader-update.component.html',
  styleUrls: ['./reader-update.component.css']
})
export class ReaderUpdateComponent implements OnInit {
  reader: Reader;
  readerForm: FormGroup;

  constructor(private tokenService: TokenService) { }

  onLoad() {
    this.reader = this.tokenService.loadReader(+this.readerForm.value['id']);
    this.readerForm.setValue(this.reader);
  }

  onSave() {
    this.tokenService.saveReader(this.readerForm.value);
  }

  onReset() {
    this.readerForm.reset();
    this.reader = null;
  }

  onDelete() {
    this.tokenService.deleteReader(this.reader.id);
    this.onReset();
  }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.readerForm = new FormGroup({
      'id': new FormControl({value: null, disabled: this.reader != null}, [Validators.required, Validators.pattern("^[0-9]*$")]),
      'validFrom': new FormControl(null, Validators.required),
      'validTo': new FormControl(null, Validators.required),
      'isActive': new FormControl(false, Validators.required)
    });
  }

}
