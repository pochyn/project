import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KvSiteComponent } from './kv-site.component';

describe('KvSiteComponent', () => {
  let component: KvSiteComponent;
  let fixture: ComponentFixture<KvSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KvSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KvSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
