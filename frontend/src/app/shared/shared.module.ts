import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const sharedModules = [
  HttpClientModule,
  CommonModule,
  BrowserAnimationsModule,
  MatButtonModule,
];
const sharedComponents = [];
const sharedProviders = [];
@NgModule({
  imports: [...sharedModules],
  exports: [...sharedModules, ...sharedComponents],
  declarations: [...sharedComponents],
  providers: [...sharedProviders],
})
export class SharedModule {
}
