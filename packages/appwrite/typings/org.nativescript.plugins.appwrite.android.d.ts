declare module org {
  export module nativescript {
    export module plugins {
      export module appwrite {
        export class Account {
          public static class: java.lang.Class<org.nativescript.plugins.appwrite.Account>;
          public static createEmailPasswordSession(account: io.appwrite.services.Account, email: string, password: string, callback: any): void;
          public constructor();
          public static create(account: io.appwrite.services.Account, userId: string, email: string, password: string, callback: any): void;
          public static create(account: io.appwrite.services.Account, userId: string, email: string, password: string, name: string, callback: any): void;
          public static createAnonymousSession(account: io.appwrite.services.Account, callback: any): void;
          public static deleteSession(account: io.appwrite.services.Account, sessionId: string, callback: any): void;
          public static createSession(account: io.appwrite.services.Account, userId: string, secret: string, callback: any): void;
        }
        export module Account {
          export class Companion {
            public static class: java.lang.Class<org.nativescript.plugins.appwrite.Account.Companion>;
            public createAnonymousSession(account: io.appwrite.services.Account, callback: any): void;
            public create(account: io.appwrite.services.Account, userId: string, email: string, password: string, callback: any): void;
            public createEmailPasswordSession(account: io.appwrite.services.Account, email: string, password: string, callback: any): void;
            public createSession(account: io.appwrite.services.Account, userId: string, secret: string, callback: any): void;
            public deleteSession(account: io.appwrite.services.Account, sessionId: string, callback: any): void;
            public create(account: io.appwrite.services.Account, userId: string, email: string, password: string, name: string, callback: any): void;
          }
        }
      }
    }
  }
}

declare module org {
  export module nativescript {
    export module plugins {
      export module appwrite {
        export class Databases {
          public static class: java.lang.Class<org.nativescript.plugins.appwrite.Databases>;
          public static deleteDocument(databases: io.appwrite.services.Databases, databaseId: string, collectionId: string, documentId: string, callback: any): void;
          public static createDocument(databases: io.appwrite.services.Databases, databaseId: string, collectionId: string, documentId: string, data: java.util.Map<string, any>, permissions: java.util.List<string>, callback: any): void;
          public static updateDocument(databases: io.appwrite.services.Databases, databaseId: string, collectionId: string, documentId: string, data: java.util.Map<string, any>, permissions: java.util.List<string>, callback: any): void;
          public constructor();
          public static listDocuments(databases: io.appwrite.services.Databases, databaseId: string, collectionId: string, queries: java.util.List<string>, callback: any): void;
          public static getDocument(databases: io.appwrite.services.Databases, databaseId: string, collectionId: string, documentId: string, queries: java.util.List<string>, callback: any): void;
        }
        export module Databases {
          export class Companion {
            public static class: java.lang.Class<org.nativescript.plugins.appwrite.Databases.Companion>;
            public createDocument(databases: io.appwrite.services.Databases, databaseId: string, collectionId: string, documentId: string, data: java.util.Map<string, any>, permissions: java.util.List<string>, callback: any): void;
            public updateDocument(databases: io.appwrite.services.Databases, databaseId: string, collectionId: string, documentId: string, data: java.util.Map<string, any>, permissions: java.util.List<string>, callback: any): void;
            public deleteDocument(databases: io.appwrite.services.Databases, databaseId: string, collectionId: string, documentId: string, callback: any): void;
            public getDocument(databases: io.appwrite.services.Databases, databaseId: string, collectionId: string, documentId: string, queries: java.util.List<string>, callback: any): void;
            public listDocuments(databases: io.appwrite.services.Databases, databaseId: string, collectionId: string, queries: java.util.List<string>, callback: any): void;
          }
        }
      }
    }
  }
}

declare module org {
  export module nativescript {
    export module plugins {
      export module appwrite {
        export class ID {
          public static class: java.lang.Class<org.nativescript.plugins.appwrite.ID>;
          public static unique(): string;
          public constructor();
          public static custom(value: string): string;
          public static unique(padding: number): string;
        }
        export module ID {
          export class Companion {
            public static class: java.lang.Class<org.nativescript.plugins.appwrite.ID.Companion>;
            public custom(value: string): string;
            public unique(padding: number): string;
            public unique(): string;
          }
        }
      }
    }
  }
}

declare module org {
  export module nativescript {
    export module plugins {
      export module appwrite {
        export class Query {
          public static class: java.lang.Class<org.nativescript.plugins.appwrite.Query>;
          public static lessThan(attribute: string, value: any): string;
          public static notEqual(attribute: string, value: any): string;
          public static select(attributes: java.util.List<string>): string;
          public static or(queries: java.util.List<string>): string;
          public static startsWith(attribute: string, value: string): string;
          public static endsWith(attribute: string, value: string): string;
          public static greaterThanEqual(attribute: string, value: any): string;
          public static isNotNull(attribute: string): string;
          public static equal(attribute: string, value: any): string;
          public static between(attribute: string, start: string, end: string): string;
          public static search(attribute: string, value: string): string;
          public static between(attribute: string, start: number, end: number): string;
          public static lessThanEqual(attribute: string, value: any): string;
          public static limit(limit: number): string;
          public constructor();
          public static orderDesc(attribute: string): string;
          public static offset(offset: number): string;
          public static contains(attribute: string, value: any): string;
          public static and(queries: java.util.List<string>): string;
          public static greaterThan(attribute: string, value: any): string;
          public static isNull(attribute: string): string;
          public static cursorBefore(id: string): string;
          public static orderAsc(attribute: string): string;
          public static cursorAfter(id: string): string;
        }
        export module Query {
          export class Companion {
            public static class: java.lang.Class<org.nativescript.plugins.appwrite.Query.Companion>;
            public between(attribute: string, start: string, end: string): string;
            public search(attribute: string, value: string): string;
            public endsWith(attribute: string, value: string): string;
            public orderDesc(attribute: string): string;
            public equal(attribute: string, value: any): string;
            public between(attribute: string, start: number, end: number): string;
            public isNull(attribute: string): string;
            public startsWith(attribute: string, value: string): string;
            public select(attributes: java.util.List<string>): string;
            public contains(attribute: string, value: any): string;
            public offset(offset: number): string;
            public cursorBefore(id: string): string;
            public lessThan(attribute: string, value: any): string;
            public greaterThan(attribute: string, value: any): string;
            public lessThanEqual(attribute: string, value: any): string;
            public isNotNull(attribute: string): string;
            public limit(limit: number): string;
            public orderAsc(attribute: string): string;
            public or(queries: java.util.List<string>): string;
            public and(queries: java.util.List<string>): string;
            public notEqual(attribute: string, value: any): string;
            public cursorAfter(id: string): string;
            public greaterThanEqual(attribute: string, value: any): string;
          }
        }
      }
    }
  }
}

//Generics information:
