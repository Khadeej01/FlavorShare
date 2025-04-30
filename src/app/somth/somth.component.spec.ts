import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomthComponent } from './somth.component';

describe('SomthComponent', () => {
  let component: SomthComponent;
  let fixture: ComponentFixture<SomthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SomthComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SomthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
