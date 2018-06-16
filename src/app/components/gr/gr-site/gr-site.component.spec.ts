import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrSiteComponent } from './gr-site.component';

describe('GrSiteComponent', () => {
  let component: GrSiteComponent;
  let fixture: ComponentFixture<GrSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
