import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleClientsComponent } from './single-clients.component';

describe('SingleClientsComponent', () => {
  let component: SingleClientsComponent;
  let fixture: ComponentFixture<SingleClientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleClientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
