import { NgModule } from "@angular/core";
import { MobileRequest1Component } from "./mobile-request1/mobile-request1.component";
import { MobileRequest3Component } from "./mobile-request3/mobile-request3.component";
import { MobileUserComponent } from "./mobile-user/mobile-user.component";
import { SharedModule } from "../../shared/shared.module";
import { MobileService } from "./mobile.service";

@NgModule({
    declarations: [
        MobileRequest1Component,
        MobileRequest3Component,
        MobileUserComponent
    ],
    imports: [
        SharedModule
    ],
    providers: [
        MobileService
    ]
})

export class MobileModule{}