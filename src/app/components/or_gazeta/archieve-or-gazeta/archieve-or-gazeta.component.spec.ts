import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchieveOrGazetaComponent } from './archieve-or-gazeta.component';

describe('ArchieveOrGazetaComponent', () => {
  let component: ArchieveOrGazetaComponent;
  let fixture: ComponentFixture<ArchieveOrGazetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchieveOrGazetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchieveOrGazetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
