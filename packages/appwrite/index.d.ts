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

export class Target {
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

export class User {
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

export class Account {
  constructor(client: Client);

  readonly native: any;

  create(userId: string, email: string, password: string): Promise<any>;
  create(userId: string, email: string, password: string, name?: string): Promise<any>;

  createEmailPasswordSession(email: string, password: string): Promise<Session>;

  createAnonymousSession(): Promise<Session>;

  deleteSession(sessionId: string): Promise<void>;
}

export class Databases {
  constructor(client: Client);

  readonly native: any;
}

export class Functions {
  constructor(client: Client);

  readonly native: any;
}

export class Storage {
  constructor(client: Client);

  readonly native: any;
}

export class Session {
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
