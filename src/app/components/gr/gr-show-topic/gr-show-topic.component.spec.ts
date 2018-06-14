import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrShowTopicComponent } from './gr-show-topic.component';

describe('GrShowTopicComponent', () => {
  let component: GrShowTopicComponent;
  let fixture: ComponentFixture<GrShowTopicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrShowTopicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrShowTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
