import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventarioLoginComponent } from './inventario-login.component';

describe('InventarioLoginComponent', () => {
  let component: InventarioLoginComponent;
  let fixture: ComponentFixture<InventarioLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventarioLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventarioLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
