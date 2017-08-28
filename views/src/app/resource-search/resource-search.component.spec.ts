import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceSearchComponent } from './resource-search.component';

describe('ResourceSearchComponent', () => {
  let component: ResourceSearchComponent;
  let fixture: ComponentFixture<ResourceSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourceSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
