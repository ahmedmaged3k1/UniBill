import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CardComponent } from './shared/card/card.component';
import { TableComponent } from './shared/table/table.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { ElectricityInvoiceComponent } from './electricity-invoice/electricity-invoice.component';
import { InvoiceComponent } from './shared/invoice/invoice.component';
import { PaymentComponent } from './shared/payment/payment.component';
import { ErrorComponent } from './error/error.component';
import { TelephoneBillComponent } from './telephone-bill/telephone-bill.component';
import { TelephoneCardComponent } from './shared/telephone-card/telephone-card.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'card', component: CardComponent },
  { path: 'table', component: TableComponent },
  { path: 'Nav-Bar', component: NavBarComponent },
  { path: 'Dash-Board', component: DashBoardComponent },
  { path: 'Dash-Board/:id', component: DashBoardComponent },
  { path: 'ElectricityInvoice', component: ElectricityInvoiceComponent },
  { path: 'Invoice', component: InvoiceComponent },
  { path: 'Payment', component: PaymentComponent },
  { path: '404', component: ErrorComponent },
  { path: 'Telephone-Bill', component: TelephoneBillComponent },
  { path: 'Telephone-Card', component: TelephoneCardComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
