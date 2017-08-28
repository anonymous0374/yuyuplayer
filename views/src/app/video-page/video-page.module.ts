import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoPageComponent } from './video-page.component';
import { VideoModule} from '../video/video.module';
import { ResourceService } from '../resource.service';

@NgModule({
  imports: [
    CommonModule,
    VideoModule
  ],
  providers: [ ResourceService ],
  declarations: [VideoPageComponent]
})
export class VideoPageModule { }
