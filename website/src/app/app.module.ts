import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { IntroComponent } from './intro/intro.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { GalleryListComponent } from './gallery-list/gallery-list.component';
import {APP_CONFIG, appConfigFactory} from "./app-config";
import { ModalComponent } from './shared/modal/modal.component';
import { NewsComponent } from './news/news.component';

@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        GalleryComponent,
        ContactComponent,
        IntroComponent,
        NavbarComponent,
        GalleryListComponent,
        ModalComponent,
        NewsComponent,
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        HttpClientModule,
        CommonModule,
        FormsModule
    ],
    providers: [
        { provide: APP_CONFIG, useFactory: appConfigFactory }
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }
