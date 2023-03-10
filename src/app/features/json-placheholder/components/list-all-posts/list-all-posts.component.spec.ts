import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllPostsComponent } from './list-all-posts.component';

describe('ListAllPostsComponent', () => {
  let component: ListAllPostsComponent;
  let fixture: ComponentFixture<ListAllPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAllPostsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAllPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
