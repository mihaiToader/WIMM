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

  constructor(private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
  }

  sendRegister() {
    this.authenticationService.register({
      username: 'mihai1',
      password: '12345678',
      confirmPassword: '12345678',
    })
      .then((res) => {
        console.log(res);
        this.success = true;
        this.error = false;
      })
      .catch((err) => {
        this.success = false;
        this.error = true;
        console.log(err)
      })
  }

}
