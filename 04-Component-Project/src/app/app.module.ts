import { NgModule } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ServerStatusComponent } from './server-status/server-status.component';
import { TrafficComponent } from './traffic/traffic.component';
import { SupportTicketsComponent } from './support-tickets/support-tickets.component';

@NgModule({
    declarations: [AppComponent, HeaderComponent, ServerStatusComponent, TrafficComponent, SupportTicketsComponent],
    imports: [BrowserModule],
    bootstrap: [AppComponent],
  })
  export class AppModule {
  
  }