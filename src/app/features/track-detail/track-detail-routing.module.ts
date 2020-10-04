import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotfoundComponent } from '@app/core/components/page-notfound/page-notfound.component';
import { TrackDetailComponent } from './track-detail.component';


const routes: Routes = [
  {path: ':id', component: TrackDetailComponent},
  {path: '**', component: PageNotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrackDetailRoutingModule { }
