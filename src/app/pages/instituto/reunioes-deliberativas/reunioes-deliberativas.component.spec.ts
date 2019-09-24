import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReunioesDeliberativasComponent } from './reunioes-deliberativas.component';

describe('ReunioesDeliberativasComponent', () => {
  let component: ReunioesDeliberativasComponent;
  let fixture: ComponentFixture<ReunioesDeliberativasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReunioesDeliberativasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReunioesDeliberativasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
