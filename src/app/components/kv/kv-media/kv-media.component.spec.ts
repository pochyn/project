import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KvMediaComponent } from './kv-media.component';

describe('KvMediaComponent', () => {
  let component: KvMediaComponent;
  let fixture: ComponentFixture<KvMediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KvMediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KvMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
