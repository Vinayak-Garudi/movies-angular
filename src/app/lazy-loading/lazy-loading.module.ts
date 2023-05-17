import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyLoadingRoutingModule } from './lazy-loading-routing.module';
import { UsersComponent } from './users/users.component';
import { AdminComponent } from './admin/admin.component';

import { NgApexchartsModule } from 'ng-apexcharts';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UsersComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    LazyLoadingRoutingModule,
    NgApexchartsModule,
    ReactiveFormsModule
  ],
  exports: [UsersComponent, AdminComponent]
})
export class LazyLoadingModule { }