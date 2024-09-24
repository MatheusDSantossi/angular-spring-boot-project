import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { provideHttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';

@NgModule({
    declarations: [
        AppComponent,
        MainComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [provideHttpClient()],
    bootstrap: [AppComponent]
})

export class AppModule { }

