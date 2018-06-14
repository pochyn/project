import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrArchieveComponent } from './gr-archieve.component';

describe('GrArchieveComponent', () => {
  let component: GrArchieveComponent;
  let fixture: ComponentFixture<GrArchieveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrArchieveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrArchieveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
