import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSocialsComponent } from './hero-socials.component';

describe('HeroSocialsComponent', () => {
  let component: HeroSocialsComponent;
  let fixture: ComponentFixture<HeroSocialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroSocialsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeroSocialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
