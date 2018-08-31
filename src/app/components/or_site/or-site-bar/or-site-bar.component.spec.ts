import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrSiteBarComponent } from './or-site-bar.component';

describe('OrSiteBarComponent', () => {
  let component: OrSiteBarComponent;
  let fixture: ComponentFixture<OrSiteBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrSiteBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrSiteBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
