import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KvNavBarComponent } from './kv-nav-bar.component';

describe('KvNavBarComponent', () => {
  let component: KvNavBarComponent;
  let fixture: ComponentFixture<KvNavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KvNavBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KvNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
