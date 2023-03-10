import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonPlacheholderComponent } from './json-placheholder.component';

describe('JsonPlacheholderComponent', () => {
  let component: JsonPlacheholderComponent;
  let fixture: ComponentFixture<JsonPlacheholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonPlacheholderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonPlacheholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
