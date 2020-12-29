import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationEnum } from '@app/core/enums/notification.enum';
import { NotificationService } from '@app/core/services/notification.service';
import { Reply } from '@app/models/reply.model';
import { ReplyService } from '@app/services/reply.service';

@Component({
  selector: 'app-reply-form',
  templateUrl: './reply-form.component.html',
  styleUrls: ['./reply-form.component.scss'],
  providers: [ReplyService]
})
export class ReplyFormComponent implements OnInit {
  isUpdate = false;
  dialogRef: any;
  userId: number;
  threadId: number;
  replyId: number;
  detail: string;
  replyForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private replyService: ReplyService,
    private notification: NotificationService
  ) { }

  ngOnInit(): void {
    this.replyForm = this.formBuilder.group({
      reply: ['', Validators.required]
    });

    if(this.isUpdate){
      this.f.reply.setValue(this.detail);
    }
  }

  get f() { return this.replyForm.controls; }

  onSubmit(){
    this.submitted = true;
    if (this.replyForm.invalid) {
      return;
    }
    this.loading = true;
    if(this.isUpdate){
      this.update();
    }
    else{
      this.insert();
    }
  }
  insert(){
    this.replyService.insert({
      threadId: this.threadId,
      detail: this.f.reply.value
    } as Reply, this.userId)
      .subscribe(
        data => {
          this.dialogRef.close('success');
        },
        error => {
          this.loading = false;
          this.notification.notify(error.detail,NotificationEnum.Error);
        });
  }
  update(){
    this.replyService.update({
      replyId: this.replyId,
      detail: this.f.reply.value
    } as Reply)
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
