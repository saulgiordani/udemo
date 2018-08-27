import { NgModule } from "@angular/core";
import { DelegateAuthenticationComponent } from "./delegate-authentication/delegate-authentication.component";
import { EmergencyFacadeComponent } from "./emergency-facade/emergency-facade.component";
import { RegexpComponent } from "./regexp/regexp.component";
import { SharedModule } from "../../shared/shared.module";
import { ToolService } from "./tool.service";

@NgModule({
    declarations: [
        DelegateAuthenticationComponent,
        EmergencyFacadeComponent,
        RegexpComponent
    ],
    imports: [
        SharedModule
    ], 
    providers: [
        ToolService
    ]
})

export class ToolModule {}