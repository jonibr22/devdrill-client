import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotfoundComponent } from '@app/core/components/page-notfound/page-notfound.component';
import { CourseDetailComponent } from './course-detail.component';


const routes: Routes = [
  {path: ':id', component: CourseDetailComponent},
  {path: '**', component: PageNotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseDetailRoutingModule { }
