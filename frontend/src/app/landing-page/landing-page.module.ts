import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageRoutingModule } from '@app/landing-page/landing-page-routing.module';
import { LandingPageIntroductionComponent } from './landing-page-introduction/landing-page-introduction.component';
import { LandingPageRegisterComponent } from './landing-page-register/landing-page-register.component';
import { LandingPageLoginComponent } from './landing-page-login/landing-page-login.component';
import { SharedModule } from '@app/shared/shared.module';
import { LandingPageWrapperComponent } from './landing-page-wrapper/landing-page-wrapper.component';
import { CoreModule } from '@app/core';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    LandingPageRoutingModule,
  ],
  declarations: [
    LandingPageIntroductionComponent,
    LandingPageRegisterComponent,
    LandingPageLoginComponent,
    LandingPageWrapperComponent,
  ],
})
export class LandingPageModule {
}
