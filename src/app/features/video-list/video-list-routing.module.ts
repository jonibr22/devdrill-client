import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotfoundComponent } from '@app/core/components/page-notfound/page-notfound.component';
import { VideoListComponent } from './video-list.component';


const routes: Routes = [
  {path: ':id', component: VideoListComponent},
  {path: '**', component: PageNotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideoListRoutingModule { }
