import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestioncleComponent } from './gestioncle.component';

describe('GestioncleComponent', () => {
  let component: GestioncleComponent;
  let fixture: ComponentFixture<GestioncleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestioncleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestioncleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
