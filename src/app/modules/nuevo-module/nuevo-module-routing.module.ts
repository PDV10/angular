import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CubosComponent } from 'src/app/cubos/cubos.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'cubos',
    pathMatch: 'full'
  },
  {
  path: 'cubos',
  component: CubosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NuevoModuleRoutingModule { }
