import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchieveOrSiteComponent } from './archieve-or-site.component';

describe('ArchieveOrSiteComponent', () => {
  let component: ArchieveOrSiteComponent;
  let fixture: ComponentFixture<ArchieveOrSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchieveOrSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchieveOrSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
