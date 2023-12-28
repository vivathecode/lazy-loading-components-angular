import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetViewContainerExampleComponent } from './widget-view-container-example.component';

describe('WidgetViewContainerExampleComponent', () => {
  let component: WidgetViewContainerExampleComponent;
  let fixture: ComponentFixture<WidgetViewContainerExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WidgetViewContainerExampleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WidgetViewContainerExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
