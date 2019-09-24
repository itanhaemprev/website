import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComiteInvestimentosComponent } from './comite-investimentos.component';

describe('ComiteInvestimentosComponent', () => {
  let component: ComiteInvestimentosComponent;
  let fixture: ComponentFixture<ComiteInvestimentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComiteInvestimentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComiteInvestimentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
