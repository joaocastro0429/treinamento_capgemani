import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponetPersonalizadoComponent } from './componet-personalizado.component';

describe('ComponetPersonalizadoComponent', () => {
  let component: ComponetPersonalizadoComponent;
  let fixture: ComponentFixture<ComponetPersonalizadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponetPersonalizadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponetPersonalizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
