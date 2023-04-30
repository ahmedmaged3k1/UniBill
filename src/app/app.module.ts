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
import { DashBoardComponent } from './dash-board/dash-board.component';
import { SearchBarComponent } from './shared/search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';
import { ElectricityInvoiceComponent } from './electricity-invoice/electricity-invoice.component';
import { InvoiceComponent } from './shared/invoice/invoice.component';
import { PaymentComponent } from './shared/payment/payment.component';
import { ErrorComponent } from './error/error.component';
import { TelephoneBillComponent } from './telephone-bill/telephone-bill.component';
import { TelephoneCardComponent } from './shared/telephone-card/telephone-card.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './Admin/admin-dashboard/admin-dashboard.component';
import { UsersTableComponent } from './Admin/users-table/users-table.component';
import { AddBillComponent } from './Admin/add-bill/add-bill.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    PendingBillsComponent,
    CardComponent,
    TableComponent,
    NavBarComponent,
    DashBoardComponent,
    SearchBarComponent,
    ElectricityInvoiceComponent,
    InvoiceComponent,
    PaymentComponent,
    ErrorComponent,
    TelephoneBillComponent,
    TelephoneCardComponent,
    AdminDashboardComponent,
    UsersTableComponent,
    AddBillComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(enviroment.firebaseConfig),
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
