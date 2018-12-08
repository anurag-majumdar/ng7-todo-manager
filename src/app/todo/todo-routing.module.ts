import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoManagerComponent } from './todo-manager/todo-manager.component';

const routes: Routes = [
  { path: '', component: TodoManagerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
