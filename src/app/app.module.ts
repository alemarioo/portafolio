import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeComponent } from './pages/me/me.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ClipboardModule} from '@angular/cdk/clipboard';
import { ToastrModule } from 'ngx-toastr';
import { SocialNetworksComponent } from './components/social-networks/social-networks.component';
import { BlobzComponent } from './components/blobz/blobz.component';
@NgModule({
  declarations: [
    AppComponent,
    MeComponent,
    NavbarComponent,
    SocialNetworksComponent,
    BlobzComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
