import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '@app/core/services/authentication.service';
import { IProfilePicture } from '@app/interfaces/i-profile-picture.interface';
import { User } from '@app/models/user.model';
import { ProfilePictureHelper } from '@app/services/helpers/profile-picture-helper.service';
import { ThreadService } from '@app/services/thread.service';
import { UserService } from '@app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: [ProfilePictureHelper,UserService]
})
export class ProfileComponent implements OnInit,IProfilePicture {
  user: User;
  pictureUrl: any;

  constructor(
    private profilePictureHelper: ProfilePictureHelper,
    private authenticationService: AuthenticationService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.authenticationService.user.subscribe(x => this.user = x);
    this.getPhoto();
  }
  
  getPhoto(){
    this.profilePictureHelper.getPhoto(this.user.userId)
      .subscribe(
        data => {
          this.profilePictureHelper.createImageFromBlob(data,this);
        },
        error => {
          this.profilePictureHelper.setUnknownUrl(this);
        });
        
  }

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
        const formData: FormData = new FormData();
        formData.append('file', <File>event.target.files[0]);
        this.profilePictureHelper.uploadPhoto(formData,this.user.userId)
          .subscribe(res => {
            this.router.routeReuseStrategy.shouldReuseRoute = () => false;
            this.router.onSameUrlNavigation = 'reload';
            this.router.navigate(['./'], { relativeTo: this.route });
          });
      }
    }
  
}
