import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetricCardComponentComponent } from './metric-card-component.component';

describe('MetricCardComponentComponent', () => {
  let component: MetricCardComponentComponent;
  let fixture: ComponentFixture<MetricCardComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MetricCardComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetricCardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
