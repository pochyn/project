import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoloSitesComponent } from './solo-sites.component';

describe('SoloSitesComponent', () => {
  let component: SoloSitesComponent;
  let fixture: ComponentFixture<SoloSitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoloSitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoloSitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
