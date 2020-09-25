import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
enum TabSection{
  LoginTab, RegisterTab
}
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  private currentTab = TabSection.RegisterTab;

  constructor(private routeService : Router){ }
  ngOnInit(): void { }

  moveToLoginTab(){
    //this.routeService.navigateByUrl('login');
    this.currentTab = TabSection.LoginTab;
  }
  moveToRegisterTab(){
    //this.routeService.navigateByUrl('register');
    this.currentTab = TabSection.RegisterTab;
  }
  isLoginTab(){
    return this.currentTab == TabSection.LoginTab ? true : false;
  }
  isRegisterTab(){
    return this.currentTab == TabSection.RegisterTab ? true : false;
  }
}
