import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PendingBillsComponent } from './shared/pending-bills/pending-bills.component';
import { CardComponent } from './shared/card/card.component';
import { TableComponent } from './shared/table/table.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import {AngularFireModule} from '@angular/fire/compat'
import { enviroment } from './enviroments/enviroments';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    PendingBillsComponent,
    CardComponent,
    TableComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(enviroment.firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
