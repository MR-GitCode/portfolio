import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StickerCircleComponent } from './sticker-circle.component';

describe('StickerCircleComponent', () => {
  let component: StickerCircleComponent;
  let fixture: ComponentFixture<StickerCircleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StickerCircleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StickerCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
