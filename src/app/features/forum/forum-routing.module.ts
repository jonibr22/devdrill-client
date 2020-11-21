import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForumComponent } from './forum.component';
import { DetailThreadComponent } from './detail-thread/detail-thread.component';
import { ThreadsComponent } from './threads/threads.component';


const routes: Routes = [
  {path: '', component: ForumComponent},
  {path: ':id', component: ThreadsComponent},
  {path: ':id/detail', component: DetailThreadComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForumRoutingModule { }
