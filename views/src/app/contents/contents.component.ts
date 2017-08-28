import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VideoComponent } from '../video/video.component';
import { ResourceService } from '../resource.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.css']
})
export class ContentsComponent implements OnInit {
  public title: string = '欢迎使用鱼鱼播放器!';
  public resources: any = [];
  private resourceSvc: ResourceService;

  // Inject HttpClient to component or service
  constructor (@Inject(ResourceService)resourceService) {
    console.log('contents.components');

    this.resourceSvc = resourceService;    
  }
  
  // establish http request via service only once
  ngOnInit() {
    this.resourceSvc.getResources();
  }

}
 