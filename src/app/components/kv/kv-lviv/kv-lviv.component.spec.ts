import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KvLvivComponent } from './kv-lviv.component';

describe('KvLvivComponent', () => {
  let component: KvLvivComponent;
  let fixture: ComponentFixture<KvLvivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KvLvivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KvLvivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
