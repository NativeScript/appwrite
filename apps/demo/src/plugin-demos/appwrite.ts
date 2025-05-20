import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedAppwrite } from '@demo/shared';
import {} from '@nativescript/appwrite';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedAppwrite {}
