import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoloShowTopicComponent } from './solo-show-topic.component';

describe('SoloShowTopicComponent', () => {
  let component: SoloShowTopicComponent;
  let fixture: ComponentFixture<SoloShowTopicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoloShowTopicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoloShowTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
