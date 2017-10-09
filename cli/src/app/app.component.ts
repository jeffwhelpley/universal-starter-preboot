import { Component, InjectionToken, Inject } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";

export const PLATFORM_TOKEN = new InjectionToken<string>("foo");

@Component({
  selector: "app-root",
  template: `
  <h1>Universal Demo {{ platform }}</h1>
  <a routerLink="/">Home</a>
  <a routerLink="/lazy">Lazy</a>
  <a routerLink="/lazy/nested">Lazy_Nested</a>
  <router-outlet></router-outlet>
  <button (click)="doIt()">Click me</button>
  `,
  styles: []
})
export class AppComponent {
  constructor(@Inject(PLATFORM_TOKEN) public platform: string) {}

  doIt() {
    console.log("clicked yo");
  }
}
