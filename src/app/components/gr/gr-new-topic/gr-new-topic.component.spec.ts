import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrNewTopicComponent } from './gr-new-topic.component';

describe('GrNewTopicComponent', () => {
  let component: GrNewTopicComponent;
  let fixture: ComponentFixture<GrNewTopicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrNewTopicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrNewTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
