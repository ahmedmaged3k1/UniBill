import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css']
})
export class PasswordResetComponent implements OnInit {
  password : string

  constructor(private auth : AuthService , private route :Router){

  }
ngOnInit(): void {
    
}resetPassword(){
  this.auth.resetPassword(this.password);
  alert("changed success");
  this.route.navigate(['/Dash-Board'])

}
}
