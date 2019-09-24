import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CronogramaAcoesComponent } from './cronograma-acoes.component';

describe('CronogramaAcoesComponent', () => {
  let component: CronogramaAcoesComponent;
  let fixture: ComponentFixture<CronogramaAcoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CronogramaAcoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CronogramaAcoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
