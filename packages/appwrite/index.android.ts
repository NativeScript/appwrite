import { Utils } from '@nativescript/core';

declare const kotlin: any;

export class Client {
  private _native: io.appwrite.Client;
  constructor() {
    this._native = new io.appwrite.Client();
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
    return org.nativescript.plugins.appwrite.ID.custom(id);
  }

  static unique(): string {
    return org.nativescript.plugins.appwrite.ID.unique();
  }
}

export class Target {
  private _native: io.appwrite.models.Target;

  constructor(target: io.appwrite.models.Target) {
    this._native = target;
  }

  get native() {
    return this._native;
  }

  get createdAt(): string {
    return this.native.getCreatedAt();
  }

  get expired(): boolean {
    return this.native.getExpired();
  }

  get id(): string {
    return this.native.getId();
  }

  get identifier(): string {
    return this.native.getIdentifier();
  }

  get name(): string {
    return this.native.getName();
  }

  get providerId(): string {
    return this.native.getProviderId();
  }

  get providerType(): string {
    return this.native.getProviderType();
  }

  get updatedAt(): string {
    return this.native.getUpdatedAt();
  }

  get userId(): string {
    return this.native.getUserId();
  }
}

export class User {
  private _native: io.appwrite.models.User<any>;

  constructor(user: io.appwrite.models.User<any>) {
    this._native = user;
  }

  get native() {
    return this._native;
  }

  get accessedAt(): string {
    return this.native.getAccessedAt();
  }

  get createdAt(): string {
    return this.native.getCreatedAt();
  }

  get email(): string {
    return this.native.getEmail();
  }

  get emailVerification(): boolean {
    return this.native.getEmailVerification();
  }

  get id(): string {
    return this.native.getId();
  }

  get labels(): Array<string> {
    return Utils.dataDeserialize(this.native.getLabels());
  }

  get mfa(): boolean {
    return this.native.getMfa();
  }

  get name(): string {
    return this.native.getName();
  }

  get password(): string {
    return this.native.getPassword();
  }

  get passwordUpdate(): string {
    return this.native.getPasswordUpdate();
  }

  get phone(): string {
    return this.native.getPhone();
  }

  get phoneVerification(): boolean {
    return this.native.getPhoneVerification();
  }

  get prefs(): Record<string, any> {
    return Utils.dataDeserialize(this.native.getPrefs);
  }

  get registration(): string {
    return this.native.getRegistration();
  }

  get status(): boolean {
    return this.native.getStatus();
  }

  get targets(): Array<Target> {
    const targets = this.native.getTargets();
    const count = targets.size();
    const ret = new Array<Target>(count);
    for (let i = 0; i < count; i++) {
      const target = targets.get(i);
      ret[i] = new Target(target);
    }
    return ret;
  }

  get updatedAt(): string {
    return this.native.getUpdatedAt();
  }

  get userHash(): string {
    return this.native.getHash();
  }

  toJSON() {
    return Utils.dataDeserialize(this.native.toMap());
  }
}

export class Account {
  private _native: io.appwrite.services.Account;

  constructor(client: Client) {
    this._native = new io.appwrite.services.Account(client.native);
  }

  get native() {
    return this._native;
  }

  create(userId: string, email: string, password: string, name?: string): Promise<any> {
    return new Promise((resolve, reject) => {
      org.nativescript.plugins.appwrite.Account.create(
        this.native,
        userId,
        email,
        password,
        name ?? null,
        new kotlin.jvm.functions.Function2({
          invoke(response, error) {
            if (error) {
              reject(error);
            } else {
              resolve(new User(response));
            }
          },
        }),
      );
    });
  }

  createSession(userId: string, secret: string): Promise<Session> {
    return new Promise((resolve, reject) => {
      org.nativescript.plugins.appwrite.Account.createSession(
        this.native,
        userId,
        secret,
        new kotlin.jvm.functions.Function2({
          invoke(session, error) {
            if (error) {
              reject(error);
            } else {
              resolve(new Session(session));
            }
          },
        }),
      );
    });
  }

