import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { TokenOperationsComponent } from './token-operations/token-operations.component';
import { TokenService } from './token.service';
import { ReaderUpdateComponent } from './reader-update/reader-update.component';

@NgModule({
    declarations: [
        TokenOperationsComponent,
        ReaderUpdateComponent
    ],
    imports: [
        SharedModule
    ],
    providers: [
        TokenService
    ]
})
export class TokenModule {}