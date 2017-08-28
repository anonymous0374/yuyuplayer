import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentsComponent } from './contents.component';
import { VideoPageModule } from '../video-page/video-page.module';
import { AudioPageModule } from '../audio-page/audio-page.module';
import { ExtraModule } from '../extra/extra.module';
import { RoutesModule } from '../routes/routes.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RoutesModule,
    VideoPageModule,
    AudioPageModule,
    ExtraModule,
    RouterModule
  ],
  declarations: [ContentsComponent],
  exports: [ContentsComponent]
})
export class ContentsModule { }
