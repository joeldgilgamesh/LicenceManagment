import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateServiceProductComponent } from './create-service-product.component';

describe('CreateServiceProductComponent', () => {
  let component: CreateServiceProductComponent;
  let fixture: ComponentFixture<CreateServiceProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateServiceProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateServiceProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
