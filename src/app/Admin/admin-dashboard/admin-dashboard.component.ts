import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserDataService } from 'src/app/shared/dataService/user-data.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  users : User[];

  constructor(private userService : UserDataService){}

  ngOnInit(): void {
    this.loadUser()
  }

  loadUser (){
    this.userService.getUsers().subscribe(res=>{
  

      this.users = res.documents.map(users=>{
      let user;

      user = {
        name : users.fields.name.stringValue,
        phoneNumber:users.fields.phoneNumber.stringValue,
        email :users.fields.email.stringValue ,
      }
      user.id = users.name.split('/').pop();

      return user

      })

    })
  }

}
