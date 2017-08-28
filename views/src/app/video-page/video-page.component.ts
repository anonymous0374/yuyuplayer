import { Component, OnInit, Inject } from '@angular/core';
import { ResourceService } from '../resource.service';

@Component({
  selector: 'app-video-page',
  templateUrl: './video-page.component.html',
  styleUrls: ['./video-page.component.css']
})
export class VideoPageComponent implements OnInit {
  public resources: any [];  

  constructor(private resourceSvc: ResourceService) { 
    this.resourceSvc = resourceSvc;
  }

  ngOnInit() {
    console.log('init video-page component.');
    this.resourceSvc.getResources().then(data => {       
      this.resources = data['videos'];
      console.log(this.resources.length + ' resources found on video-page init.');
      
    });    
  }

}
