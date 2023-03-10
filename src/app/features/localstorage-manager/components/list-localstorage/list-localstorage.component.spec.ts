import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLocalstorageComponent } from './list-localstorage.component';

describe('ListLocalstorageComponent', () => {
  let component: ListLocalstorageComponent;
  let fixture: ComponentFixture<ListLocalstorageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListLocalstorageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListLocalstorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
