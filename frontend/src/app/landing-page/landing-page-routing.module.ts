import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageIntroductionComponent } from '@app/landing-page/landing-page-introduction/landing-page-introduction.component';
import { LandingPageRegisterComponent } from '@app/landing-page/landing-page-register/landing-page-register.component';
import { LandingPageLoginComponent } from '@app/landing-page/landing-page-login/landing-page-login.component';
import { LandingPageWrapperComponent } from '@app/landing-page/landing-page-wrapper/landing-page-wrapper.component';
const appRoutes: Routes = [
  {
    path: '',
    component: LandingPageWrapperComponent,
    children: [
      {
        path: '',
        component: LandingPageIntroductionComponent,
      },
      {
        path: 'register',
        component: LandingPageRegisterComponent,
      },
      {
        path: 'login',
        component: LandingPageLoginComponent,
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes),
  ],
  providers: [],
  exports: [
    RouterModule,
  ],
})
export class LandingPageRoutingModule {
}
