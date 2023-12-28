import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetComponentOutletExampleComponent } from './widget-component-outlet-example.component';

describe('WidgetComponentOutletExampleComponent', () => {
  let component: WidgetComponentOutletExampleComponent;
  let fixture: ComponentFixture<WidgetComponentOutletExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WidgetComponentOutletExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WidgetComponentOutletExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
