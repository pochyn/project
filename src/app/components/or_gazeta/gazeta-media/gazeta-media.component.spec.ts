import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GazetaMediaComponent } from './gazeta-media.component';

describe('GazetaMediaComponent', () => {
  let component: GazetaMediaComponent;
  let fixture: ComponentFixture<GazetaMediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GazetaMediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GazetaMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
