import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NotificationEnum } from '@app/core/enums/notification.enum';
import { AuthenticationService } from '@app/core/services/authentication.service';
import { NotificationService } from '@app/core/services/notification.service';
import { User } from '@app/models/user.model';
import { first } from 'rxjs/operators';
import { RegisterSuccessDialog } from './register-success/register-success.dialog';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm : FormGroup;
  submitted = false;
  loading = false;
  error = '';

  constructor(
    private router : Router,
    private formBuilder : FormBuilder,
    private authenticationService: AuthenticationService,
    private notification : NotificationService,
    private dialog : MatDialog
  ) { }

  ngOnInit(){
    this.registerForm = this.formBuilder.group({
      name: ['',Validators.required],
      email: ['',Validators.required],
      password: ['',Validators.required],
      confirmPassword: ['',Validators.required],
      phone: ['',Validators.required],
      agreement: [false]
    });
  }

  get f(){return this.registerForm.controls;}

  openSuccessDialog() {
    const dialogRef = this.dialog.open(RegisterSuccessDialog);

    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate(['auth/login'])
    });
  }

  onSubmit(){
    this.submitted=true;
    if(this.registerForm.invalid){
      return;
    }
    if(this.f.password.value != this.f.confirmPassword.value){
      this.notification.notify("Password Confirmation does not match",NotificationEnum.Error);
      return;
    }
    if(this.f.agreement.value == false){
      this.notification.notify("Please accept the Terms of Service and Privacy Policy",NotificationEnum.Error);
      return;
    }
    this.loading=true;

    let user = new User;
    user.email = this.f.email.value;
    user.name = this.f.name.value;
    user.password = this.f.password.value;
    user.phone = this.f.phone.value;

    this.authenticationService.register(user)
      .subscribe(
          data => {
              this.openSuccessDialog();
          },
          error => {
              this.error = error;
              this.loading = false;
              this.notification.notify(error,NotificationEnum.Error);
          });
  }
  switchToLogin(){
    this.router.navigateByUrl('/auth/login');
  }
}
