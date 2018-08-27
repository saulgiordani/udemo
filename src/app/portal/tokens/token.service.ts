import { Injectable } from '@angular/core';
import { Token, TokenType, TokenTypeState } from './token.model';
import { Reader } from './reader-update/reader.model';

@Injectable()
export class TokenService {

  private tokens = [new Token(123, TokenType.GRIDCARD, TokenTypeState.ACTIVE, new Date(), new Date())];
  private readers = [new Reader(123, new Date(), new Date, true)];

  constructor() { }

  loadToken(tokenId: number): Token {
    return this.tokens[0];
  }

  saveToken(token: Token) {
    this.tokens.splice(0, 1, token);
  }

  signToken(token: Token) {
    console.log("sign token: " + token);
  }

  deleteToken(tokenId: number) {
    this.tokens.splice(0, 1);
  }

  loadReader(readerId: number) {
    return this.readers[0];
  }

  saveReader(reader: Reader) {
    this.readers.splice(0, 1, reader);
  }

  deleteReader(readerId: number) {
    this.readers.splice(0, 1);
  }

}
