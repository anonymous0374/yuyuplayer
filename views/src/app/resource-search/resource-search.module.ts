import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResourceSearchComponent } from './resource-search.component';
import { MenuBarModule } from '../menu-bar/menu-bar.module';

@NgModule({
  imports: [
    CommonModule,
    MenuBarModule
  ],
  declarations: [ResourceSearchComponent],
  exports: [ResourceSearchComponent]
})
export class ResourceSearchModule { }
