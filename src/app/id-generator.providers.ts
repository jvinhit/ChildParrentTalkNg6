import { InjectionToken } from '@angular/core';

export const API_URL = new InjectionToken<string>('API_URL');

export const API_URL_PROVIDER = {
    provide: API_URL,
    useFactory: () => 'https://google.com'
};
