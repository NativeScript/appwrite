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

//Generics information:
