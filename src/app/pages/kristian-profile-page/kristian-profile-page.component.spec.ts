import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KristianProfilePageComponent } from './kristian-profile-page.component';

describe('KristianProfilePageComponent', () => {
  let component: KristianProfilePageComponent;
  let fixture: ComponentFixture<KristianProfilePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KristianProfilePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KristianProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
