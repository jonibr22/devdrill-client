import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material.module';
import { throwIfAlreadyLoaded } from './module-import.guard';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../shared/shared.module';
import { ContentWrapperComponent } from './components/content-wrapper/content-wrapper.component';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    ContentWrapperComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    FontAwesomeModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    ContentWrapperComponent
  ]
})
export class CoreModule { 
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