  createEmailPasswordSession(email: string, password: string): Promise<Session> {
    return new Promise((resolve, reject) => {
      org.nativescript.plugins.appwrite.Account.createEmailPasswordSession(
        this.native,
        email,
        password,
        new kotlin.jvm.functions.Function2({
          invoke(session, error) {
            if (error) {
              reject(error);
            } else {
              resolve(new Session(session));
            }
          },
        }),
      );
    });
  }

  createAnonymousSession(): Promise<Session> {
    return new Promise((resolve, reject) => {
      org.nativescript.plugins.appwrite.Account.createAnonymousSession(
        this.native,
        new kotlin.jvm.functions.Function2({
          invoke(session, error) {
            if (error) {
              reject(error);
            } else {
              resolve(new Session(session));
            }
          },
        }),
      );
    });
  }

  deleteSession(sessionId: string): Promise<void> {
    return new Promise((resolve, reject) => {
      org.nativescript.plugins.appwrite.Account.deleteSession(
        this.native,
        sessionId,
        new kotlin.jvm.functions.Function1({
          invoke(error) {
            if (error) {
              reject(error);
            } else {
              resolve();
            }
          },
        }),
      );
    });
  }
}

export class Databases {
  private _native: io.appwrite.services.Databases;

  constructor(client: Client) {
    this._native = new io.appwrite.services.Databases(client.native);
  }

  get native() {
    return this._native;
  }
}

export class Functions {
  private _native: io.appwrite.services.Functions;

  constructor(client: Client) {
    this._native = new io.appwrite.services.Functions(client.native);
  }

  get native() {
    return this._native;
  }
}

export class Storage {
  private _native: io.appwrite.services.Storage;

  constructor(client: Client) {
    this._native = new io.appwrite.services.Storage(client.native);
  }

  get native() {
    return this._native;
  }
}

export class Session {
  private _native: io.appwrite.models.Session;

  constructor(session: io.appwrite.models.Session) {
    this._native = session;
  }

  get native() {
    return this._native;
  }

  get clientCode(): string {
    return this.native.getClientCode();
  }

  get clientEngine(): string {
    return this.native.getClientEngine();
  }

  get clientEngineVersion(): string {
    return this.native.getClientEngineVersion();
  }

  get clientName(): string {
    return this.native.getClientName();
  }

  get clientType(): string {
    return this.native.getClientType();
  }

  get clientVersion(): string {
    return this.native.getClientVersion();
  }

  get countryCode(): string {
    return this.native.getCountryCode();
  }

  get countryName(): string {
    return this.native.getCountryName();
  }

  get createdAt(): string {
    return this.native.getCreatedAt();
  }

  get current(): boolean {
    return this.native.getCurrent();
  }

  get deviceBrand(): string {
    return this.native.getDeviceBrand();
  }

  get deviceModel(): string {
    return this.native.getDeviceModel();
  }

  get deviceName(): string {
    return this.native.getDeviceName();
  }

  get expire(): string {
    return this.native.getExpire();
  }

  get factors(): Array<string> {
    return Utils.dataDeserialize(this.native.getFactors());
  }

  get id(): string {
    return this.native.getId();
  }

  get ip(): string {
    return this.native.getIp();
  }

  get mfaUpdatedAt(): string {
    return this.native.getMfaUpdatedAt();
  }

  get osCode(): string {
    return this.native.getOsCode();
  }

  get osName(): string {
    return this.native.getOsName();
  }

  get osVersion(): string {
    return this.native.getOsVersion();
  }

  get provider(): string {
    return this.native.getProvider();
  }

  get providerAccessToken(): string {
    return this.native.getProviderAccessToken();
  }

  get providerAccessTokenExpiry(): string {
    return this.native.getProviderAccessTokenExpiry();
  }

  get providerRefreshToken(): string {
    return this.native.getProviderRefreshToken();
  }

  get providerUid(): string {
    return this.native.getProviderUid();
  }

  get secret(): string {
    return this.native.getSecret();
  }

  get updatedAt(): string {
    return this.native.getUpdatedAt();
  }

  get userId(): string {
    return this.native.getUserId();
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
