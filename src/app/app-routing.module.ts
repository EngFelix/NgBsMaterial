import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from 'src/app/page/dashboard/dashboard.component';
import { TestPageComponent } from 'src/app/page/test-page/test-page.component';

const routes: Routes = [
  { path: 'test', component: TestPageComponent },
  { path: '', component: DashboardComponent },
  { path: '**', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
