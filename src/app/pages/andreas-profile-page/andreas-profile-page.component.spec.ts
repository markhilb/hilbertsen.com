import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndreasProfilePageComponent } from './andreas-profile-page.component';

describe('AndreasProfilePageComponent', () => {
  let component: AndreasProfilePageComponent;
  let fixture: ComponentFixture<AndreasProfilePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AndreasProfilePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AndreasProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
