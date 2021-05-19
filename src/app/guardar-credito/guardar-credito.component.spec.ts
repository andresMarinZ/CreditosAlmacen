import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { GuardarCreditoComponent } from './guardar-credito.component';
import { RouterTestingModule } from '@angular/router/testing';
describe('GuardarCreditoComponent', () => {
  let component: GuardarCreditoComponent;
  let fixture: ComponentFixture<GuardarCreditoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule,RouterTestingModule],
      declarations: [ GuardarCreditoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuardarCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
