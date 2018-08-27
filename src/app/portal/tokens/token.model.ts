export class Token {
    constructor(
        public id: number,
        public tokenType: TokenType,
        public tokenTypeState: TokenTypeState,
        public creationDate: Date,
        public expirationDate: Date
    ) {}
}

export enum TokenType {
    GRIDCARD, CAP_DEDICATED_SMARTCARD, SMS_OUT, SMS_IN, GRIDCARD_MONITOR, PKI, KEYFILE, PKI_CHALLENGED, ZTAN, BASIC_AUTH, OPTICAL_TAN, EZIO_MOBILE, GCL_PKI, LUXTRUST_SIGNING_SERVER
}

export namespace TokenType {

    export function values() {
      return Object.keys(TokenType).filter(
        (type) => isNaN(<any>type) && type !== 'values'
      );
    }
}

export enum TokenTypeState {
    INITIAL, ACTIVE, BLOCKED, CANCELLED, EXPIRED
}

export namespace TokenTypeState {

    export function values() {
      return Object.keys(TokenTypeState).filter(
        (type) => isNaN(<any>type) && type !== 'values'
      );
    }
}