import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AudioPageComponent } from './audio-page.component';
import { AudioModule } from '../audio/audio.module';

@NgModule({
  imports: [
    CommonModule,
    AudioModule
  ],
  declarations: [AudioPageComponent]
})
export class AudioPageModule { }
