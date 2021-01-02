import { Component, OnInit } from '@angular/core';
import { User } from '@app/models/user.model';
import { CourseService } from '@app/services/course.service';
import { ThreadService } from '@app/services/thread.service';
import { UserService } from '@app/services/user.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [CourseService,UserService]
})
export class HomeComponent implements OnInit {
  loading = false;
  users: User[];

  constructor(
    //private userService: UserService
  ) { }

  ngOnInit() {
      this.loading = true;
      // this.userService.getAll().pipe(first()).subscribe(users => {
      //     this.loading = false;
      //     this.users = users;
      // });
  }
}
