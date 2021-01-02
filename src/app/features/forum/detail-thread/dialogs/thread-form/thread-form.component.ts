import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificationEnum } from '@app/core/enums/notification.enum';
import { NotificationService } from '@app/core/services/notification.service';
import { Thread } from '@app/models/thread.model';
import { ThreadService } from '@app/services/thread.service';

@Component({
  selector: 'app-thread-form',
  templateUrl: './thread-form.component.html',
  styleUrls: ['./thread-form.component.scss'],
  providers: [ThreadService]
})
export class ThreadFormComponent implements OnInit {
  dialogRef: any;
  threadId: number;
  topic: string;
  detail: string;
  threadForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private threadService: ThreadService,
    private notification: NotificationService
  ) { }

  ngOnInit(): void {
    this.threadForm = this.formBuilder.group({
      topic: ['', Validators.required],
      detail: ['', Validators.required]
    });
    this.f.topic.setValue(this.topic);
    this.f.detail.setValue(this.detail);
  }

  get f() { return this.threadForm.controls; }

  onSubmit(){
    this.submitted = true;
    if (this.threadForm.invalid) {
      return;
    }
    this.loading = true;
    this.threadService.update({
      threadId: this.threadId,
      topic: this.f.topic.value,
      detail: this.f.detail.value
    } as Thread)
      .subscribe(
        data => {
          this.dialogRef.close('success');
        },
        error => {
          this.loading = false;
          this.notification.notify(error.detail,NotificationEnum.Error);
        });
  }
}
