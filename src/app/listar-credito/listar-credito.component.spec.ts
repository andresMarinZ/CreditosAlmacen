import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListarCreditoComponent } from './listar-credito.component';
import { RouterTestingModule } from '@angular/router/testing';
describe('ListarCreditoComponent', () => {
  let component: ListarCreditoComponent;
  let fixture: ComponentFixture<ListarCreditoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ ListarCreditoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
