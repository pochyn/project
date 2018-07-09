import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoloRegionsComponent } from './solo-regions.component';

describe('SoloRegionsComponent', () => {
  let component: SoloRegionsComponent;
  let fixture: ComponentFixture<SoloRegionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoloRegionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoloRegionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
