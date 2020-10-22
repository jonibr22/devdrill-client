import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {
  faBars,
  faBiking,
  faSearch
} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faMediumM,
  faTwitter,
  faInstagram,
  faFacebook
} from '@fortawesome/free-brands-svg-icons';

import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    FontAwesomeModule,
    FlexLayoutModule
  ],
  exports: [
    MaterialModule,
    FontAwesomeModule,
    FlexLayoutModule,
    NgbModule
  ]
})
export class SharedModule { 
  constructor(library:FaIconLibrary){
    library.addIcons(
      faBars,
      faGithub,
      faMediumM,
      faTwitter,
      faInstagram,
      faFacebook,
      faBiking,
      faSearch
    );
  }
}
