import { Component, OnInit } from '@angular/core';
import { AuthTabSection } from '../../core/enums/enum-auth-tabsection';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  private currentTab = AuthTabSection.LoginTab;

  constructor(){ }
  ngOnInit(): void { }

  moveToLoginTab(){
    this.currentTab = AuthTabSection.LoginTab;
  }
  moveToRegisterTab(){
    this.currentTab = AuthTabSection.RegisterTab;
  }
  isLoginTab(){
    return this.currentTab == AuthTabSection.LoginTab ? true : false;
  }
  isRegisterTab(){
    return this.currentTab == AuthTabSection.RegisterTab ? true : false;
  }
}
