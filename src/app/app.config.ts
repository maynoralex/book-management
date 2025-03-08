import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { StoreModule } from '@ngrx/store';
import { EffectsModule, EffectsRootModule, provideEffects } from '@ngrx/effects';
import { BookReducer } from './books/book.reducer';
import { AppState } from './app.state';
import { BookEffects } from './books/book.effects';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideStore({ book: BookReducer }), 
    provideEffects([BookEffects]),
  ]
};
