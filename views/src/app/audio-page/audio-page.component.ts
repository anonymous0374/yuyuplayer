import { Component, OnInit, Inject } from '@angular/core';
import { ResourceService } from '../resource.service';

@Component({
  selector: 'app-audio-page',
  templateUrl: './audio-page.component.html',
  styleUrls: ['./audio-page.component.css']
})
export class AudioPageComponent implements OnInit {
  public resources: any [];
  // private resourceSvc: ResourceService;

  constructor(private resourceSvc: ResourceService) { 
    // this.resourceSvc = resourceSvc;
  }

  ngOnInit() {
    console.log('init video-page component.');
    this.resourceSvc.getResources().then(data => {      
        this.resources = data['audios'];      
    });
  }

}
