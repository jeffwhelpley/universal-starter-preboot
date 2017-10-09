import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { BrowserPrebootModule } from "preboot/browser";

import { AppComponent, PLATFORM_TOKEN } from "./app.component";
import { HomeComponent } from "./home/home.component";

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: "my-app" }),
    BrowserPrebootModule.replayEvents(),
    RouterModule.forRoot([
      { path: "", component: HomeComponent, pathMatch: "full" },
      { path: "lazy", loadChildren: "./lazy/lazy.module#LazyModule" },
      { path: "lazy/nested", loadChildren: "./lazy/lazy.module#LazyModule" }
    ])
  ],
  providers: [{ provide: PLATFORM_TOKEN, useValue: "Client" }],
  bootstrap: [AppComponent]
})
export class AppModule {}
