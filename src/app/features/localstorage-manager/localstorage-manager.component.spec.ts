import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalstorageManagerComponent } from './localstorage-manager.component';

describe('LocalstorageManagerComponent', () => {
  let component: LocalstorageManagerComponent;
  let fixture: ComponentFixture<LocalstorageManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalstorageManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocalstorageManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
