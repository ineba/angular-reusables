import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main/main.component';

const routes: Routes = [
  {
    path: 'loading-indicator',
    component: MainComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./loading-indicator-showcase/loading-indicator-showcase.module')
          .then(m => m.LoadingIndicatorShowcaseModule)
      }
    ]
  },
  {
    path: 'error-handler',
    component: MainComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./error-handler-showcase/error-handler-showcase.module')
          .then(m => m.ErrorHandlerShowcaseModule)
      }
    ]
  },
  {
    path: 'image-tricks',
    component: MainComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./image-tricks-showcase/image-tricks-showcase.module')
          .then(m => m.ImageTricksShowcaseModule)
      }
    ]
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'loading-indicator/spinner'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
