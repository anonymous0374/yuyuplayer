import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';
import { VideoPageComponent } from '../video-page/video-page.component';
import { AudioPageComponent } from '../audio-page/audio-page.component';
import { ExtraComponent } from '../extra/extra.component';

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.css']
})
export class RoutesComponent implements OnInit {
  
  public static routes : Routes = [
    {
      path: '', redirectTo: 'video', pathMatch: 'full'
    }, {
      path: 'video', component: VideoPageComponent      
    }, {
      path: 'audio', component: AudioPageComponent
    }, {
      path: 'extra', component: ExtraComponent
    }
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
