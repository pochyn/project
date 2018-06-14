import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTopicOrGazetaComponent } from './show-topic-or-gazeta.component';

describe('ShowTopicOrGazetaComponent', () => {
  let component: ShowTopicOrGazetaComponent;
  let fixture: ComponentFixture<ShowTopicOrGazetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowTopicOrGazetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowTopicOrGazetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
