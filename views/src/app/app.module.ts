import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { ResourceSearchModule } from './resource-search/resource-search.module';
import { ContentsModule } from './contents/contents.module';
import { FooterModule } from './footer/footer.module';

import { ResourceService } from './resource.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,    
    ResourceSearchModule,    
    ContentsModule,  
    FooterModule    
  ],
  providers: [ ResourceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
