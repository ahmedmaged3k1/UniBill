import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CardComponent } from './shared/card/card.component';
import { TableComponent } from './shared/table/table.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { TelephoneBillComponent } from './telephone-bill/telephone-bill.component';
import { TelephoneCardComponent } from './shared/telephone-card/telephone-card.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'card', component: CardComponent },
  { path: 'table', component: TableComponent },
  { path: 'NavBar', component: NavBarComponent },
  { path: 'DashBoard', component: DashBoardComponent },
  { path: 'Telephone-Bill', component: TelephoneBillComponent },
  { path: 'Telephone-Card', component: TelephoneCardComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
