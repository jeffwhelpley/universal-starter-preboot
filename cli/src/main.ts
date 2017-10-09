import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app/app.module";
import { environment } from "./environments/environment";

if (environment.production) {
  enableProdMode();
}

console.log("before setTimeout");
setTimeout(() => {
  console.log("starting client load...");

  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .then(() => console.log("done with client loading"))
    .catch(err => console.error(err));
}, 4000);
