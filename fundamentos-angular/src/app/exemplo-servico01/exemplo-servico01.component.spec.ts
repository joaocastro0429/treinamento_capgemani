import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemploServico01Component } from './exemplo-servico01.component';

describe('ExemploServico01Component', () => {
  let component: ExemploServico01Component;
  let fixture: ComponentFixture<ExemploServico01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExemploServico01Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExemploServico01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
