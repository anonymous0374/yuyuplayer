import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.css']
})
export class AudioComponent implements OnInit {
  @Input() resource: any;

  constructor() { }

  ngOnInit() {
  }
 
}
