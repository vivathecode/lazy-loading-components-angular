import { Routes } from '@angular/router';
import { WidgetHostComponent } from './widgets/widget-host/widget-host.component';
import { WidgetViewContainerExampleComponent } from './widgets/widget-view-container-example/widget-view-container-example.component';
import { WidgetComponentOutletExampleComponent } from './widgets/widget-component-outlet-example/widget-component-outlet-example.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'widgets',
    pathMatch: 'full',
  },
  {
    path: 'widgets',
    component: WidgetHostComponent,
  },
  {
    path: 'example-container',
    component: WidgetViewContainerExampleComponent,
  },
  {
    path: 'example-outlet',
    component: WidgetComponentOutletExampleComponent,
  },
];
