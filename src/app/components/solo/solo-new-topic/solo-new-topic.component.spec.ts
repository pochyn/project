import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoloNewTopicComponent } from './solo-new-topic.component';

describe('SoloNewTopicComponent', () => {
  let component: SoloNewTopicComponent;
  let fixture: ComponentFixture<SoloNewTopicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoloNewTopicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoloNewTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
