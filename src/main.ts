import { bootstrapApplication } from '@angular/platform-browser'
import {
  provideRouter,
  withEnabledBlockingInitialNavigation
} from '@angular/router'
import { AppComponent } from './app/app.component'
import { appRoutes } from './app/app.routes'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { importProvidersFrom } from '@angular/core'
import { provideHttpClient } from '@angular/common/http'

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
    provideHttpClient(),
    importProvidersFrom(BrowserAnimationsModule)
  ]
}).catch(err => console.error(err))
