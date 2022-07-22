import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

/**
 * This will allow us to determine if we are in production or not
 * Initializing before the app is loaded
 */
if (environment.production) {
    enableProdMode();
}

/**
 * 
 * #Ahead-Of-Time Complilation: 
 * 
 * platformBrowserDynamic function will load an object with information on the current platform, in this case, the platform is the browser.
 * 
 * Then we take the AppModule and import it into a bootstrapModule function which is chained off our inital function. The boostrapModule will act as the glue that will build the app while logging any errors that would come about during compliation
 */
platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));