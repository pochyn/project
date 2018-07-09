import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KvRegionsComponent } from './kv-regions.component';

describe('KvRegionsComponent', () => {
  let component: KvRegionsComponent;
  let fixture: ComponentFixture<KvRegionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KvRegionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KvRegionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
