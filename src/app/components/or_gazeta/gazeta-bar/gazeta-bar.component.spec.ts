import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GazetaBarComponent } from './gazeta-bar.component';

describe('GazetaBarComponent', () => {
  let component: GazetaBarComponent;
  let fixture: ComponentFixture<GazetaBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GazetaBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GazetaBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
