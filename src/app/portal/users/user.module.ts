import { NgModule } from '@angular/core';

import { UsersComponent } from './users.component';
import { SharedModule } from '../../shared/shared.module';
import { UserService } from './user.service';

@NgModule({
    declarations: [
        UsersComponent
    ],
    imports: [
        SharedModule
    ],
    providers: [
        UserService
    ]
})
export class UserModule {}