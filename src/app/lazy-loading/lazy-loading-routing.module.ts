import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { AdminComponent } from './admin/admin.component';
import { ChatGptComponent } from './chat-gpt/chat-gpt.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'admin', title: 'Admin', component: AdminComponent },
  { path: '', title: 'Users', component: UsersComponent },
  { path: 'openAI', title: 'OpenAI', component: ChatGptComponent },
  { path: 'about', title: 'About', component: AboutComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class LazyLoadingRoutingModule { }
