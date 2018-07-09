import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KvBarComponent } from './kv-bar.component';

describe('KvBarComponent', () => {
  let component: KvBarComponent;
  let fixture: ComponentFixture<KvBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KvBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KvBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
