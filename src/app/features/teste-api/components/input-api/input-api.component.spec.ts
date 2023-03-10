import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputApiComponent } from './input-api.component';

describe('InputApiComponent', () => {
  let component: InputApiComponent;
  let fixture: ComponentFixture<InputApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
