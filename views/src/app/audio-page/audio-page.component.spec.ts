import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioPageComponent } from './audio-page.component';

describe('AudioPageComponent', () => {
  let component: AudioPageComponent;
  let fixture: ComponentFixture<AudioPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AudioPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AudioPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
