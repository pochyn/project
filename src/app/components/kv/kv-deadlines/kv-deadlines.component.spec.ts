import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KvDeadlinesComponent } from './kv-deadlines.component';

describe('KvDeadlinesComponent', () => {
  let component: KvDeadlinesComponent;
  let fixture: ComponentFixture<KvDeadlinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KvDeadlinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KvDeadlinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
