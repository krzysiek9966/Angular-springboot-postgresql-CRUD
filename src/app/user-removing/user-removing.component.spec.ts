import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRemovingComponent } from './user-removing.component';

describe('UserRemovingComponent', () => {
  let component: UserRemovingComponent;
  let fixture: ComponentFixture<UserRemovingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRemovingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRemovingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
