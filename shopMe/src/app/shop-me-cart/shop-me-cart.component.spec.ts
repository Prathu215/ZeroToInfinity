import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopMeCartComponent } from './shop-me-cart.component';

describe('ShopMeCartComponent', () => {
  let component: ShopMeCartComponent;
  let fixture: ComponentFixture<ShopMeCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopMeCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopMeCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
