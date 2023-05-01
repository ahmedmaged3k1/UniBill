import { UserDataService } from 'src/app/shared/dataService/user-data.service';
import { Component, OnInit } from '@angular/core';
import { Bills } from 'src/app/models/Bills';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {
  bills :Bills[];
  userId :string;
  constructor(private userData : UserDataService, private route : ActivatedRoute){}
  ngOnInit(): void {
    this.route.params.subscribe(res=>{
      this.userId = res['id'];
      this.loadUserBills();
    })
  }


  loadUserBills() {
    this.userData.getUserBill(this.userId).subscribe(res=>{
      console.log(res);

    })
  }


}
