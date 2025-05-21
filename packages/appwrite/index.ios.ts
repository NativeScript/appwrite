import { Utils } from '@nativescript/core';

export class Client {
  private _native: NSCAppwriteClient;
  constructor() {
    this._native = NSCAppwriteClient.alloc().init();
  }

  setEndpoint(endpoint: string): this {
    this._native.setEndpoint(endpoint);
    return this;
  }

  setProject(project: string) {
    this._native.setProject(project);
    return this;
  }

  setKey(key: string) {
    this._native.setKey(key);
    return this;
  }

  setJWT(jwt: string) {
    this._native.setJWT(jwt);
    return this;
  }

  setSelfSigned(status: boolean) {
    this._native.setSelfSigned(status);
    return this;
  }

  setSession(session: string) {
    this._native.setSession(session);
    return this;
  }

  addHeader(key: string, value: string) {
    this._native.addHeader(key, value);
    return this;
  }

  setForwardedUserAgent(value: string): this {
    this._native.setForwardedUserAgent(value);
    return this;
  }

  setLocale(value: string): this {
    this._native.setLocale(value);
    return this;
  }

  get native() {
    return this._native;
  }
}

export class ID {
  static custom(id: string): string {
    return NSCAppwriteID.custom(id);
  }

  static unique(): string {
    return NSCAppwriteID.unique();
  }
}

export class Target {
  private _native: NSCAppwriteTarget;

  constructor(target: NSCAppwriteTarget) {
    this._native = target;
  }

  get native() {
    return this._native;
  }

  get createdAt(): string {
    return this.native.createdAt;
  }

  get expired(): boolean {
    return this.native.expired;
  }

  get id(): string {
    return this.native.id;
  }

  get identifier(): string {
    return this.native.identifier;
  }

  get name(): string {
    return this.native.name;
  }

  get providerId(): string {
    return this.native.providerId;
  }

  get providerType(): string {
    return this.native.providerType;
  }

  get updatedAt(): string {
    return this.native.updatedAt;
  }

  get userId(): string {
    return this.native.userId;
  }
}

export class User {
  private _native: NSCAppwriteUser;

  constructor(user: NSCAppwriteUser) {
    this._native = user;
  }

  get native() {
    return this._native;
  }

  get accessedAt(): string {
    return this.native.accessedAt;
  }

  get createdAt(): string {
    return this.native.createdAt;
  }

  get email(): string {
    return this.native.email;
  }

  get emailVerification(): boolean {
    return this.native.emailVerification;
  }

  get id(): string {
    return this.native.id;
  }

  get labels(): Array<string> {
    return Utils.dataDeserialize(this.native.labels);
  }

  get mfa(): boolean {
    return this.native.mfa;
  }

  get name(): string {
    return this.native.name;
  }

  get password(): string {
    return this.native.password;
  }

  get passwordUpdate(): string {
    return this.native.passwordUpdate;
  }

  get phone(): string {
    return this.native.phone;
  }

  get phoneVerification(): boolean {
    return this.native.phoneVerification;
  }

  get prefs(): Record<string, any> {
    return Utils.dataDeserialize(this.native.prefs);
  }

  get registration(): string {
    return this.native.registration;
  }

  get status(): boolean {
    return this.native.status;
  }

  get targets(): Array<Target> {
    const count = this.native.targets.count;
    const ret = new Array<Target>(count);
    for (let i = 0; i < count; i++) {
      const target = this.native.targets.objectAtIndex(i);
      ret[i] = new Target(target);
    }
    return ret;
  }

  get updatedAt(): string {
    return this.native.updatedAt;
  }

  get userHash(): string {
    return this.native.userHash;
  }

  toJSON() {
    try {
      const ret = JSON.parse(this.native.toJson());
      console.log(ret);
      return ret;
    } catch (error) {
      console.log('Error parsing JSON:', error);
      return {};
    }
  }
}

export class Account {
  private _native: NSCAppwriteAccount;

  constructor(client: Client) {
    this._native = NSCAppwriteAccount.alloc().initWithClient(client.native);
  }

  get native() {
    return this._native;
  }

