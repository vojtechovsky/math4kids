import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

import { CollapseModule } from 'ng2-bootstrap';

import {AppComponent} from './app.component';
import {MathComponent} from './math/math.component';
import {HomeComponent} from './home/home.component';
import { AboutComponent } from './about/about.component';

import { QRCodeModule } from 'angular2-qrcode';
import { KeypadComponent } from './shared/keypad/keypad.component';

@NgModule({
  declarations: [
    AppComponent,
    MathComponent,
    HomeComponent,
    AboutComponent,
    KeypadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CollapseModule,
    QRCodeModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: 'about', component: AboutComponent},
      {path: 'math/:id', component: MathComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: '**', redirectTo: 'home', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
