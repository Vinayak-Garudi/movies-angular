import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyLoadingRoutingModule } from './lazy-loading-routing.module';
import { UsersComponent } from './users/users.component';
import { AdminComponent } from './admin/admin.component';

import { NgApexchartsModule } from 'ng-apexcharts';
import { ReactiveFormsModule } from '@angular/forms';
import { ChatGptComponent } from './chat-gpt/chat-gpt.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    UsersComponent,
    AdminComponent,
    ChatGptComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    LazyLoadingRoutingModule,
    NgApexchartsModule,
    ReactiveFormsModule
  ],
  exports: [UsersComponent, AdminComponent,ChatGptComponent,AboutComponent]
})
export class LazyLoadingModule { }