import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KvTopBarComponent } from './kv-top-bar.component';

describe('KvTopBarComponent', () => {
  let component: KvTopBarComponent;
  let fixture: ComponentFixture<KvTopBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KvTopBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KvTopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
