import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { UsersComponent } from './portal/users/users.component';
import { TokenOperationsComponent } from './portal/tokens/token-operations/token-operations.component';
import { ReaderUpdateComponent } from './portal/tokens/reader-update/reader-update.component';
import { DelegateAuthenticationComponent } from './portal/tools/delegate-authentication/delegate-authentication.component';
import { EmergencyFacadeComponent } from './portal/tools/emergency-facade/emergency-facade.component';
import { RegexpComponent } from './portal/tools/regexp/regexp.component';
import { MobileRequest1Component } from './portal/mobile/mobile-request1/mobile-request1.component';
import { MobileRequest3Component } from './portal/mobile/mobile-request3/mobile-request3.component';
import { MobileUserComponent } from './portal/mobile/mobile-user/mobile-user.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'users', component: UsersComponent },
    { path: 'token-operations', component: TokenOperationsComponent },
    { path: 'reader-update', component: ReaderUpdateComponent },
    { path: 'delegate-authentication', component: DelegateAuthenticationComponent },
    { path: 'emergency-facade', component: EmergencyFacadeComponent },
    { path: 'regexp', component: RegexpComponent },
    { path: 'mobile-request-1', component: MobileRequest1Component },
    { path: 'mobile-request-3', component: MobileRequest3Component },
    { path: 'mobile-user', component: MobileUserComponent }
]

@NgModule({
    imports: [
      RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
  })
  export class AppRoutingModule {
  
  }