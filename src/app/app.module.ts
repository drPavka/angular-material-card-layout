import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {LayoutComponent} from './layout/layout.component';
import {AppRoutingModule} from './app-routing.module';
import {FormComponent} from './form/form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BackendInterceptor} from './backend.interceptor';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { SecondComponent } from './second/second.component';

@NgModule({
    declarations: [
        AppComponent,
        LayoutComponent,
        FormComponent,
        SecondComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        NoopAnimationsModule,
        RouterModule,
        MatCardModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatButtonModule,
        MatDividerModule
    ],
    providers: [{
        provide: HTTP_INTERCEPTORS, useClass: BackendInterceptor, multi: true
    }],
    bootstrap: [AppComponent]
})
export class AppModule {
}
