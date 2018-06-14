import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteTopBarComponent } from './site-top-bar.component';

describe('SiteTopBarComponent', () => {
  let component: SiteTopBarComponent;
  let fixture: ComponentFixture<SiteTopBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteTopBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteTopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
