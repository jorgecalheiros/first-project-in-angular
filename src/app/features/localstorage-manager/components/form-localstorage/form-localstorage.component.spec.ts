import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLocalstorageComponent } from './form-localstorage.component';

describe('FormLocalstorageComponent', () => {
  let component: FormLocalstorageComponent;
  let fixture: ComponentFixture<FormLocalstorageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormLocalstorageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormLocalstorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
