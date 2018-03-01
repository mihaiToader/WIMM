import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '@app/core';

@Component({
  selector: 'app-landing-page-register',
  templateUrl: './landing-page-register.component.html',
  styleUrls: ['./landing-page-register.component.css'],
})
export class LandingPageRegisterComponent implements OnInit {

  error: boolean;
  success: boolean;
  statusMessage:string = 'Loading data please wait';
  model: any = {};
  constructor(private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
  }

  sendRegister() {
    console.log(this.model);
    this.authenticationService.register({
      username: this.model.username,
      email:this.model.email,
      password: this.model.password,
      confirmPassword: this.model.confirmPassword
    })
      .then((res) =>
      {
        console.log(res);
        this.success = true;
        this.error = false;
        this.statusMessage='Register with success!!!';
      })
      .catch((err) => {
        this.success = false;
        this.error = true;
       this.statusMessage='Username or email already exists!';
        console.log(err);
      })


  }

}
