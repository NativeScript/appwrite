import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedAppwrite } from '@demo/shared';
import {} from '@nativescript/appwrite';

/**
 * To run, add a .env to root of demo app with the following:
 * APP_WRITE_ENDPOINT=https://[YOUR_APPWRITE_ENDPOINT]
 * APP_WRITE_PROJECT_ID=[YOUR_APPWRITE_PROJECT_ID]
 */

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedAppwrite {}
