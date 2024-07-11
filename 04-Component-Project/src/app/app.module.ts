import { NgModule } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ServerStatusComponent } from './dashboard/server-status/server-status.component';
import { TrafficComponent } from './dashboard/traffic/traffic.component';
import { SupportTicketsComponent } from './dashboard/support-tickets/support-tickets.component';

@NgModule({
    declarations: [AppComponent, HeaderComponent, ServerStatusComponent, TrafficComponent, SupportTicketsComponent],
    imports: [BrowserModule],
    bootstrap: [AppComponent],
  })
  export class AppModule {
  
  }