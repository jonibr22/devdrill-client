import { Component, OnInit } from '@angular/core';
import { NotificationEnum } from '@app/core/enums/notification.enum';
import { NotificationService } from '@app/core/services/notification.service';
import { ReplyService } from '@app/services/reply.service';

@Component({
  selector: 'app-delete-confirm',
  templateUrl: './delete-confirm.component.html',
  styleUrls: ['./delete-confirm.component.scss'],
  providers: [ReplyService]
})
export class DeleteConfirmComponent implements OnInit {
  loading = false;
  dialogRef: any;
  replyId: number;
  constructor(
    private replyService: ReplyService,
    private notification: NotificationService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.loading = true;
    this.replyService.delete(this.replyId).subscribe(
      data => {
        this.dialogRef.close('success');
      },
      error => {
        this.loading = false;
        this.notification.notify(error.detail,NotificationEnum.Error);
      }
    )
  }
}
