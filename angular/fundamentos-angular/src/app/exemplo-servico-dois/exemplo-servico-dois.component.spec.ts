import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemploServicoDoisComponent } from './exemplo-servico-dois.component';

describe('ExemploServicoDoisComponent', () => {
  let component: ExemploServicoDoisComponent;
  let fixture: ComponentFixture<ExemploServicoDoisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExemploServicoDoisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExemploServicoDoisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
