import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { NotificationService } from '@app/core/services/notification.service';
import { RegisterSuccessDialog } from './register/register-success/register-success.dialog';


@NgModule({
  declarations: [AuthComponent, LoginComponent, RegisterComponent, RegisterSuccessDialog],
  imports: [
    FormsModule,
    CommonModule,
    MaterialModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { 

}

