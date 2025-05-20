import { Component, NgZone } from '@angular/core';
import { DemoSharedAppwrite } from '@demo/shared';
import {} from '@nativescript/appwrite';

@Component({
  selector: 'demo-appwrite',
  templateUrl: 'appwrite.component.html',
})
export class AppwriteComponent {
  demoShared: DemoSharedAppwrite;

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedAppwrite();
  }
}
