import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTagComponent } from './about-tag.component';

describe('AboutTagComponent', () => {
  let component: AboutTagComponent;
  let fixture: ComponentFixture<AboutTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutTagComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
