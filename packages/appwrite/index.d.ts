export declare class Client {
  constructor();

  readonly native: any;

  setEndpoint(endpoint: string): this;

  setProject(project: string): this;

  setKey(key: string): this;

  setJWT(jwt: string): this;

  setSelfSigned(status: boolean): this;

  setSession(session: string): this;

  addHeader(key: string, value: string): this;

  setForwardedUserAgent(value: string): this;

  setLocale(value: string): this;
}

export declare class ID {
  static custom(id: string): string;

  static unique(): string;
}

export declare class Target {
  private constructor();

  readonly native: any;
  readonly createdAt: string;

  readonly expired: boolean;

  readonly id: string;

  readonly identifier: string;

  readonly name: string;

  readonly providerId: string;

  readonly providerType: string;

  readonly updatedAt: string;

  readonly userId: string;
}

export declare class User {
  private constructor();

  readonly native: any;

  readonly accessedAt: string;

  readonly createdAt: string;

  readonly email: string;

  readonly emailVerification: boolean;

  readonly id: string;

  readonly labels: Array<string>;

  readonly mfa: boolean;

  readonly name: string;

  readonly password: string;

  readonly passwordUpdate: string;

  readonly phone: string;

  readonly phoneVerification: boolean;

  readonly prefs: Record<string, any>;

  readonly registration: string;

  readonly status: boolean;

  readonly targets: Array<Target>;

  readonly updatedAt: string;

  readonly userHash: string;
}

export declare class Account {
  constructor(client: Client);

  readonly native: any;

  create(userId: string, email: string, password: string): Promise<any>;
  create(userId: string, email: string, password: string, name?: string): Promise<any>;

  createEmailPasswordSession(email: string, password: string): Promise<Session>;

  createAnonymousSession(): Promise<Session>;

  deleteSession(sessionId: string): Promise<void>;
}

export declare class Document {
  private constructor();

  readonly native: any;

  readonly collectionId: string;

  readonly createdAt: string;

  readonly data: NSDictionary<any, any>;

  readonly databaseId: string;

  readonly id: string;

  readonly permissions: NSArray<string>;

  readonly updatedAt: string;
}

export declare class Databases {
  constructor(client: Client);

  readonly native: any;

  public createDocument(databaseId: string, collectionId: string, documentId: string): Promise<Document>;

  public createDocument(databaseId: string, collectionId: string, documentId: string, data: Record<string, any>): Promise<Document>;

  public createDocument(databaseId: string, collectionId: string, documentId: string, data: Record<string, any>, permissions: Array<string>): Promise<Document>;

  public getDocument(databaseId: string, collectionId: string, documentId: string): Promise<Document>;

  public getDocument(databaseId: string, collectionId: string, documentId: string, queries: Array<string>): Promise<Document>;

  public listDocuments(databaseId: string, collectionId: string): Promise<Array<Document>>;

  public listDocuments(databaseId: string, collectionId: string, queries: Array<string> = []): Promise<Array<Document>>;

  public updateDocument(databaseId: string, collectionId: string, documentId: string, data: Record<string, any>): Promise<Document>;

  public updateDocument(databaseId: string, collectionId: string, documentId: string, data: Record<string, any>, permissions: Array<string>): Promise<Document>;

  public deleteDocument(databaseId: string, collectionId: string, documentId: string): Promise<void>;
}

export declare class Functions {
  constructor(client: Client);

  readonly native: any;
}

export declare class Storage {
  constructor(client: Client);

  readonly native: any;
}

export declare class Session {
  private constructor();

  readonly native: any;

  readonly clientCode: string;

  readonly clientEngine: string;

  readonly clientEngineVersion: string;

  readonly clientName: string;

  readonly clientType: string;

  readonly clientVersion: string;

  readonly countryCode: string;

  readonly countryName: string;

  readonly createdAt: string;

  readonly current: boolean;

  readonly deviceBrand: string;

  readonly deviceModel: string;

  readonly deviceName: string;

  readonly expire: string;

  readonly factors: Array<string>;

  readonly id: string;

  readonly ip: string;

  readonly mfaUpdatedAt: string;

  readonly osCode: string;

  readonly osName: string;

  readonly osVersion: string;

  readonly provider: string;

  readonly providerAccessToken: string;

  readonly providerAccessTokenExpiry: string;

  readonly providerRefreshToken: string;

  readonly providerUid: string;

  readonly secret: string;

  readonly updatedAt: string;

  readonly userId: string;
}

export declare class Query {
  static between(attribute: string, start: number, end: number): string;

  static between(attribute: string, start: string, end: string): string;

  static contains(attribute: string, value: any): string;

  static cursorAfter(id: string): string;

  static cursorBefore(id: string): string;

  static endsWith(attribute: string, value: string): string;

  static equal(attribute: string, value: any): string;

  static greaterThanEqual(attribute: string, value: any): string;

  static greaterThan(attribute: string, value: any): string;

  static isNotNull(attribute: string): string;

  static isNull(attribute: string): string;

  static lessThanEqualWithAttribute(attribute: string, value: any): string;

  static lessThan(attribute: string, value: any): string;

  static limit(limit: number): string;

  static notEqual(attribute: string, value: any): string;

  static offset(offset: number): string;

  static orderAsc(attribute: string): string;

  static orderDesc(attribute: string): string;

  static search(attribute: string, value: string): string;

  static select(attributes: string[]): string;

  static startsWith(attribute: string, value: string): string;
}
