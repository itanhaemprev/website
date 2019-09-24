import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConselhosComponent } from './conselhos.component';

describe('ConselhosComponent', () => {
  let component: ConselhosComponent;
  let fixture: ComponentFixture<ConselhosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConselhosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConselhosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
