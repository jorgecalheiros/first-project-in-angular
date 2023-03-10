import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteApiComponent } from './teste-api.component';

describe('TesteApiComponent', () => {
  let component: TesteApiComponent;
  let fixture: ComponentFixture<TesteApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TesteApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TesteApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
