import { NgModule, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutesComponent } from './routes.component';

import { RouterModule } from '@angular/router';

import { LocationStrategy, HashLocationStrategy } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(RoutesComponent.routes)
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  declarations: [RoutesComponent]
})
export class RoutesModule { }
