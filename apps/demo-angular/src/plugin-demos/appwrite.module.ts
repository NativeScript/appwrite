import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { AppwriteComponent } from './appwrite.component';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: AppwriteComponent }])],
  declarations: [AppwriteComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppwriteModule {}
