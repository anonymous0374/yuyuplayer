import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuBarComponent } from './menu-bar.component';
import { BsDropdownModule } from 'ngx-bootstrap';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    BsDropdownModule,
    BsDropdownModule.forRoot(),
    RouterModule // for using RouterLink
  ],
  declarations: [MenuBarComponent],
  exports: [MenuBarComponent]
})
export class MenuBarModule { }
