import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotSelectComponent } from './not-select.component';

describe('NotSelectComponent', () => {
  let component: NotSelectComponent;
  let fixture: ComponentFixture<NotSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
