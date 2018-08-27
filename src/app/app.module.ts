import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { HomeComponent } from './core/home/home.component';
import { MobileRequest1Component } from './portal/mobile/mobile-request1/mobile-request1.component';
import { MobileRequest3Component } from './portal/mobile/mobile-request3/mobile-request3.component';
import { MobileUserComponent } from './portal/mobile/mobile-user/mobile-user.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { UserModule } from './portal/users/user.module';
import { TokenModule } from './portal/tokens/token.module';
import { ToolModule } from './portal/tools/tool.module';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    MobileRequest1Component,
    MobileRequest3Component,
    MobileUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    UserModule,
    TokenModule, 
    ToolModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
