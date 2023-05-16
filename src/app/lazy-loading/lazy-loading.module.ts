import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyLoadingRoutingModule } from './lazy-loading-routing.module';
import { UsersComponent } from './users/users.component';
import { AdminComponent } from './admin/admin.component';

import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  declarations: [
    UsersComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    LazyLoadingRoutingModule,
    NgApexchartsModule
  ],
  exports: [UsersComponent, AdminComponent]
})
export class LazyLoadingModule { }