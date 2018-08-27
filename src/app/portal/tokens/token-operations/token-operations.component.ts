import { Component, OnInit } from '@angular/core';
import { Token, TokenTypeState, TokenType } from '../token.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TokenService } from '../token.service';

@Component({
  selector: 'app-token-operations',
  templateUrl: './token-operations.component.html',
  styleUrls: ['./token-operations.component.css']
})
export class TokenOperationsComponent implements OnInit {
  token: Token;
  tokenType = TokenType;
  tokenTypeState = TokenTypeState;
  tokenForm: FormGroup;

  constructor(private tokenService: TokenService) { }

  onLoad() {
    this.token = this.tokenService.loadToken(+this.tokenForm.value['id']);
    this.tokenForm.setValue(this.token);
  }

  onSave() {
    this.tokenService.saveToken(this.tokenForm.value);
    console.log(this.tokenForm.value);
  }

  onSign() {
    this.tokenService.signToken(this.tokenForm.value);
  }

  onReset() {
    this.tokenForm.reset();
    this.token = null;
  }

  onDelete() {
    this.tokenService.deleteToken(this.token.id);
    this.onReset();
  }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    let id = '';
    let tokenType: TokenType;
    let tokenTypeState: TokenTypeState;
    let creationDate: Date;
    let expirationDate: Date;

    this.tokenForm = new FormGroup({
      'id': new FormControl(id, [Validators.required, Validators.pattern("^[0-9]*$")]),
      'tokenType': new FormControl({value: tokenType, disabled: true}),
      'tokenTypeState': new FormControl(tokenTypeState),
      'creationDate': new FormControl(creationDate),
      'expirationDate': new FormControl(expirationDate)
    });
  }

}
