import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForumComponent } from './forum.component';
import { DetailThreadComponent } from './detail-thread/detail-thread.component';
import { ThreadsComponent } from './threads/threads.component';
import { GeneralComponent } from './general/general.component';


const routes: Routes = [
  { 
    path: '', 
    component: ForumComponent, 
    children: [
      {path: '', component: GeneralComponent},
      {path: 'threads/:id', component: ThreadsComponent},
      {path: 'threads/detail/:id', component: DetailThreadComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForumRoutingModule { }
