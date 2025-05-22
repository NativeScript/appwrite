declare class NSCAppwriteAccount extends NSObject {
  static alloc(): NSCAppwriteAccount; // inherited from NSObject

  static new(): NSCAppwriteAccount; // inherited from NSObject

  constructor(o: { client: NSCAppwriteClient });

  create(userId: string, email: string, password: string, name: string, callback: (p1: NSCAppwriteUser, p2: NSError) => void): void;

  createAnonymousSession(callback: (p1: NSCAppwriteSession, p2: NSError) => void): void;

  createEmailPasswordSession(email: string, password: string, callback: (p1: NSCAppwriteSession, p2: NSError) => void): void;

  createSession(userId: string, secret: string, callback: (p1: NSCAppwriteSession, p2: NSError) => void): void;

  deleteSession(sessionId: string, callback: (p1: NSError) => void): void;

  initWithClient(client: NSCAppwriteClient): this;
}

declare class NSCAppwriteClient extends NSObject {
  static alloc(): NSCAppwriteClient; // inherited from NSObject

  static new(): NSCAppwriteClient; // inherited from NSObject

  addHeader(key: string, value: string): NSCAppwriteClient;

  setEndpoint(value: string): NSCAppwriteClient;

  setForwardedUserAgent(value: string): NSCAppwriteClient;

  setJWT(value: string): NSCAppwriteClient;

  setKey(value: string): NSCAppwriteClient;

  setLocale(value: string): NSCAppwriteClient;

  setProject(value: string): NSCAppwriteClient;

  setSelfSigned(status: boolean): NSCAppwriteClient;

  setSession(value: string): NSCAppwriteClient;
}

declare class NSCAppwriteDatabases extends NSObject {
  static alloc(): NSCAppwriteDatabases; // inherited from NSObject

  static new(): NSCAppwriteDatabases; // inherited from NSObject

  constructor();

  createDocument(databaseId: string, collectionId: string, documentId: string, data: NSDictionary<string, any>, permissions: NSArray<string> | string[], callback: (p1: NSCAppwriteDocument, p2: NSError) => void): void;

  deleteDocument(databaseId: string, collectionId: string, documentId: string, callback: (p1: NSError) => void): void;

  getDocument(databaseId: string, collectionId: string, documentId: string, queries: NSArray<string> | string[], callback: (p1: NSCAppwriteDocument, p2: NSError) => void): void;

  init(client: NSCAppwriteClient): this;

  listDocuments(databaseId: string, collectionId: string, queries: NSArray<string> | string[], callback: (p1: NSArray<NSCAppwriteDocument>, p2: NSError) => void): void;

  updateDocument(databaseId: string, collectionId: string, documentId: string, data: NSDictionary<string, NSObject>, permissions: NSArray<string> | string[], callback: (p1: NSCAppwriteDocument, p2: NSError) => void): void;
}

declare class NSCAppwriteDocument extends NSObject {
  static alloc(): NSCAppwriteDocument; // inherited from NSObject

  static new(): NSCAppwriteDocument; // inherited from NSObject

  readonly collectionId: string;

  readonly createdAt: string;

  readonly data: NSDictionary<any, any>;

  readonly databaseId: string;

  readonly id: string;

  readonly jsonData: NSCAppwriteJSONValue;

  readonly permissions: NSArray<string>;

  readonly updatedAt: string;
}

declare class NSCAppwriteFunctions extends NSObject {
  static alloc(): NSCAppwriteFunctions; // inherited from NSObject

  static new(): NSCAppwriteFunctions; // inherited from NSObject

  constructor();

  init(client: NSCAppwriteClient): this;
}

declare class NSCAppwriteID extends NSObject {
  static alloc(): NSCAppwriteID; // inherited from NSObject

  static custom(id: string): string;

  static new(): NSCAppwriteID; // inherited from NSObject

  static unique(): string;

  static uniqueWithPadding(padding: number): string;
}

declare class NSCAppwriteJSONValue extends NSObject {
  static alloc(): NSCAppwriteJSONValue; // inherited from NSObject

  static new(): NSCAppwriteJSONValue; // inherited from NSObject

  arrayValue: NSArray<NSCAppwriteJSONValue>;

  dataValue: NSData;

  dateValue: Date;

  readonly json: any;

  objectValue: NSDictionary<string, NSCAppwriteJSONValue>;

  stringValue: string;

  readonly value: any;

  constructor(o: { array: NSArray<NSCAppwriteJSONValue> | NSCAppwriteJSONValue[] });

  constructor(o: { boolean: boolean });

  constructor(o: { data: NSData });

  constructor(o: { date: Date });

  constructor(o: { double: number });

  constructor(o: { integer: number });

  constructor(o: { object: NSDictionary<string, NSCAppwriteJSONValue> });

  constructor(o: { string: string });

  initWithArray(array: NSArray<NSCAppwriteJSONValue> | NSCAppwriteJSONValue[]): this;

  initWithBoolean(boolean: boolean): this;

  initWithData(data: NSData): this;

  initWithDate(date: Date): this;

  initWithDouble(double_: number): this;

  initWithInteger(integer: number): this;

  initWithObject(object: NSDictionary<string, NSCAppwriteJSONValue>): this;

  initWithString(string: string): this;
}

declare class NSCAppwriteQuery extends NSObject {
  static alloc(): NSCAppwriteQuery; // inherited from NSObject

  static betweenStartDEndD(attribute: string, startD: number, endD: number): string;

  static betweenStartEnd(attribute: string, start: number, end: number): string;

  static betweenStartSEndS(attribute: string, startS: string, endS: string): string;

  static containsValue(attribute: string, value: any): string;

  static cursorAfter(id: string): string;

  static cursorBefore(id: string): string;

  static endsWithValue(attribute: string, value: string): string;

  static equalValue(attribute: string, value: any): string;

  static greaterThanEqualValue(attribute: string, value: any): string;

  static greaterThanValue(attribute: string, value: any): string;

  static isNotNull(attribute: string): string;

  static isNull(attribute: string): string;

  static lessThanEqualWithAttributeValue(attribute: string, value: any): string;

  static lessThanValue(attribute: string, value: any): string;

  static limit(limit: number): string;

  static new(): NSCAppwriteQuery; // inherited from NSObject

  static notEqualValue(attribute: string, value: any): string;

  static offset(offset: number): string;

  static orderAsc(attribute: string): string;

  static orderDesc(attribute: string): string;

  static searchValue(attribute: string, value: string): string;

  static select(attributes: NSArray<string> | string[]): string;

  static startsWithValue(attribute: string, value: string): string;
}

declare class NSCAppwriteSession extends NSObject {
  static alloc(): NSCAppwriteSession; // inherited from NSObject

  static new(): NSCAppwriteSession; // inherited from NSObject

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

  readonly factors: NSArray<string>;

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

declare class NSCAppwriteStorage extends NSObject {
  static alloc(): NSCAppwriteStorage; // inherited from NSObject

  static new(): NSCAppwriteStorage; // inherited from NSObject

  constructor();

  init(client: NSCAppwriteClient): this;
}

declare class NSCAppwriteTarget extends NSObject {
  static alloc(): NSCAppwriteTarget; // inherited from NSObject

  static new(): NSCAppwriteTarget; // inherited from NSObject

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

declare class NSCAppwriteUser extends NSObject {
  static alloc(): NSCAppwriteUser; // inherited from NSObject

  static new(): NSCAppwriteUser; // inherited from NSObject

  readonly accessedAt: string;

  readonly createdAt: string;

  readonly email: string;

  readonly emailVerification: boolean;

  readonly id: string;

  readonly labels: NSArray<string>;

  readonly mfa: boolean;

  readonly name: string;

  readonly password: string;

  readonly passwordUpdate: string;

  readonly phone: string;

  readonly phoneVerification: boolean;

  readonly prefs: NSDictionary<string, any>;

  readonly registration: string;

  readonly status: boolean;

  readonly targets: NSArray<NSCAppwriteTarget>;

  readonly updatedAt: string;

  readonly userHash: string;

  toJson(): string;
}

declare class NativeScriptContainerCtrl extends UIViewController {
  static alloc(): NativeScriptContainerCtrl; // inherited from NSObject

  static new(): NativeScriptContainerCtrl; // inherited from NSObject

  updateData: (p1: NSMutableDictionary<any, any>) => void;
}

/**
 * @since 13.0
 */
declare class NativeScriptViewFactory extends NSObject implements NativeScriptEmbedderDelegate {
  static alloc(): NativeScriptViewFactory; // inherited from NSObject

  /**
   * @since 15.0
   */
  static getKeyWindow(): UIWindow;

  static initShared(): void;

  static new(): NativeScriptViewFactory; // inherited from NSObject

  static setApp(value: NativeScriptContainerCtrl): void;

  static setShared(value: NativeScriptViewFactory): void;

  viewCreator: (p1: string) => void;

  viewDestroyer: (p1: string) => void;

  views: NSMutableDictionary<any, any>;

  static app: NativeScriptContainerCtrl;

  static shared: NativeScriptViewFactory;

  getViewById(id: string): UIView;

  presentNativeScriptApp(vc: UIViewController): any;
}
