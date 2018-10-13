import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {TableComponent} from "./table/table.component";
import {FuncViewComponent} from "../@views/func/func-view.component";
import {ProjectsComponent} from "./projects/projects.component";


const routes: Routes = [
  {
    path: '',
    component: FuncViewComponent,
    children: [{
      path: '',
      redirectTo: 'projects',
      pathMatch: 'full',
    }, {
      path: 'projects',
      component: ProjectsComponent,
    }, {
      path: 'dashboard',
      component: DashboardComponent,
    }, {
      path: 'table',
      component: TableComponent
    }],
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModulesRoutingModule {
}