import {ApplicationConfig, isDevMode, provideZoneChangeDetection} from '@angular/core';
import {
  InMemoryScrollingFeature,
  InMemoryScrollingOptions,
  provideRouter,
  withInMemoryScrolling
} from '@angular/router';

import {routes} from './app.routes';
import {provideHttpClient} from '@angular/common/http';
import {TranslocoHttpLoader} from './transloco-loader';
import {provideTransloco} from '@jsverse/transloco';
import {bootstrapApplication} from "@angular/platform-browser";
import {provideAnimations} from "@angular/platform-browser/animations";

//https://stackoverflow.com/questions/76318742/configuring-scroll-restoration-for-angular-standalone-router
const scrollConfig: InMemoryScrollingOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  // onSameUrlNavigation: 'reload'
};

const inMemoryScrollingFeature: InMemoryScrollingFeature = withInMemoryScrolling(scrollConfig);

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes, inMemoryScrollingFeature),
    provideHttpClient(),
    //https://stackoverflow.com/questions/77820241/ng05100providers-frombrowsermodule-have-already-been-loaded-if-you-need-acces
    provideAnimations(),
    provideTransloco({
      config: {
        availableLangs: ['en', 'nl'],
        defaultLang: 'en',
        // Remove this option if your application doesn't support changing language in runtime.
        reRenderOnLangChange: true,
        prodMode: !isDevMode(),
      },
      loader: TranslocoHttpLoader
    })]
};
