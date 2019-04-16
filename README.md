# NgReusables

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.

---
# @btapai/ng-loading-indicator

## How to install

Install the package with the following script:

```npm install @btapai/ng-loading-indicator```

or

```yarn add @btapai/ng-loading-indicator```

## How to use

Import the module into your main ngModule
```typescript
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {LoadingIndicatorPageModule} from '@btapai/ng-loading-indicator';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LoadingIndicatorPageModule // place it into the imports array
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

Add the loading-indicator component to your app.component template
```angular2html
<!-- add the component to the bottom of the file -->
<btp-loading-indicator></btp-loading-indicator>
```

Use the method decorators to start/stop the indicator.

```typescript
import {Component} from '@angular/core';
import {startLoadingIndicator, stopLoadingIndicator} from '@btapai/ng-loading-indicator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @startLoadingIndicator
  triggerLoadingIndicator() {
    setTimeout(this.triggerLoadingIndicatorStop.bind(this), 5000);
  }

  @stopLoadingIndicator
  triggerLoadingIndicatorStop() {
    console.log('stopped');
  }
}

```

The loading indicator should appear.

## Customise
By default the loading-indicator is a spinner, however, by providing a custom configuration, you can cusomise the result.

```typescript
export const DEFAULT_CONFIG: LoadingIndicatorConfig = {
  size: 160, // size will determine the width and height of the indicator container (as a square)
  color: '#7B1FA2', // the color you want for your indicator's background
  overlayColor: 'rgba(100,100,100,0.3)', // the color you would like to use for the overlay
  indicatorComponent: SpinnerComponent // By default it is a spinner
};
```

The package itself contains an EllipsisComponent, which can be used as a replacement to the spinner.

To do that, just provide a specified config file in your module
```typescript
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppComponent} from './app.component';
import {LOADING_INDICATOR_CONFIG, LoadingIndicatorModule} from 'loading-indicator';
import {AppRoutingModule} from './app.routing.module';
import {EllipsisComponent} from '@btapai/ng-loading-indicator';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    LoadingIndicatorModule.forRoot(),
  ],
  providers: [
    {provide: LOADING_INDICATOR_CONFIG, useValue: {color: 'red', size: 160, indicatorComponent: EllipsisComponent}}
  ]
})
export class AppModule {
}
```

In future releases, I'd like to provide more indicators in the package, and the ability to add any component as an indicator.

---

# For contributors

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files or in the installed library development files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build:lib` to build the libraries. The build artifacts will be stored in the `dist/` directory. Publishing them as packages should be done in their respective directories.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

in progress
