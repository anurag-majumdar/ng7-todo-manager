import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoManagerComponent } from './todo-manager.component';

describe('TodoManagerComponent', () => {
  let component: TodoManagerComponent;
  let fixture: ComponentFixture<TodoManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
