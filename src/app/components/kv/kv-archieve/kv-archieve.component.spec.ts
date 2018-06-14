import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KvArchieveComponent } from './kv-archieve.component';

describe('KvArchieveComponent', () => {
  let component: KvArchieveComponent;
  let fixture: ComponentFixture<KvArchieveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KvArchieveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KvArchieveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
