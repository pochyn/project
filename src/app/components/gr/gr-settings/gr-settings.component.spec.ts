import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrSettingsComponent } from './gr-settings.component';

describe('GrSettingsComponent', () => {
  let component: GrSettingsComponent;
  let fixture: ComponentFixture<GrSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
