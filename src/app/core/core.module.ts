import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../shared/shared.module';
import { ContentWrapperComponent } from './components/content-wrapper/content-wrapper.component';
import { HttpClientModule } from '@angular/common/http';
import { RootInjectorGuard } from './guards/root-injector.guard';
import { RouterModule } from '@angular/router';
import { PageNotfoundComponent } from './components/page-notfound/page-notfound.component'


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    ContentWrapperComponent,
    PageNotfoundComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    FontAwesomeModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    ContentWrapperComponent
  ]
})
export class CoreModule extends RootInjectorGuard{ 
  constructor() {
    super(CoreModule);
  }
}
