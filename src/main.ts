import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
   enableProdMode();
}

const addStyleSheettoLink = (url: string) => {
   const link = document.createElement('link');
   link.type = 'text/css';
   link.rel = 'stylesheet';
   link.href = url;
   document.head.appendChild(link);
};

const setTheme = (theme: string) => {

};

platformBrowserDynamic().bootstrapModule(AppModule)
   .catch(err => console.error(err));
