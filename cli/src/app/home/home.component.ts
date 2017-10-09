import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";

@Component({
  selector: "home",
  template: `
    <h3>{{ message }}</h3>
    <input type="text">
  `
})
export class HomeComponent implements OnInit {
  public message: string;

  constructor() {}

  ngOnInit() {
    this.message = "Hello";
  }
}
