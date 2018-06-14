import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTopicOrSiteComponent } from './show-topic-or-site.component';

describe('ShowTopicOrSiteComponent', () => {
  let component: ShowTopicOrSiteComponent;
  let fixture: ComponentFixture<ShowTopicOrSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowTopicOrSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowTopicOrSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
