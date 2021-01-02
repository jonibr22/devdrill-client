import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationEnum } from '@app/core/enums/notification.enum';
import { VoteType } from '@app/core/enums/vote.enum';
import { AuthenticationService } from '@app/core/services/authentication.service';
import { NotificationService } from '@app/core/services/notification.service';
import { IProfilePicture } from '@app/interfaces/i-profile-picture.interface';
import { Reply } from '@app/models/reply.model';
import { Thread } from '@app/models/thread.model';
import { User } from '@app/models/user.model';
import { ProfilePictureHelper } from '@app/services/helpers/profile-picture-helper.service';
import { ReplyService } from '@app/services/reply.service';
import { ThreadService } from '@app/services/thread.service';
import { DeleteConfirmComponent } from './dialogs/delete-confirm/delete-confirm.component';
import { ReplyFormComponent } from './dialogs/reply-form/reply-form.component';
import { ThreadFormComponent } from './dialogs/thread-form/thread-form.component';

@Component({
  selector: 'app-detail-thread',
  templateUrl: './detail-thread.component.html',
  styleUrls: ['./detail-thread.component.scss'],
  providers: [ProfilePictureHelper]
})

export class DetailThreadComponent implements OnInit{
  readonly DOWN_VOTE = VoteType.Down;
  readonly UP_VOTE = VoteType.Up;
  thread: Thread;
  threadReplies: Reply[];
  today: Date;
  user: User;
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private threadService: ThreadService,
    private replyService: ReplyService,
    private notification: NotificationService,
    private dialog: MatDialog,
    private authenticationService: AuthenticationService,
    private router: Router,
    private route: ActivatedRoute,
    private profilePictureHelper: ProfilePictureHelper
  ) { 
    this.authenticationService.user.subscribe(x => this.user = x);
  }

  ngOnInit(): void {
    this.today = new Date();
    this.activatedRoute.paramMap.subscribe(params => { 
      let id = +params.get('id');
      this.replyService.getByThreadId(id).subscribe(
        data => {
          this.threadReplies = data;
          this.threadReplies.forEach((val,i)=>{
            this.getPhoto(val.user.userId,this.threadReplies[i]);
          })
        },
        error => {
          this.notification.notify(error,NotificationEnum.Error);
        }
      );
      this.threadService.getById(id).subscribe(
        data => {
          this.thread = data;
          this.getPhoto(this.thread.user.userId,this.thread);
        },
        error => {
          this.notification.notify(error,NotificationEnum.Error);
        }
      );
    });
  }
  getPhoto(userId: number, ref: IProfilePicture){
    this.profilePictureHelper.getPhoto(userId)
      .subscribe(
        data => {
          this.profilePictureHelper.createImageFromBlob(data,ref);
        },
        error => {
          this.profilePictureHelper.setUnknownUrl(ref);
        });
  }

  voteThread(threadId: number,type: VoteType){
    this.threadService.vote(threadId,type).subscribe(
      data => {
        this.thread.upvote = data;
      },
      error => {
        this.notification.notify(error,NotificationEnum.Error);
      }
    )
  }
  voteReply(replyId: number,type: VoteType){
    this.replyService.vote(replyId,type).subscribe(
      data => {
        this.threadReplies.forEach((val,i) => {
          if(val.replyId == replyId){
            this.threadReplies[i].upvote = data;
          }
        })
      },
      error => {
        this.notification.notify(error,NotificationEnum.Error);
      }
    )
  }
  editThread(){
    const dialogRef = this.dialog.open(ThreadFormComponent);
    dialogRef.componentInstance.threadId = this.thread.threadId;
    dialogRef.componentInstance.topic = this.thread.topic;
    dialogRef.componentInstance.detail = this.thread.detail;
    dialogRef.componentInstance.dialogRef = dialogRef;
    dialogRef.afterClosed().subscribe((result) => {
      if(result === "success"){
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate(['./'], { relativeTo: this.route });
      }
    })
  }
  editReply(replyId: number){
    const dialogRef = this.dialog.open(ReplyFormComponent);
    dialogRef.componentInstance.replyId = replyId;
    dialogRef.componentInstance.isUpdate = true;
    this.threadReplies.forEach((val,i) => {
      if(val.replyId == replyId){
        dialogRef.componentInstance.detail = val.detail
      }
    }) 
    dialogRef.componentInstance.dialogRef = dialogRef;
    dialogRef.afterClosed().subscribe((result) => {
      if(result === "success"){
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate(['./'], { relativeTo: this.route });
      }
    })
  }
  deleteReply(replyId: number){
    const dialogRef = this.dialog.open(DeleteConfirmComponent);
    dialogRef.componentInstance.replyId = replyId;
    dialogRef.componentInstance.dialogRef = dialogRef;
    dialogRef.afterClosed().subscribe((result) => {
      if(result === "success"){
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate(['./'], { relativeTo: this.route });
      }
    })
  }

  openModalReply(threadId: number){
    const dialogRef = this.dialog.open(ReplyFormComponent);
    dialogRef.componentInstance.threadId = threadId; 
    dialogRef.componentInstance.userId = this.user.userId;
    dialogRef.componentInstance.dialogRef = dialogRef;
    dialogRef.afterClosed().subscribe((result) => {
      if(result === "success"){
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate(['./'], { relativeTo: this.route });
      }
    })
  }
}
