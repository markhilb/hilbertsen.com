import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkusProfilePageComponent } from './markus-profile-page.component';

describe('MarkusProfilePageComponent', () => {
  let component: MarkusProfilePageComponent;
  let fixture: ComponentFixture<MarkusProfilePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarkusProfilePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkusProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
