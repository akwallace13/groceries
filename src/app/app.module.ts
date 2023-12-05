import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { IonicStorageModule } from '@ionic/storage-angular';
import { Share } from '@capacitor/share';
import { EmailComposer } from '@awesome-cordova-plugins/email-composer/ngx';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Drivers } from '@ionic/storage';
import * as CordovaSQLiteDriver from 'localforage-cordovasqlitedriver';

@NgModule({
  declarations: [AppComponent],
  //entryComponents: [];
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    IonicStorageModule.forRoot({
      driverOrder: [
        CordovaSQLiteDriver._driver,
        Drivers.IndexedDB,
        Drivers.LocalStorage
      ],
    }),
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, EmailComposer, HttpClient, HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
