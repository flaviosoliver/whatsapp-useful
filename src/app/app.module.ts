import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './app-material.module';
import { NgxMatIntlTelInputComponent } from 'ngx-mat-intl-tel-input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SelectPlatformComponent } from './components/select-platform/select-platform.component';
import { FormNumberComponent } from './components/form-number/form-number.component';
import { SendToComponent } from './components/send-to/send-to.component';
import { ToForwardComponent } from './components/to-forward/to-forward.component';
import { DialogQrCodeComponent } from './components/dialog-qrcode/dialog-qrcode.component';
import { AccordionComponent } from './components/accordion/accordion.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SelectPlatformComponent,
    FormNumberComponent,
    SendToComponent,
    ToForwardComponent,
    DialogQrCodeComponent,
    AccordionComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgxMatIntlTelInputComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
