import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificationEnum } from '@app/core/enums/notification.enum';
import { AuthenticationService } from '@app/core/services/authentication.service';
import { NotificationService } from '@app/core/services/notification.service';
import { Thread } from '@app/models/thread.model';
import { User } from '@app/models/user.model';
import { ThreadService } from '@app/services/thread.service';

@Component({
  selector: 'app-thread-form',
  templateUrl: './thread-form.component.html',
  styleUrls: ['./thread-form.component.scss'],
  providers: [ThreadService]
})
export class ThreadFormComponent implements OnInit {
  user: User;
  dialogRef: any;
  discussionId: number;
  threadForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private threadService: ThreadService,
    private notification: NotificationService,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.user.subscribe(x => this.user = x);
  }

  ngOnInit(): void {
    this.threadForm = this.formBuilder.group({
      topic: ['', Validators.required],
      detail: ['', Validators.required]
    });
  }

  get f() { return this.threadForm.controls; }

  onSubmit(){
    this.submitted = true;
    if (this.threadForm.invalid) {
      return;
    }
    this.loading = true;
    this.threadService.insert({
      discussionId: this.discussionId,
      topic: this.f.topic.value,
      detail: this.f.detail.value
    } as Thread, this.user.userId)
      .subscribe(
        data => {
          this.dialogRef.close('success');
        },
        error => {
          this.loading = false;
          this.notification.notify(error,NotificationEnum.Error);
        });
  }

}
