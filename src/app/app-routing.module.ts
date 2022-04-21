import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './views/about/about.component';
import { CvComponent } from './views/cv/cv.component';
import { ProjectsComponent } from './views/projects/projects.component';

const routes: Routes = [
  { path: '', component: AboutComponent, pathMatch : 'full' },
  { path: 'cv', component: CvComponent, pathMatch : 'full' },
  { path: 'projects', component: ProjectsComponent, pathMatch : 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
