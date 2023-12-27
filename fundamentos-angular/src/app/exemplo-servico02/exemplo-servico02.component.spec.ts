import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemploServico02Component } from './exemplo-servico02.component';

describe('ExemploServico02Component', () => {
  let component: ExemploServico02Component;
  let fixture: ComponentFixture<ExemploServico02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExemploServico02Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExemploServico02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
