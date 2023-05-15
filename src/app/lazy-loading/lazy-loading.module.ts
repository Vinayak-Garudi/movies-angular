import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyLoadingRoutingModule } from './lazy-loading-routing.module';
import { UsersComponent } from './users/users.component';

console.log("lazily loaded")
@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    LazyLoadingRoutingModule
  ],
  exports: [UsersComponent]
})
export class LazyLoadingModule { }
