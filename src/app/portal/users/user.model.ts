export class User {
    constructor(
        public id: number,
        public password: string,
        public creationDate: Date,
        public cancellationDate: Date,
        public lastActivityDate: Date,
        public userState: UserStateType
    ) {}
}

export enum UserStateType {
    INITIAL, ACTIVE, BLOCK, CANCELLED
}

export namespace UserStateType {

    export function values() {
      return Object.keys(UserStateType).filter(
        (type) => isNaN(<any>type) && type !== 'values'
      );
    }
}