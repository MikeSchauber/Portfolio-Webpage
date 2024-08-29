import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialsAndNavComponent } from './socials-and-nav.component';

describe('SocialsAndNavComponent', () => {
  let component: SocialsAndNavComponent;
  let fixture: ComponentFixture<SocialsAndNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialsAndNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialsAndNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
