import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestApiComponent } from './request-api.component';

describe('RequestApiComponent', () => {
  let component: RequestApiComponent;
  let fixture: ComponentFixture<RequestApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
