import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGestioncleComponent } from './create-gestioncle.component';

describe('CreateGestioncleComponent', () => {
  let component: CreateGestioncleComponent;
  let fixture: ComponentFixture<CreateGestioncleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateGestioncleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateGestioncleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