  create(userId: string, email: string, password: string, name?: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.native.create(userId, email, password, name ?? null, (response, error) => {
        if (error) {
          reject(error);
        } else {
          resolve(new User(response));
        }
      });
    });
  }

  createEmailPasswordSession(email: string, password: string): Promise<Session> {
    return new Promise((resolve, reject) => {
      this.native.createEmailPasswordSession(email, password, (session, error) => {
        if (error) {
          reject(error);
        } else {
          resolve(new Session(session));
        }
      });
    });
  }

  createSession(userId: string, secret: string): Promise<Session> {
    return new Promise((resolve, reject) => {
      this.native.createSession(userId, secret, (session, error) => {
        if (error) {
          reject(error);
        } else {
          resolve(new Session(session));
        }
      });
    });
  }

  createAnonymousSession(): Promise<Session> {
    return new Promise((resolve, reject) => {
      this.native.createAnonymousSession((session, error) => {
        if (error) {
          reject(error);
        } else {
          resolve(new Session(session));
        }
      });
    });
  }

  deleteSession(sessionId: string): Promise<void> {
    return new Promise((resolve, reject) => {
      this.native.deleteSession(sessionId, (error) => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      });
    });
  }
}

export class Databases {
  private _native: NSCAppwriteDatabases;

  constructor(client: Client) {
    this._native = NSCAppwriteDatabases.alloc().init(client.native);
  }

  get native() {
    return this._native;
  }
}

export class Functions {
  private _native: NSCAppwriteFunctions;

  constructor(client: Client) {
    this._native = NSCAppwriteFunctions.alloc().init(client.native);
  }

  get native() {
    return this._native;
  }
}

export class Storage {
  private _native: NSCAppwriteStorage;

  constructor(client: Client) {
    this._native = NSCAppwriteStorage.alloc().init(client.native);
  }

  get native() {
    return this._native;
  }
}

export class Session {
  private _native: NSCAppwriteSession;

  constructor(session: NSCAppwriteSession) {
    this._native = session;
  }

  get native() {
    return this._native;
  }

  get clientCode(): string {
    return this.native.clientCode;
  }

  get clientEngine(): string {
    return this.native.clientEngine;
  }

  get clientEngineVersion(): string {
    return this.native.clientEngineVersion;
  }

  get clientName(): string {
    return this.native.clientName;
  }

  get clientType(): string {
    return this.native.clientType;
  }

  get clientVersion(): string {
    return this.native.clientVersion;
  }

  get countryCode(): string {
    return this.native.countryCode;
  }

  get countryName(): string {
    return this.native.countryName;
  }

  get createdAt(): string {
    return this.native.createdAt;
  }

  get current(): boolean {
    return this.native.current;
  }

  get deviceBrand(): string {
    return this.native.deviceBrand;
  }

  get deviceModel(): string {
    return this.native.deviceModel;
  }

  get deviceName(): string {
    return this.native.deviceName;
  }

  get expire(): string {
    return this.native.expire;
  }

  get factors(): Array<string> {
    return Utils.dataDeserialize(this.native.factors);
  }

  get id(): string {
    return this.native.id;
  }

  get ip(): string {
    return this.native.ip;
  }

  get mfaUpdatedAt(): string {
    return this.native.mfaUpdatedAt;
  }

  get osCode(): string {
    return this.native.osCode;
  }

  get osName(): string {
    return this.native.osName;
  }

  get osVersion(): string {
    return this.native.osVersion;
  }

  get provider(): string {
    return this.native.provider;
  }

  get providerAccessToken(): string {
    return this.native.providerAccessToken;
  }

  get providerAccessTokenExpiry(): string {
    return this.native.providerAccessTokenExpiry;
  }

  get providerRefreshToken(): string {
    return this.native.providerRefreshToken;
  }

  get providerUid(): string {
    return this.native.providerUid;
  }

  get secret(): string {
    return this.native.secret;
  }

  get updatedAt(): string {
    return this.native.updatedAt;
  }

  get userId(): string {
    return this.native.userId;
  }

  toJSON() {
    return {
      clientCode: this.clientCode,
      clientEngine: this.clientEngine,
      clientEngineVersion: this.clientEngineVersion,
      clientName: this.clientName,
      clientType: this.clientType,
      clientVersion: this.clientVersion,
      countryCode: this.countryCode,
      countryName: this.countryName,
      createdAt: this.createdAt,
      current: this.current,
      deviceBrand: this.deviceBrand,
      deviceModel: this.deviceModel,
      deviceName: this.deviceName,
      expire: this.expire,
      factors: this.factors,
      id: this.id,
      ip: this.ip,
      mfaUpdatedAt: this.mfaUpdatedAt,
      osCode: this.osCode,
      osName: this.osName,
      osVersion: this.osVersion,
      provider: this.provider,
      providerAccessToken: this.providerAccessToken,
      providerAccessTokenExpiry: this.providerAccessTokenExpiry,
      providerRefreshToken: this.providerRefreshToken,
      providerUid: this.providerUid,
      secret: this.secret,
      updatedAt: this.updatedAt,
      userId: this.userId,
    };
  }
}
