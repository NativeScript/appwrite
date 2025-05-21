declare class BuildConfig {
  public static class: java.lang.Class<BuildConfig>;
  public static SDK_VERSION: string;
  public constructor();
}

declare module io {
  export module appwrite {
    export class Client {
      public static class: java.lang.Class<io.appwrite.Client>;
      public http: okhttp3.OkHttpClient;
      public httpForRedirect: okhttp3.OkHttpClient;
      public static CHUNK_SIZE: number = 5242880;
      public setLocale(value: string): io.appwrite.Client;
      public setSelfSigned(sslContext: boolean): io.appwrite.Client;
      public redirect(this_: string, method: string, path: java.util.Map<string, string>, headers: java.util.Map<string, any>, params: any): any;
      public getHttp(): okhttp3.OkHttpClient;
      public constructor(endPoint: string, selfSigned: boolean);
      public setSession(value: string): io.appwrite.Client;
      public setForwardedUserAgent(value: string): io.appwrite.Client;
      public setKey(value: string): io.appwrite.Client;
      public addHeader(key: string, value: string): io.appwrite.Client;
      public chunkedUpload(this_: string, this_: java.util.Map<any, any>, this_: java.util.Map<any, any>, this_: java.lang.Class<any>, this_: any, this_: string, this_: string, this_: any, this_: any): any;
      public setHttpForRedirect(value: okhttp3.OkHttpClient): void;
      public prepareRequest(it: string, entry$iv: string, $i$f$filterValues: java.util.Map<string, string>, result$iv: java.util.Map<string, any>, $this$filterValues$iv: any): any;
      public setJWT(value: string): io.appwrite.Client;
      public getEndPoint(): string;
      public getHttpForRedirect(): okhttp3.OkHttpClient;
      public constructor();
      public setEndpoint(this_: string): io.appwrite.Client;
      public constructor(endPoint: string);
      public call(this_: string, method: string, path: java.util.Map<any, any>, headers: java.util.Map<any, any>, params: java.lang.Class<any>, responseType: any, responseType: any): any;
      public setProject(value: string): io.appwrite.Client;
      public getCoroutineContext(): any;
      public getConfig(): java.util.Map<string, string>;
      public ping(apiParams: any): any;
      public setHttp(value: okhttp3.OkHttpClient): void;
      public setEndPoint(value: string): void;
    }
    export module Client {
      export class Companion {
        public static class: java.lang.Class<io.appwrite.Client.Companion>;
      }
    }
  }
}

declare module io {
  export module appwrite {
    export class ID {
      public static class: java.lang.Class<io.appwrite.ID>;
      public constructor();
    }
    export module ID {
      export class Companion {
        public static class: java.lang.Class<io.appwrite.ID.Companion>;
        public unique(it: number): string;
        public custom(id: string): string;
      }
    }
  }
}

declare module io {
  export module appwrite {
    export class Permission {
      public static class: java.lang.Class<io.appwrite.Permission>;
      public constructor();
    }
    export module Permission {
      export class Companion {
        public static class: java.lang.Class<io.appwrite.Permission.Companion>;
        public write(role: string): string;
        public read(role: string): string;
        public update(role: string): string;
        public create(role: string): string;
        public delete(role: string): string;
      }
    }
  }
}

declare module io {
  export module appwrite {
    export class Query {
      public static class: java.lang.Class<io.appwrite.Query>;
      public toString(): string;
      public getValues(): java.util.List<any>;
      public constructor(method: string, attribute: string, values: java.util.List<any>);
      public getMethod(): string;
      public getAttribute(): string;
    }
    export module Query {
      export class Companion {
        public static class: java.lang.Class<io.appwrite.Query.Companion>;
        public select(attributes: java.util.List<string>): string;
        public startsWith(attribute: string, value: string): string;
        public isNotNull(attribute: string): string;
        public orderAsc(attribute: string): string;
        public cursorBefore(documentId: string): string;
        public offset(offset: number): string;
        public contains(attribute: string, value: any): string;
        public and($this$fromJson$iv: java.util.List<string>): string;
        public limit(limit: number): string;
        public isNull(attribute: string): string;
        public between(attribute: string, start: any, end: any): string;
        public or($this$fromJson$iv: java.util.List<string>): string;
        public search(attribute: string, value: string): string;
        public equal(attribute: string, value: any): string;
        public lessThanEqual(attribute: string, value: any): string;
        public lessThan(attribute: string, value: any): string;
        public notEqual(attribute: string, value: any): string;
        public orderDesc(attribute: string): string;
        public greaterThan(attribute: string, value: any): string;
        public greaterThanEqual(attribute: string, value: any): string;
        public endsWith(attribute: string, value: string): string;
        public cursorAfter(documentId: string): string;
      }
    }
  }
}

declare module io {
  export module appwrite {
    export class Role {
      public static class: java.lang.Class<io.appwrite.Role>;
      public constructor();
    }
    export module Role {
      export class Companion {
        public static class: java.lang.Class<io.appwrite.Role.Companion>;
        public users(status: string): string;
        public member(id: string): string;
        public any(): string;
        public user(id: string, status: string): string;
        public guests(): string;
        public team(id: string, role: string): string;
        public label(name: string): string;
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module coroutines {
      export class Callback<T> extends java.lang.Object {
        public static class: java.lang.Class<io.appwrite.coroutines.Callback<any>>;
        /**
         * Constructs a new instance of the io.appwrite.coroutines.Callback<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { onComplete(param0: T, param1: java.lang.Throwable): void });
        public constructor();
        public onComplete(param0: T, param1: java.lang.Throwable): void;
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module coroutines {
      export class CoroutineCallback<T> extends java.lang.Object {
        public static class: java.lang.Class<io.appwrite.coroutines.CoroutineCallback<any>>;
        public constructor(callback: io.appwrite.coroutines.Callback<any>);
        public constructor(callback: io.appwrite.coroutines.Callback<any>, context: any);
        public getContext(): any;
        public resumeWith(result: any): void;
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module enums {
      export class Adapter {
        public static class: java.lang.Class<io.appwrite.enums.Adapter>;
        public static STATIC: io.appwrite.enums.Adapter;
        public static SSR: io.appwrite.enums.Adapter;
        public static valueOf(value: string): io.appwrite.enums.Adapter;
        public getValue(): string;
        public static getEntries(): any;
        public static values(): androidNative.Array<io.appwrite.enums.Adapter>;
        public toString(): string;
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module enums {
      export class AuthenticationFactor {
        public static class: java.lang.Class<io.appwrite.enums.AuthenticationFactor>;
        public static EMAIL: io.appwrite.enums.AuthenticationFactor;
        public static PHONE: io.appwrite.enums.AuthenticationFactor;
        public static TOTP: io.appwrite.enums.AuthenticationFactor;
        public static RECOVERYCODE: io.appwrite.enums.AuthenticationFactor;
        public static valueOf(value: string): io.appwrite.enums.AuthenticationFactor;
        public static getEntries(): any;
        public getValue(): string;
        public static values(): androidNative.Array<io.appwrite.enums.AuthenticationFactor>;
        public toString(): string;
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module enums {
      export class AuthenticatorType {
        public static class: java.lang.Class<io.appwrite.enums.AuthenticatorType>;
        public static TOTP: io.appwrite.enums.AuthenticatorType;
        public static values(): androidNative.Array<io.appwrite.enums.AuthenticatorType>;
        public getValue(): string;
        public static valueOf(value: string): io.appwrite.enums.AuthenticatorType;
        public toString(): string;
        public static getEntries(): any;
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module enums {
      export class Browser {
        public static class: java.lang.Class<io.appwrite.enums.Browser>;
        public static AVANT_BROWSER: io.appwrite.enums.Browser;
        public static ANDROID_WEBVIEW_BETA: io.appwrite.enums.Browser;
        public static GOOGLE_CHROME: io.appwrite.enums.Browser;
        public static GOOGLE_CHROME_IOS: io.appwrite.enums.Browser;
        public static GOOGLE_CHROME_MOBILE: io.appwrite.enums.Browser;
        public static CHROMIUM: io.appwrite.enums.Browser;
        public static MOZILLA_FIREFOX: io.appwrite.enums.Browser;
        public static SAFARI: io.appwrite.enums.Browser;
        public static MOBILE_SAFARI: io.appwrite.enums.Browser;
        public static MICROSOFT_EDGE: io.appwrite.enums.Browser;
        public static MICROSOFT_EDGE_IOS: io.appwrite.enums.Browser;
        public static OPERA_MINI: io.appwrite.enums.Browser;
        public static OPERA: io.appwrite.enums.Browser;
        public static OPERA_NEXT: io.appwrite.enums.Browser;
        public static getEntries(): any;
        public static values(): androidNative.Array<io.appwrite.enums.Browser>;
        public static valueOf(value: string): io.appwrite.enums.Browser;
        public getValue(): string;
        public toString(): string;
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module enums {
      export class BuildRuntime {
        public static class: java.lang.Class<io.appwrite.enums.BuildRuntime>;
        public static NODE_14_5: io.appwrite.enums.BuildRuntime;
        public static NODE_16_0: io.appwrite.enums.BuildRuntime;
        public static NODE_18_0: io.appwrite.enums.BuildRuntime;
        public static NODE_19_0: io.appwrite.enums.BuildRuntime;
        public static NODE_20_0: io.appwrite.enums.BuildRuntime;
        public static NODE_21_0: io.appwrite.enums.BuildRuntime;
        public static NODE_22: io.appwrite.enums.BuildRuntime;
        public static PHP_8_0: io.appwrite.enums.BuildRuntime;
        public static PHP_8_1: io.appwrite.enums.BuildRuntime;
        public static PHP_8_2: io.appwrite.enums.BuildRuntime;
        public static PHP_8_3: io.appwrite.enums.BuildRuntime;
        public static RUBY_3_0: io.appwrite.enums.BuildRuntime;
        public static RUBY_3_1: io.appwrite.enums.BuildRuntime;
        public static RUBY_3_2: io.appwrite.enums.BuildRuntime;
        public static RUBY_3_3: io.appwrite.enums.BuildRuntime;
        public static PYTHON_3_8: io.appwrite.enums.BuildRuntime;
        public static PYTHON_3_9: io.appwrite.enums.BuildRuntime;
        public static PYTHON_3_10: io.appwrite.enums.BuildRuntime;
        public static PYTHON_3_11: io.appwrite.enums.BuildRuntime;
        public static PYTHON_3_12: io.appwrite.enums.BuildRuntime;
        public static PYTHON_ML_3_11: io.appwrite.enums.BuildRuntime;
        public static PYTHON_ML_3_12: io.appwrite.enums.BuildRuntime;
        public static DENO_1_21: io.appwrite.enums.BuildRuntime;
        public static DENO_1_24: io.appwrite.enums.BuildRuntime;
        public static DENO_1_35: io.appwrite.enums.BuildRuntime;
        public static DENO_1_40: io.appwrite.enums.BuildRuntime;
        public static DENO_1_46: io.appwrite.enums.BuildRuntime;
        public static DENO_2_0: io.appwrite.enums.BuildRuntime;
        public static DART_2_15: io.appwrite.enums.BuildRuntime;
        public static DART_2_16: io.appwrite.enums.BuildRuntime;
        public static DART_2_17: io.appwrite.enums.BuildRuntime;
        public static DART_2_18: io.appwrite.enums.BuildRuntime;
        public static DART_2_19: io.appwrite.enums.BuildRuntime;
        public static DART_3_0: io.appwrite.enums.BuildRuntime;
        public static DART_3_1: io.appwrite.enums.BuildRuntime;
        public static DART_3_3: io.appwrite.enums.BuildRuntime;
        public static DART_3_5: io.appwrite.enums.BuildRuntime;
        public static DOTNET_6_0: io.appwrite.enums.BuildRuntime;
        public static DOTNET_7_0: io.appwrite.enums.BuildRuntime;
        public static DOTNET_8_0: io.appwrite.enums.BuildRuntime;
        public static JAVA_8_0: io.appwrite.enums.BuildRuntime;
        public static JAVA_11_0: io.appwrite.enums.BuildRuntime;
        public static JAVA_17_0: io.appwrite.enums.BuildRuntime;
        public static JAVA_18_0: io.appwrite.enums.BuildRuntime;
        public static JAVA_21_0: io.appwrite.enums.BuildRuntime;
        public static JAVA_22: io.appwrite.enums.BuildRuntime;
        public static SWIFT_5_5: io.appwrite.enums.BuildRuntime;
        public static SWIFT_5_8: io.appwrite.enums.BuildRuntime;
        public static SWIFT_5_9: io.appwrite.enums.BuildRuntime;
        public static SWIFT_5_10: io.appwrite.enums.BuildRuntime;
        public static KOTLIN_1_6: io.appwrite.enums.BuildRuntime;
        public static KOTLIN_1_8: io.appwrite.enums.BuildRuntime;
        public static KOTLIN_1_9: io.appwrite.enums.BuildRuntime;
        public static KOTLIN_2_0: io.appwrite.enums.BuildRuntime;
        public static CPP_17: io.appwrite.enums.BuildRuntime;
        public static CPP_20: io.appwrite.enums.BuildRuntime;
        public static BUN_1_0: io.appwrite.enums.BuildRuntime;
        public static BUN_1_1: io.appwrite.enums.BuildRuntime;
        public static GO_1_23: io.appwrite.enums.BuildRuntime;
        public static STATIC_1: io.appwrite.enums.BuildRuntime;
        public static FLUTTER_3_24: io.appwrite.enums.BuildRuntime;
        public static FLUTTER_3_27: io.appwrite.enums.BuildRuntime;
        public static FLUTTER_3_29: io.appwrite.enums.BuildRuntime;
        public getValue(): string;
        public static valueOf(value: string): io.appwrite.enums.BuildRuntime;
        public static values(): androidNative.Array<io.appwrite.enums.BuildRuntime>;
        public toString(): string;
        public static getEntries(): any;
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module enums {
      export class Compression {
        public static class: java.lang.Class<io.appwrite.enums.Compression>;
        public static NONE: io.appwrite.enums.Compression;
        public static GZIP: io.appwrite.enums.Compression;
        public static ZSTD: io.appwrite.enums.Compression;
        public static valueOf(value: string): io.appwrite.enums.Compression;
        public static getEntries(): any;
        public getValue(): string;
        public static values(): androidNative.Array<io.appwrite.enums.Compression>;
        public toString(): string;
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module enums {
      export class CreditCard {
        public static class: java.lang.Class<io.appwrite.enums.CreditCard>;
        public static AMERICAN_EXPRESS: io.appwrite.enums.CreditCard;
        public static ARGENCARD: io.appwrite.enums.CreditCard;
        public static CABAL: io.appwrite.enums.CreditCard;
        public static CENCOSUD: io.appwrite.enums.CreditCard;
        public static DINERS_CLUB: io.appwrite.enums.CreditCard;
        public static DISCOVER: io.appwrite.enums.CreditCard;
        public static ELO: io.appwrite.enums.CreditCard;
        public static HIPERCARD: io.appwrite.enums.CreditCard;
        public static JCB: io.appwrite.enums.CreditCard;
        public static MASTERCARD: io.appwrite.enums.CreditCard;
        public static NARANJA: io.appwrite.enums.CreditCard;
        public static TARJETA_SHOPPING: io.appwrite.enums.CreditCard;
        public static UNION_CHINA_PAY: io.appwrite.enums.CreditCard;
        public static VISA: io.appwrite.enums.CreditCard;
        public static MIR: io.appwrite.enums.CreditCard;
        public static MAESTRO: io.appwrite.enums.CreditCard;
        public static RUPAY: io.appwrite.enums.CreditCard;
        public static valueOf(value: string): io.appwrite.enums.CreditCard;
        public getValue(): string;
        public toString(): string;
        public static values(): androidNative.Array<io.appwrite.enums.CreditCard>;
        public static getEntries(): any;
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module enums {
      export class DeploymentDownloadType {
        public static class: java.lang.Class<io.appwrite.enums.DeploymentDownloadType>;
        public static SOURCE: io.appwrite.enums.DeploymentDownloadType;
        public static OUTPUT: io.appwrite.enums.DeploymentDownloadType;
        public static valueOf(value: string): io.appwrite.enums.DeploymentDownloadType;
        public getValue(): string;
        public static getEntries(): any;
        public toString(): string;
        public static values(): androidNative.Array<io.appwrite.enums.DeploymentDownloadType>;
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module enums {
      export class ExecutionMethod {
        public static class: java.lang.Class<io.appwrite.enums.ExecutionMethod>;
        public static GET: io.appwrite.enums.ExecutionMethod;
        public static POST: io.appwrite.enums.ExecutionMethod;
        public static PUT: io.appwrite.enums.ExecutionMethod;
        public static PATCH: io.appwrite.enums.ExecutionMethod;
        public static DELETE: io.appwrite.enums.ExecutionMethod;
        public static OPTIONS: io.appwrite.enums.ExecutionMethod;
        public static getEntries(): any;
        public static valueOf(value: string): io.appwrite.enums.ExecutionMethod;
        public getValue(): string;
        public static values(): androidNative.Array<io.appwrite.enums.ExecutionMethod>;
        public toString(): string;
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module enums {
      export class Flag {
        public static class: java.lang.Class<io.appwrite.enums.Flag>;
        public static AFGHANISTAN: io.appwrite.enums.Flag;
        public static ANGOLA: io.appwrite.enums.Flag;
        public static ALBANIA: io.appwrite.enums.Flag;
        public static ANDORRA: io.appwrite.enums.Flag;
        public static UNITED_ARAB_EMIRATES: io.appwrite.enums.Flag;
        public static ARGENTINA: io.appwrite.enums.Flag;
        public static ARMENIA: io.appwrite.enums.Flag;
        public static ANTIGUA_AND_BARBUDA: io.appwrite.enums.Flag;
        public static AUSTRALIA: io.appwrite.enums.Flag;
        public static AUSTRIA: io.appwrite.enums.Flag;
        public static AZERBAIJAN: io.appwrite.enums.Flag;
        public static BURUNDI: io.appwrite.enums.Flag;
        public static BELGIUM: io.appwrite.enums.Flag;
        public static BENIN: io.appwrite.enums.Flag;
        public static BURKINA_FASO: io.appwrite.enums.Flag;
        public static BANGLADESH: io.appwrite.enums.Flag;
        public static BULGARIA: io.appwrite.enums.Flag;
        public static BAHRAIN: io.appwrite.enums.Flag;
        public static BAHAMAS: io.appwrite.enums.Flag;
        public static BOSNIA_AND_HERZEGOVINA: io.appwrite.enums.Flag;
        public static BELARUS: io.appwrite.enums.Flag;
        public static BELIZE: io.appwrite.enums.Flag;
        public static BOLIVIA: io.appwrite.enums.Flag;
        public static BRAZIL: io.appwrite.enums.Flag;
        public static BARBADOS: io.appwrite.enums.Flag;
        public static BRUNEI_DARUSSALAM: io.appwrite.enums.Flag;
        public static BHUTAN: io.appwrite.enums.Flag;
        public static BOTSWANA: io.appwrite.enums.Flag;
        public static CENTRAL_AFRICAN_REPUBLIC: io.appwrite.enums.Flag;
        public static CANADA: io.appwrite.enums.Flag;
        public static SWITZERLAND: io.appwrite.enums.Flag;
        public static CHILE: io.appwrite.enums.Flag;
        public static CHINA: io.appwrite.enums.Flag;
        public static COTE_DIVOIRE: io.appwrite.enums.Flag;
        public static CAMEROON: io.appwrite.enums.Flag;
        public static DEMOCRATIC_REPUBLIC_OF_THE_CONGO: io.appwrite.enums.Flag;
        public static REPUBLIC_OF_THE_CONGO: io.appwrite.enums.Flag;
        public static COLOMBIA: io.appwrite.enums.Flag;
        public static COMOROS: io.appwrite.enums.Flag;
        public static CAPE_VERDE: io.appwrite.enums.Flag;
        public static COSTA_RICA: io.appwrite.enums.Flag;
        public static CUBA: io.appwrite.enums.Flag;
        public static CYPRUS: io.appwrite.enums.Flag;
        public static CZECH_REPUBLIC: io.appwrite.enums.Flag;
        public static GERMANY: io.appwrite.enums.Flag;
        public static DJIBOUTI: io.appwrite.enums.Flag;
        public static DOMINICA: io.appwrite.enums.Flag;
        public static DENMARK: io.appwrite.enums.Flag;
        public static DOMINICAN_REPUBLIC: io.appwrite.enums.Flag;
        public static ALGERIA: io.appwrite.enums.Flag;
        public static ECUADOR: io.appwrite.enums.Flag;
        public static EGYPT: io.appwrite.enums.Flag;
        public static ERITREA: io.appwrite.enums.Flag;
        public static SPAIN: io.appwrite.enums.Flag;
        public static ESTONIA: io.appwrite.enums.Flag;
        public static ETHIOPIA: io.appwrite.enums.Flag;
        public static FINLAND: io.appwrite.enums.Flag;
        public static FIJI: io.appwrite.enums.Flag;
        public static FRANCE: io.appwrite.enums.Flag;
        public static MICRONESIA_FEDERATED_STATES_OF: io.appwrite.enums.Flag;
        public static GABON: io.appwrite.enums.Flag;
        public static UNITED_KINGDOM: io.appwrite.enums.Flag;
        public static GEORGIA: io.appwrite.enums.Flag;
        public static GHANA: io.appwrite.enums.Flag;
        public static GUINEA: io.appwrite.enums.Flag;
        public static GAMBIA: io.appwrite.enums.Flag;
        public static GUINEA_BISSAU: io.appwrite.enums.Flag;
        public static EQUATORIAL_GUINEA: io.appwrite.enums.Flag;
        public static GREECE: io.appwrite.enums.Flag;
        public static GRENADA: io.appwrite.enums.Flag;
        public static GUATEMALA: io.appwrite.enums.Flag;
        public static GUYANA: io.appwrite.enums.Flag;
        public static HONDURAS: io.appwrite.enums.Flag;
        public static CROATIA: io.appwrite.enums.Flag;
        public static HAITI: io.appwrite.enums.Flag;
        public static HUNGARY: io.appwrite.enums.Flag;
        public static INDONESIA: io.appwrite.enums.Flag;
        public static INDIA: io.appwrite.enums.Flag;
        public static IRELAND: io.appwrite.enums.Flag;
        public static IRAN_ISLAMIC_REPUBLIC_OF: io.appwrite.enums.Flag;
        public static IRAQ: io.appwrite.enums.Flag;
        public static ICELAND: io.appwrite.enums.Flag;
        public static ISRAEL: io.appwrite.enums.Flag;
        public static ITALY: io.appwrite.enums.Flag;
        public static JAMAICA: io.appwrite.enums.Flag;
        public static JORDAN: io.appwrite.enums.Flag;
        public static JAPAN: io.appwrite.enums.Flag;
        public static KAZAKHSTAN: io.appwrite.enums.Flag;
        public static KENYA: io.appwrite.enums.Flag;
        public static KYRGYZSTAN: io.appwrite.enums.Flag;
        public static CAMBODIA: io.appwrite.enums.Flag;
        public static KIRIBATI: io.appwrite.enums.Flag;
        public static SAINT_KITTS_AND_NEVIS: io.appwrite.enums.Flag;
        public static SOUTH_KOREA: io.appwrite.enums.Flag;
        public static KUWAIT: io.appwrite.enums.Flag;
        public static LAO_PEOPLES_DEMOCRATIC_REPUBLIC: io.appwrite.enums.Flag;
        public static LEBANON: io.appwrite.enums.Flag;
        public static LIBERIA: io.appwrite.enums.Flag;
        public static LIBYA: io.appwrite.enums.Flag;
        public static SAINT_LUCIA: io.appwrite.enums.Flag;
        public static LIECHTENSTEIN: io.appwrite.enums.Flag;
        public static SRI_LANKA: io.appwrite.enums.Flag;
        public static LESOTHO: io.appwrite.enums.Flag;
        public static LITHUANIA: io.appwrite.enums.Flag;
        public static LUXEMBOURG: io.appwrite.enums.Flag;
        public static LATVIA: io.appwrite.enums.Flag;
        public static MOROCCO: io.appwrite.enums.Flag;
        public static MONACO: io.appwrite.enums.Flag;
        public static MOLDOVA: io.appwrite.enums.Flag;
        public static MADAGASCAR: io.appwrite.enums.Flag;
        public static MALDIVES: io.appwrite.enums.Flag;
        public static MEXICO: io.appwrite.enums.Flag;
        public static MARSHALL_ISLANDS: io.appwrite.enums.Flag;
        public static NORTH_MACEDONIA: io.appwrite.enums.Flag;
        public static MALI: io.appwrite.enums.Flag;
        public static MALTA: io.appwrite.enums.Flag;
        public static MYANMAR: io.appwrite.enums.Flag;
        public static MONTENEGRO: io.appwrite.enums.Flag;
        public static MONGOLIA: io.appwrite.enums.Flag;
        public static MOZAMBIQUE: io.appwrite.enums.Flag;
        public static MAURITANIA: io.appwrite.enums.Flag;
        public static MAURITIUS: io.appwrite.enums.Flag;
        public static MALAWI: io.appwrite.enums.Flag;
        public static MALAYSIA: io.appwrite.enums.Flag;
        public static NAMIBIA: io.appwrite.enums.Flag;
        public static NIGER: io.appwrite.enums.Flag;
        public static NIGERIA: io.appwrite.enums.Flag;
        public static NICARAGUA: io.appwrite.enums.Flag;
        public static NETHERLANDS: io.appwrite.enums.Flag;
        public static NORWAY: io.appwrite.enums.Flag;
        public static NEPAL: io.appwrite.enums.Flag;
        public static NAURU: io.appwrite.enums.Flag;
        public static NEW_ZEALAND: io.appwrite.enums.Flag;
        public static OMAN: io.appwrite.enums.Flag;
        public static PAKISTAN: io.appwrite.enums.Flag;
        public static PANAMA: io.appwrite.enums.Flag;
        public static PERU: io.appwrite.enums.Flag;
        public static PHILIPPINES: io.appwrite.enums.Flag;
        public static PALAU: io.appwrite.enums.Flag;
        public static PAPUA_NEW_GUINEA: io.appwrite.enums.Flag;
        public static POLAND: io.appwrite.enums.Flag;
        public static FRENCH_POLYNESIA: io.appwrite.enums.Flag;
        public static NORTH_KOREA: io.appwrite.enums.Flag;
        public static PORTUGAL: io.appwrite.enums.Flag;
        public static PARAGUAY: io.appwrite.enums.Flag;
        public static QATAR: io.appwrite.enums.Flag;
        public static ROMANIA: io.appwrite.enums.Flag;
        public static RUSSIA: io.appwrite.enums.Flag;
        public static RWANDA: io.appwrite.enums.Flag;
        public static SAUDI_ARABIA: io.appwrite.enums.Flag;
        public static SUDAN: io.appwrite.enums.Flag;
        public static SENEGAL: io.appwrite.enums.Flag;
        public static SINGAPORE: io.appwrite.enums.Flag;
        public static SOLOMON_ISLANDS: io.appwrite.enums.Flag;
        public static SIERRA_LEONE: io.appwrite.enums.Flag;
        public static EL_SALVADOR: io.appwrite.enums.Flag;
        public static SAN_MARINO: io.appwrite.enums.Flag;
        public static SOMALIA: io.appwrite.enums.Flag;
        public static SERBIA: io.appwrite.enums.Flag;
        public static SOUTH_SUDAN: io.appwrite.enums.Flag;
        public static SAO_TOME_AND_PRINCIPE: io.appwrite.enums.Flag;
        public static SURINAME: io.appwrite.enums.Flag;
        public static SLOVAKIA: io.appwrite.enums.Flag;
        public static SLOVENIA: io.appwrite.enums.Flag;
        public static SWEDEN: io.appwrite.enums.Flag;
        public static ESWATINI: io.appwrite.enums.Flag;
        public static SEYCHELLES: io.appwrite.enums.Flag;
        public static SYRIA: io.appwrite.enums.Flag;
        public static CHAD: io.appwrite.enums.Flag;
        public static TOGO: io.appwrite.enums.Flag;
        public static THAILAND: io.appwrite.enums.Flag;
        public static TAJIKISTAN: io.appwrite.enums.Flag;
        public static TURKMENISTAN: io.appwrite.enums.Flag;
        public static TIMOR_LESTE: io.appwrite.enums.Flag;
        public static TONGA: io.appwrite.enums.Flag;
        public static TRINIDAD_AND_TOBAGO: io.appwrite.enums.Flag;
        public static TUNISIA: io.appwrite.enums.Flag;
        public static TURKEY: io.appwrite.enums.Flag;
        public static TUVALU: io.appwrite.enums.Flag;
        public static TANZANIA: io.appwrite.enums.Flag;
        public static UGANDA: io.appwrite.enums.Flag;
        public static UKRAINE: io.appwrite.enums.Flag;
        public static URUGUAY: io.appwrite.enums.Flag;
        public static UNITED_STATES: io.appwrite.enums.Flag;
        public static UZBEKISTAN: io.appwrite.enums.Flag;
        public static VATICAN_CITY: io.appwrite.enums.Flag;
        public static SAINT_VINCENT_AND_THE_GRENADINES: io.appwrite.enums.Flag;
        public static VENEZUELA: io.appwrite.enums.Flag;
        public static VIETNAM: io.appwrite.enums.Flag;
        public static VANUATU: io.appwrite.enums.Flag;
        public static SAMOA: io.appwrite.enums.Flag;
        public static YEMEN: io.appwrite.enums.Flag;
        public static SOUTH_AFRICA: io.appwrite.enums.Flag;
        public static ZAMBIA: io.appwrite.enums.Flag;
        public static ZIMBABWE: io.appwrite.enums.Flag;
        public static values(): androidNative.Array<io.appwrite.enums.Flag>;
        public getValue(): string;
        public toString(): string;
        public static getEntries(): any;
        public static valueOf(value: string): io.appwrite.enums.Flag;
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module enums {
      export class Framework {
        public static class: java.lang.Class<io.appwrite.enums.Framework>;
        public static ANALOG: io.appwrite.enums.Framework;
        public static ANGULAR: io.appwrite.enums.Framework;
        public static NEXTJS: io.appwrite.enums.Framework;
        public static REACT: io.appwrite.enums.Framework;
        public static NUXT: io.appwrite.enums.Framework;
        public static VUE: io.appwrite.enums.Framework;
        public static SVELTEKIT: io.appwrite.enums.Framework;
        public static ASTRO: io.appwrite.enums.Framework;
        public static REMIX: io.appwrite.enums.Framework;
        public static LYNX: io.appwrite.enums.Framework;
        public static FLUTTER: io.appwrite.enums.Framework;
        public static REACT_NATIVE: io.appwrite.enums.Framework;
        public static VITE: io.appwrite.enums.Framework;
        public static OTHER: io.appwrite.enums.Framework;
        public static values(): androidNative.Array<io.appwrite.enums.Framework>;
        public getValue(): string;
        public toString(): string;
        public static getEntries(): any;
        public static valueOf(value: string): io.appwrite.enums.Framework;
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module enums {
      export class ImageFormat {
        public static class: java.lang.Class<io.appwrite.enums.ImageFormat>;
        public static JPG: io.appwrite.enums.ImageFormat;
        public static JPEG: io.appwrite.enums.ImageFormat;
        public static PNG: io.appwrite.enums.ImageFormat;
        public static WEBP: io.appwrite.enums.ImageFormat;
        public static HEIC: io.appwrite.enums.ImageFormat;
        public static AVIF: io.appwrite.enums.ImageFormat;
        public static valueOf(value: string): io.appwrite.enums.ImageFormat;
        public getValue(): string;
        public static getEntries(): any;
        public toString(): string;
        public static values(): androidNative.Array<io.appwrite.enums.ImageFormat>;
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module enums {
      export class ImageGravity {
        public static class: java.lang.Class<io.appwrite.enums.ImageGravity>;
        public static CENTER: io.appwrite.enums.ImageGravity;
        public static TOP_LEFT: io.appwrite.enums.ImageGravity;
        public static TOP: io.appwrite.enums.ImageGravity;
        public static TOP_RIGHT: io.appwrite.enums.ImageGravity;
        public static LEFT: io.appwrite.enums.ImageGravity;
        public static RIGHT: io.appwrite.enums.ImageGravity;
        public static BOTTOM_LEFT: io.appwrite.enums.ImageGravity;
        public static BOTTOM: io.appwrite.enums.ImageGravity;
        public static BOTTOM_RIGHT: io.appwrite.enums.ImageGravity;
        public static getEntries(): any;
        public static valueOf(value: string): io.appwrite.enums.ImageGravity;
        public static values(): androidNative.Array<io.appwrite.enums.ImageGravity>;
        public getValue(): string;
        public toString(): string;
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module enums {
      export class IndexType {
        public static class: java.lang.Class<io.appwrite.enums.IndexType>;
        public static KEY: io.appwrite.enums.IndexType;
        public static FULLTEXT: io.appwrite.enums.IndexType;
        public static UNIQUE: io.appwrite.enums.IndexType;
        public static values(): androidNative.Array<io.appwrite.enums.IndexType>;
        public getValue(): string;
        public static valueOf(value: string): io.appwrite.enums.IndexType;
        public toString(): string;
        public static getEntries(): any;
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module enums {
      export class MessagePriority {
        public static class: java.lang.Class<io.appwrite.enums.MessagePriority>;
        public static NORMAL: io.appwrite.enums.MessagePriority;
        public static HIGH: io.appwrite.enums.MessagePriority;
        public getValue(): string;
        public static valueOf(value: string): io.appwrite.enums.MessagePriority;
        public static values(): androidNative.Array<io.appwrite.enums.MessagePriority>;
        public static getEntries(): any;
        public toString(): string;
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module enums {
      export class MessagingProviderType {
        public static class: java.lang.Class<io.appwrite.enums.MessagingProviderType>;
        public static EMAIL: io.appwrite.enums.MessagingProviderType;
        public static SMS: io.appwrite.enums.MessagingProviderType;
        public static PUSH: io.appwrite.enums.MessagingProviderType;
        public static values(): androidNative.Array<io.appwrite.enums.MessagingProviderType>;
        public getValue(): string;
        public static getEntries(): any;
        public toString(): string;
        public static valueOf(value: string): io.appwrite.enums.MessagingProviderType;
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module enums {
      export class Name {
        public static class: java.lang.Class<io.appwrite.enums.Name>;
        public static V1_DATABASE: io.appwrite.enums.Name;
        public static V1_DELETES: io.appwrite.enums.Name;
        public static V1_AUDITS: io.appwrite.enums.Name;
        public static V1_MAILS: io.appwrite.enums.Name;
        public static V1_FUNCTIONS: io.appwrite.enums.Name;
        public static V1_STATS_RESOURCES: io.appwrite.enums.Name;
        public static V1_STATS_USAGE: io.appwrite.enums.Name;
        public static V1_WEBHOOKS: io.appwrite.enums.Name;
        public static V1_CERTIFICATES: io.appwrite.enums.Name;
        public static V1_BUILDS: io.appwrite.enums.Name;
        public static V1_MESSAGING: io.appwrite.enums.Name;
        public static V1_MIGRATIONS: io.appwrite.enums.Name;
        public static values(): androidNative.Array<io.appwrite.enums.Name>;
        public getValue(): string;
        public static valueOf(value: string): io.appwrite.enums.Name;
        public toString(): string;
        public static getEntries(): any;
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module enums {
      export class OAuthProvider {
        public static class: java.lang.Class<io.appwrite.enums.OAuthProvider>;
        public static AMAZON: io.appwrite.enums.OAuthProvider;
        public static APPLE: io.appwrite.enums.OAuthProvider;
        public static AUTH0: io.appwrite.enums.OAuthProvider;
        public static AUTHENTIK: io.appwrite.enums.OAuthProvider;
        public static AUTODESK: io.appwrite.enums.OAuthProvider;
        public static BITBUCKET: io.appwrite.enums.OAuthProvider;
        public static BITLY: io.appwrite.enums.OAuthProvider;
        public static BOX: io.appwrite.enums.OAuthProvider;
        public static DAILYMOTION: io.appwrite.enums.OAuthProvider;
        public static DISCORD: io.appwrite.enums.OAuthProvider;
        public static DISQUS: io.appwrite.enums.OAuthProvider;
        public static DROPBOX: io.appwrite.enums.OAuthProvider;
        public static ETSY: io.appwrite.enums.OAuthProvider;
        public static FACEBOOK: io.appwrite.enums.OAuthProvider;
        public static FIGMA: io.appwrite.enums.OAuthProvider;
        public static GITHUB: io.appwrite.enums.OAuthProvider;
        public static GITLAB: io.appwrite.enums.OAuthProvider;
        public static GOOGLE: io.appwrite.enums.OAuthProvider;
        public static LINKEDIN: io.appwrite.enums.OAuthProvider;
        public static MICROSOFT: io.appwrite.enums.OAuthProvider;
        public static NOTION: io.appwrite.enums.OAuthProvider;
        public static OIDC: io.appwrite.enums.OAuthProvider;
        public static OKTA: io.appwrite.enums.OAuthProvider;
        public static PAYPAL: io.appwrite.enums.OAuthProvider;
        public static PAYPALSANDBOX: io.appwrite.enums.OAuthProvider;
        public static PODIO: io.appwrite.enums.OAuthProvider;
        public static SALESFORCE: io.appwrite.enums.OAuthProvider;
        public static SLACK: io.appwrite.enums.OAuthProvider;
        public static SPOTIFY: io.appwrite.enums.OAuthProvider;
        public static STRIPE: io.appwrite.enums.OAuthProvider;
        public static TRADESHIFT: io.appwrite.enums.OAuthProvider;
        public static TRADESHIFTBOX: io.appwrite.enums.OAuthProvider;
        public static TWITCH: io.appwrite.enums.OAuthProvider;
        public static WORDPRESS: io.appwrite.enums.OAuthProvider;
        public static YAHOO: io.appwrite.enums.OAuthProvider;
        public static YAMMER: io.appwrite.enums.OAuthProvider;
        public static YANDEX: io.appwrite.enums.OAuthProvider;
        public static ZOHO: io.appwrite.enums.OAuthProvider;
        public static ZOOM: io.appwrite.enums.OAuthProvider;
        public static MOCK: io.appwrite.enums.OAuthProvider;
        public static getEntries(): any;
        public getValue(): string;
        public toString(): string;
        public static values(): androidNative.Array<io.appwrite.enums.OAuthProvider>;
        public static valueOf(value: string): io.appwrite.enums.OAuthProvider;
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module enums {
      export class PasswordHash {
        public static class: java.lang.Class<io.appwrite.enums.PasswordHash>;
        public static SHA1: io.appwrite.enums.PasswordHash;
        public static SHA224: io.appwrite.enums.PasswordHash;
        public static SHA256: io.appwrite.enums.PasswordHash;
        public static SHA384: io.appwrite.enums.PasswordHash;
        public static SHA512_224: io.appwrite.enums.PasswordHash;
        public static SHA512_256: io.appwrite.enums.PasswordHash;
        public static SHA512: io.appwrite.enums.PasswordHash;
        public static SHA3_224: io.appwrite.enums.PasswordHash;
        public static SHA3_256: io.appwrite.enums.PasswordHash;
        public static SHA3_384: io.appwrite.enums.PasswordHash;
        public static SHA3_512: io.appwrite.enums.PasswordHash;
        public getValue(): string;
        public static getEntries(): any;
        public toString(): string;
        public static valueOf(value: string): io.appwrite.enums.PasswordHash;
        public static values(): androidNative.Array<io.appwrite.enums.PasswordHash>;
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module enums {
      export class RelationMutate {
        public static class: java.lang.Class<io.appwrite.enums.RelationMutate>;
        public static CASCADE: io.appwrite.enums.RelationMutate;
        public static RESTRICT: io.appwrite.enums.RelationMutate;
        public static SETNULL: io.appwrite.enums.RelationMutate;
        public static values(): androidNative.Array<io.appwrite.enums.RelationMutate>;
        public static getEntries(): any;
        public static valueOf(value: string): io.appwrite.enums.RelationMutate;
        public getValue(): string;
        public toString(): string;
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module enums {
      export class RelationshipType {
        public static class: java.lang.Class<io.appwrite.enums.RelationshipType>;
        public static ONETOONE: io.appwrite.enums.RelationshipType;
        public static MANYTOONE: io.appwrite.enums.RelationshipType;
        public static MANYTOMANY: io.appwrite.enums.RelationshipType;
        public static ONETOMANY: io.appwrite.enums.RelationshipType;
        public static valueOf(value: string): io.appwrite.enums.RelationshipType;
        public static getEntries(): any;
        public getValue(): string;
        public static values(): androidNative.Array<io.appwrite.enums.RelationshipType>;
        public toString(): string;
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module enums {
      export class Runtime {
        public static class: java.lang.Class<io.appwrite.enums.Runtime>;
        public static NODE_14_5: io.appwrite.enums.Runtime;
        public static NODE_16_0: io.appwrite.enums.Runtime;
        public static NODE_18_0: io.appwrite.enums.Runtime;
        public static NODE_19_0: io.appwrite.enums.Runtime;
        public static NODE_20_0: io.appwrite.enums.Runtime;
        public static NODE_21_0: io.appwrite.enums.Runtime;
        public static NODE_22: io.appwrite.enums.Runtime;
        public static PHP_8_0: io.appwrite.enums.Runtime;
        public static PHP_8_1: io.appwrite.enums.Runtime;
        public static PHP_8_2: io.appwrite.enums.Runtime;
        public static PHP_8_3: io.appwrite.enums.Runtime;
        public static RUBY_3_0: io.appwrite.enums.Runtime;
        public static RUBY_3_1: io.appwrite.enums.Runtime;
        public static RUBY_3_2: io.appwrite.enums.Runtime;
        public static RUBY_3_3: io.appwrite.enums.Runtime;
        public static PYTHON_3_8: io.appwrite.enums.Runtime;
        public static PYTHON_3_9: io.appwrite.enums.Runtime;
        public static PYTHON_3_10: io.appwrite.enums.Runtime;
        public static PYTHON_3_11: io.appwrite.enums.Runtime;
        public static PYTHON_3_12: io.appwrite.enums.Runtime;
        public static PYTHON_ML_3_11: io.appwrite.enums.Runtime;
        public static PYTHON_ML_3_12: io.appwrite.enums.Runtime;
        public static DENO_1_21: io.appwrite.enums.Runtime;
        public static DENO_1_24: io.appwrite.enums.Runtime;
        public static DENO_1_35: io.appwrite.enums.Runtime;
        public static DENO_1_40: io.appwrite.enums.Runtime;
        public static DENO_1_46: io.appwrite.enums.Runtime;
        public static DENO_2_0: io.appwrite.enums.Runtime;
        public static DART_2_15: io.appwrite.enums.Runtime;
        public static DART_2_16: io.appwrite.enums.Runtime;
        public static DART_2_17: io.appwrite.enums.Runtime;
        public static DART_2_18: io.appwrite.enums.Runtime;
        public static DART_2_19: io.appwrite.enums.Runtime;
        public static DART_3_0: io.appwrite.enums.Runtime;
        public static DART_3_1: io.appwrite.enums.Runtime;
        public static DART_3_3: io.appwrite.enums.Runtime;
        public static DART_3_5: io.appwrite.enums.Runtime;
        public static DOTNET_6_0: io.appwrite.enums.Runtime;
        public static DOTNET_7_0: io.appwrite.enums.Runtime;
        public static DOTNET_8_0: io.appwrite.enums.Runtime;
        public static JAVA_8_0: io.appwrite.enums.Runtime;
        public static JAVA_11_0: io.appwrite.enums.Runtime;
        public static JAVA_17_0: io.appwrite.enums.Runtime;
        public static JAVA_18_0: io.appwrite.enums.Runtime;
        public static JAVA_21_0: io.appwrite.enums.Runtime;
        public static JAVA_22: io.appwrite.enums.Runtime;
        public static SWIFT_5_5: io.appwrite.enums.Runtime;
        public static SWIFT_5_8: io.appwrite.enums.Runtime;
        public static SWIFT_5_9: io.appwrite.enums.Runtime;
        public static SWIFT_5_10: io.appwrite.enums.Runtime;
        public static KOTLIN_1_6: io.appwrite.enums.Runtime;
        public static KOTLIN_1_8: io.appwrite.enums.Runtime;
        public static KOTLIN_1_9: io.appwrite.enums.Runtime;
        public static KOTLIN_2_0: io.appwrite.enums.Runtime;
        public static CPP_17: io.appwrite.enums.Runtime;
        public static CPP_20: io.appwrite.enums.Runtime;
        public static BUN_1_0: io.appwrite.enums.Runtime;
        public static BUN_1_1: io.appwrite.enums.Runtime;
        public static GO_1_23: io.appwrite.enums.Runtime;
        public static STATIC_1: io.appwrite.enums.Runtime;
        public static FLUTTER_3_24: io.appwrite.enums.Runtime;
        public static FLUTTER_3_27: io.appwrite.enums.Runtime;
        public static FLUTTER_3_29: io.appwrite.enums.Runtime;
        public static getEntries(): any;
        public getValue(): string;
        public static valueOf(value: string): io.appwrite.enums.Runtime;
        public toString(): string;
        public static values(): androidNative.Array<io.appwrite.enums.Runtime>;
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module enums {
      export class SmtpEncryption {
        public static class: java.lang.Class<io.appwrite.enums.SmtpEncryption>;
        public static NONE: io.appwrite.enums.SmtpEncryption;
        public static SSL: io.appwrite.enums.SmtpEncryption;
        public static TLS: io.appwrite.enums.SmtpEncryption;
        public static values(): androidNative.Array<io.appwrite.enums.SmtpEncryption>;
        public static getEntries(): any;
        public static valueOf(value: string): io.appwrite.enums.SmtpEncryption;
        public getValue(): string;
        public toString(): string;
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module enums {
      export class VCSDeploymentType {
        public static class: java.lang.Class<io.appwrite.enums.VCSDeploymentType>;
        public static BRANCH: io.appwrite.enums.VCSDeploymentType;
        public static COMMIT: io.appwrite.enums.VCSDeploymentType;
        public static TAG: io.appwrite.enums.VCSDeploymentType;
        public static valueOf(value: string): io.appwrite.enums.VCSDeploymentType;
        public static getEntries(): any;
        public getValue(): string;
        public toString(): string;
        public static values(): androidNative.Array<io.appwrite.enums.VCSDeploymentType>;
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module exceptions {
      export class AppwriteException {
        public static class: java.lang.Class<io.appwrite.exceptions.AppwriteException>;
        public constructor(message: string, code: java.lang.Integer, type: string, response: string);
        public getType(): string;
        public getResponse(): string;
        public getMessage(): string;
        public getCode(): java.lang.Integer;
        public constructor();
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module models {
      export class AlgoArgon2 {
        public static class: java.lang.Class<io.appwrite.models.AlgoArgon2>;
        public getType(): string;
        public component4(): number;
        public component1(): string;
        public component2(): number;
        public getThreads(): number;
        public toString(): string;
        public constructor(type: string, memoryCost: number, timeCost: number, threads: number);
        public component3(): number;
        public equals(other: any): boolean;
        public hashCode(): number;
        public getTimeCost(): number;
        public getMemoryCost(): number;
        public toMap(): java.util.Map<string, any>;
        public copy(type: string, memoryCost: number, timeCost: number, threads: number): io.appwrite.models.AlgoArgon2;
      }
      export module AlgoArgon2 {
        export class Companion {
          public static class: java.lang.Class<io.appwrite.models.AlgoArgon2.Companion>;
          public from(map: java.util.Map<string, any>): io.appwrite.models.AlgoArgon2;
        }
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module models {
      export class AlgoBcrypt {
        public static class: java.lang.Class<io.appwrite.models.AlgoBcrypt>;
        public getType(): string;
        public equals(other: any): boolean;
        public constructor(type: string);
        public component1(): string;
        public hashCode(): number;
        public copy(type: string): io.appwrite.models.AlgoBcrypt;
        public toString(): string;
        public toMap(): java.util.Map<string, any>;
      }
      export module AlgoBcrypt {
        export class Companion {
          public static class: java.lang.Class<io.appwrite.models.AlgoBcrypt.Companion>;
          public from(map: java.util.Map<string, any>): io.appwrite.models.AlgoBcrypt;
        }
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module models {
      export class AlgoMd5 {
        public static class: java.lang.Class<io.appwrite.models.AlgoMd5>;
        public copy(type: string): io.appwrite.models.AlgoMd5;
        public getType(): string;
        public equals(other: any): boolean;
        public constructor(type: string);
        public component1(): string;
        public hashCode(): number;
        public toString(): string;
        public toMap(): java.util.Map<string, any>;
      }
      export module AlgoMd5 {
        export class Companion {
          public static class: java.lang.Class<io.appwrite.models.AlgoMd5.Companion>;
          public from(map: java.util.Map<string, any>): io.appwrite.models.AlgoMd5;
        }
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module models {
      export class AlgoPhpass {
        public static class: java.lang.Class<io.appwrite.models.AlgoPhpass>;
        public getType(): string;
        public equals(other: any): boolean;
        public constructor(type: string);
        public component1(): string;
        public hashCode(): number;
        public copy(type: string): io.appwrite.models.AlgoPhpass;
        public toString(): string;
        public toMap(): java.util.Map<string, any>;
      }
      export module AlgoPhpass {
        export class Companion {
          public static class: java.lang.Class<io.appwrite.models.AlgoPhpass.Companion>;
          public from(map: java.util.Map<string, any>): io.appwrite.models.AlgoPhpass;
        }
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module models {
      export class AlgoScrypt {
        public static class: java.lang.Class<io.appwrite.models.AlgoScrypt>;
        public getType(): string;
        public component4(): number;
        public constructor(type: string, costCpu: number, costMemory: number, costParallel: number, length: number);
        public component1(): string;
        public component2(): number;
        public getCostMemory(): number;
        public toString(): string;
        public getLength(): number;
        public copy(type: string, costCpu: number, costMemory: number, costParallel: number, length: number): io.appwrite.models.AlgoScrypt;
        public component3(): number;
        public component5(): number;
        public equals(other: any): boolean;
        public hashCode(): number;
        public getCostParallel(): number;
        public getCostCpu(): number;
        public toMap(): java.util.Map<string, any>;
      }
      export module AlgoScrypt {
        export class Companion {
          public static class: java.lang.Class<io.appwrite.models.AlgoScrypt.Companion>;
          public from(map: java.util.Map<string, any>): io.appwrite.models.AlgoScrypt;
        }
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module models {
      export class AlgoScryptModified {
        public static class: java.lang.Class<io.appwrite.models.AlgoScryptModified>;
        public getType(): string;
        public getSignerKey(): string;
        public component1(): string;
        public component4(): string;
        public getSalt(): string;
        public toString(): string;
        public constructor(type: string, salt: string, saltSeparator: string, signerKey: string);
        public equals(other: any): boolean;
        public copy(type: string, salt: string, saltSeparator: string, signerKey: string): io.appwrite.models.AlgoScryptModified;
        public component3(): string;
        public hashCode(): number;
        public component2(): string;
        public getSaltSeparator(): string;
        public toMap(): java.util.Map<string, any>;
      }
      export module AlgoScryptModified {
        export class Companion {
          public static class: java.lang.Class<io.appwrite.models.AlgoScryptModified.Companion>;
          public from(map: java.util.Map<string, any>): io.appwrite.models.AlgoScryptModified;
        }
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module models {
      export class AlgoSha {
        public static class: java.lang.Class<io.appwrite.models.AlgoSha>;
        public getType(): string;
        public copy(type: string): io.appwrite.models.AlgoSha;
        public equals(other: any): boolean;
        public constructor(type: string);
        public component1(): string;
        public hashCode(): number;
        public toString(): string;
        public toMap(): java.util.Map<string, any>;
      }
      export module AlgoSha {
        export class Companion {
          public static class: java.lang.Class<io.appwrite.models.AlgoSha.Companion>;
          public from(map: java.util.Map<string, any>): io.appwrite.models.AlgoSha;
        }
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module models {
      export class AttributeBoolean {
        public static class: java.lang.Class<io.appwrite.models.AttributeBoolean>;
        public getRequired(): boolean;
        public getStatus(): string;
        public setDefault(value: java.lang.Boolean): void;
        public component5(): boolean;
        public component6(): java.lang.Boolean;
        public component9(): java.lang.Boolean;
        public getKey(): string;
        public equals(other: any): boolean;
        public hashCode(): number;
        public component2(): string;
        public getType(): string;
        public getUpdatedAt(): string;
        public component1(): string;
        public component4(): string;
        public component8(): string;
        public toString(): string;
        public getArray(): java.lang.Boolean;
        public copy(key: string, type: string, status: string, error: string, required: boolean, array: java.lang.Boolean, createdAt: string, updatedAt: string, default_: java.lang.Boolean): io.appwrite.models.AttributeBoolean;
        public getCreatedAt(): string;
        public component7(): string;
        public component3(): string;
        public getError(): string;
        public constructor(key: string, type: string, status: string, error: string, required: boolean, array: java.lang.Boolean, createdAt: string, updatedAt: string, default_: java.lang.Boolean);
        public setArray(value: java.lang.Boolean): void;
        public getDefault(): java.lang.Boolean;
        public toMap(): java.util.Map<string, any>;
      }
      export module AttributeBoolean {
        export class Companion {
          public static class: java.lang.Class<io.appwrite.models.AttributeBoolean.Companion>;
          public from(map: java.util.Map<string, any>): io.appwrite.models.AttributeBoolean;
        }
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module models {
      export class AttributeDatetime {
        public static class: java.lang.Class<io.appwrite.models.AttributeDatetime>;
        public getRequired(): boolean;
        public getStatus(): string;
        public component5(): boolean;
        public component6(): java.lang.Boolean;
        public getKey(): string;
        public equals(other: any): boolean;
        public hashCode(): number;
        public component2(): string;
        public component9(): string;
        public getType(): string;
        public getFormat(): string;
        public constructor(key: string, type: string, status: string, error: string, required: boolean, array: java.lang.Boolean, createdAt: string, updatedAt: string, format: string, default_: string);
        public setDefault(value: string): void;
        public getUpdatedAt(): string;
        public component1(): string;
        public component4(): string;
        public component8(): string;
        public toString(): string;
        public getArray(): java.lang.Boolean;
        public copy(key: string, type: string, status: string, error: string, required: boolean, array: java.lang.Boolean, createdAt: string, updatedAt: string, format: string, default_: string): io.appwrite.models.AttributeDatetime;
        public getCreatedAt(): string;
        public component7(): string;
        public component3(): string;
        public component10(): string;
        public getError(): string;
        public setArray(value: java.lang.Boolean): void;
        public getDefault(): string;
        public toMap(): java.util.Map<string, any>;
      }
      export module AttributeDatetime {
        export class Companion {
          public static class: java.lang.Class<io.appwrite.models.AttributeDatetime.Companion>;
          public from(map: java.util.Map<string, any>): io.appwrite.models.AttributeDatetime;
        }
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module models {
      export class AttributeEmail {
        public static class: java.lang.Class<io.appwrite.models.AttributeEmail>;
        public getRequired(): boolean;
        public copy(key: string, type: string, status: string, error: string, required: boolean, array: java.lang.Boolean, createdAt: string, updatedAt: string, format: string, default_: string): io.appwrite.models.AttributeEmail;
        public getStatus(): string;
        public component5(): boolean;
        public component6(): java.lang.Boolean;
        public getKey(): string;
        public equals(other: any): boolean;
        public hashCode(): number;
        public component2(): string;
        public component9(): string;
        public getType(): string;
        public getFormat(): string;
        public constructor(key: string, type: string, status: string, error: string, required: boolean, array: java.lang.Boolean, createdAt: string, updatedAt: string, format: string, default_: string);
        public setDefault(value: string): void;
        public getUpdatedAt(): string;
        public component1(): string;
        public component4(): string;
        public component8(): string;
        public toString(): string;
        public getArray(): java.lang.Boolean;
        public getCreatedAt(): string;
        public component7(): string;
        public component3(): string;
        public component10(): string;
        public getError(): string;
        public setArray(value: java.lang.Boolean): void;
        public getDefault(): string;
        public toMap(): java.util.Map<string, any>;
      }
      export module AttributeEmail {
        export class Companion {
          public static class: java.lang.Class<io.appwrite.models.AttributeEmail.Companion>;
          public from(map: java.util.Map<string, any>): io.appwrite.models.AttributeEmail;
        }
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module models {
      export class AttributeEnum {
        public static class: java.lang.Class<io.appwrite.models.AttributeEnum>;
        public getRequired(): boolean;
        public getStatus(): string;
        public component5(): boolean;
        public copy(key: string, type: string, status: string, error: string, required: boolean, array: java.lang.Boolean, createdAt: string, updatedAt: string, elements: java.util.List<string>, format: string, default_: string): io.appwrite.models.AttributeEnum;
        public component6(): java.lang.Boolean;
        public getElements(): java.util.List<string>;
        public getKey(): string;
        public equals(other: any): boolean;
        public hashCode(): number;
        public component2(): string;
        public getType(): string;
        public getFormat(): string;
        public setDefault(value: string): void;
        public component11(): string;
        public getUpdatedAt(): string;
        public component1(): string;
        public component4(): string;
        public component8(): string;
        public toString(): string;
        public getArray(): java.lang.Boolean;
        public constructor(key: string, type: string, status: string, error: string, required: boolean, array: java.lang.Boolean, createdAt: string, updatedAt: string, elements: java.util.List<string>, format: string, default_: string);
        public getCreatedAt(): string;
        public component7(): string;
        public component9(): java.util.List<string>;
        public component3(): string;
        public component10(): string;
        public getError(): string;
        public setArray(value: java.lang.Boolean): void;
        public getDefault(): string;
        public toMap(): java.util.Map<string, any>;
      }
      export module AttributeEnum {
        export class Companion {
          public static class: java.lang.Class<io.appwrite.models.AttributeEnum.Companion>;
          public from(map: java.util.Map<string, any>): io.appwrite.models.AttributeEnum;
        }
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module models {
      export class AttributeFloat {
        public static class: java.lang.Class<io.appwrite.models.AttributeFloat>;
        public getRequired(): boolean;
        public getStatus(): string;
        public component10(): java.lang.Double;
        public setMax(value: java.lang.Double): void;
        public constructor(key: string, type: string, status: string, error: string, required: boolean, array: java.lang.Boolean, createdAt: string, updatedAt: string, min: java.lang.Double, max: java.lang.Double, default_: java.lang.Double);
        public component5(): boolean;
        public component6(): java.lang.Boolean;
        public getKey(): string;
        public equals(other: any): boolean;
        public hashCode(): number;
        public component2(): string;
        public getMin(): java.lang.Double;
        public getType(): string;
        public getDefault(): java.lang.Double;
        public getUpdatedAt(): string;
        public component1(): string;
        public getMax(): java.lang.Double;
        public component4(): string;
        public component11(): java.lang.Double;
        public setMin(value: java.lang.Double): void;
        public component8(): string;
        public toString(): string;
        public getArray(): java.lang.Boolean;
        public getCreatedAt(): string;
        public component9(): java.lang.Double;
        public component7(): string;
        public setDefault(value: java.lang.Double): void;
        public component3(): string;
        public getError(): string;
        public setArray(value: java.lang.Boolean): void;
        public toMap(): java.util.Map<string, any>;
        public copy(key: string, type: string, status: string, error: string, required: boolean, array: java.lang.Boolean, createdAt: string, updatedAt: string, min: java.lang.Double, max: java.lang.Double, default_: java.lang.Double): io.appwrite.models.AttributeFloat;
      }
      export module AttributeFloat {
        export class Companion {
          public static class: java.lang.Class<io.appwrite.models.AttributeFloat.Companion>;
          public from(map: java.util.Map<string, any>): io.appwrite.models.AttributeFloat;
        }
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module models {
      export class AttributeInteger {
        public static class: java.lang.Class<io.appwrite.models.AttributeInteger>;
        public setMax(value: java.lang.Long): void;
        public getRequired(): boolean;
        public getStatus(): string;
        public getMax(): java.lang.Long;
        public getDefault(): java.lang.Long;
        public constructor(key: string, type: string, status: string, error: string, required: boolean, array: java.lang.Boolean, createdAt: string, updatedAt: string, min: java.lang.Long, max: java.lang.Long, default_: java.lang.Long);
        public component5(): boolean;
        public component6(): java.lang.Boolean;
        public setDefault(value: java.lang.Long): void;
        public component9(): java.lang.Long;
        public getKey(): string;
        public equals(other: any): boolean;
        public hashCode(): number;
        public component2(): string;
        public copy(key: string, type: string, status: string, error: string, required: boolean, array: java.lang.Boolean, createdAt: string, updatedAt: string, min: java.lang.Long, max: java.lang.Long, default_: java.lang.Long): io.appwrite.models.AttributeInteger;
        public getType(): string;
        public getMin(): java.lang.Long;
        public getUpdatedAt(): string;
        public setMin(value: java.lang.Long): void;
        public component1(): string;
        public component4(): string;
        public component8(): string;
        public toString(): string;
        public getArray(): java.lang.Boolean;
        public getCreatedAt(): string;
        public component7(): string;
        public component3(): string;
        public getError(): string;
        public component11(): java.lang.Long;
        public setArray(value: java.lang.Boolean): void;
        public component10(): java.lang.Long;
        public toMap(): java.util.Map<string, any>;
      }
      export module AttributeInteger {
        export class Companion {
          public static class: java.lang.Class<io.appwrite.models.AttributeInteger.Companion>;
          public from(map: java.util.Map<string, any>): io.appwrite.models.AttributeInteger;
        }
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module models {
      export class AttributeIp {
        public static class: java.lang.Class<io.appwrite.models.AttributeIp>;
        public getRequired(): boolean;
        public getStatus(): string;
        public component5(): boolean;
        public component6(): java.lang.Boolean;
        public getKey(): string;
        public equals(other: any): boolean;
        public hashCode(): number;
        public component2(): string;
        public component9(): string;
        public getType(): string;
        public getFormat(): string;
        public constructor(key: string, type: string, status: string, error: string, required: boolean, array: java.lang.Boolean, createdAt: string, updatedAt: string, format: string, default_: string);
        public setDefault(value: string): void;
        public copy(key: string, type: string, status: string, error: string, required: boolean, array: java.lang.Boolean, createdAt: string, updatedAt: string, format: string, default_: string): io.appwrite.models.AttributeIp;
        public getUpdatedAt(): string;
        public component1(): string;
        public component4(): string;
        public component8(): string;
        public toString(): string;
        public getArray(): java.lang.Boolean;
        public getCreatedAt(): string;
        public component7(): string;
        public component3(): string;
        public component10(): string;
        public getError(): string;
        public setArray(value: java.lang.Boolean): void;
        public getDefault(): string;
        public toMap(): java.util.Map<string, any>;
      }
      export module AttributeIp {
        export class Companion {
          public static class: java.lang.Class<io.appwrite.models.AttributeIp.Companion>;
          public from(map: java.util.Map<string, any>): io.appwrite.models.AttributeIp;
        }
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module models {
      export class AttributeList {
        public static class: java.lang.Class<io.appwrite.models.AttributeList>;
        public component2(): java.util.List<any>;
        public equals(other: any): boolean;
        public getAttributes(): java.util.List<any>;
        public constructor(total: number, attributes: java.util.List<any>);
        public hashCode(): number;
        public getTotal(): number;
        public component1(): number;
        public toString(): string;
        public toMap(): java.util.Map<string, any>;
        public copy(total: number, attributes: java.util.List<any>): io.appwrite.models.AttributeList;
      }
      export module AttributeList {
        export class Companion {
          public static class: java.lang.Class<io.appwrite.models.AttributeList.Companion>;
          public from(map: java.util.Map<string, any>): io.appwrite.models.AttributeList;
        }
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module models {
      export class AttributeRelationship {
        public static class: java.lang.Class<io.appwrite.models.AttributeRelationship>;
        public getRequired(): boolean;
        public getSide(): string;
        public getStatus(): string;
        public getTwoWay(): boolean;
        public component13(): string;
        public getRelatedCollection(): string;
        public component5(): boolean;
        public component6(): java.lang.Boolean;
        public getRelationType(): string;
        public getKey(): string;
        public equals(other: any): boolean;
        public hashCode(): number;
        public component12(): string;
        public component2(): string;
        public component9(): string;
        public getType(): string;
        public getTwoWayKey(): string;
        public getUpdatedAt(): string;
        public component1(): string;
        public component4(): string;
        public component8(): string;
        public constructor(key: string, type: string, status: string, error: string, required: boolean, array: java.lang.Boolean, createdAt: string, updatedAt: string, relatedCollection: string, relationType: string, twoWay: boolean, twoWayKey: string, onDelete: string, side: string);
        public toString(): string;
        public getArray(): java.lang.Boolean;
        public getCreatedAt(): string;
        public component11(): boolean;
        public component14(): string;
        public component7(): string;
        public component3(): string;
        public component10(): string;
        public getError(): string;
        public copy(key: string, type: string, status: string, error: string, required: boolean, array: java.lang.Boolean, createdAt: string, updatedAt: string, relatedCollection: string, relationType: string, twoWay: boolean, twoWayKey: string, onDelete: string, side: string): io.appwrite.models.AttributeRelationship;
        public setArray(value: java.lang.Boolean): void;
        public getOnDelete(): string;
        public toMap(): java.util.Map<string, any>;
      }
      export module AttributeRelationship {
        export class Companion {
          public static class: java.lang.Class<io.appwrite.models.AttributeRelationship.Companion>;
          public from(map: java.util.Map<string, any>): io.appwrite.models.AttributeRelationship;
        }
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module models {
      export class AttributeString {
        public static class: java.lang.Class<io.appwrite.models.AttributeString>;
        public constructor(key: string, type: string, status: string, error: string, required: boolean, array: java.lang.Boolean, createdAt: string, updatedAt: string, size: number, default_: string);
        public getRequired(): boolean;
        public getStatus(): string;
        public component5(): boolean;
        public component6(): java.lang.Boolean;
        public getKey(): string;
        public equals(other: any): boolean;
        public getSize(): number;
        public hashCode(): number;
        public component2(): string;
        public getType(): string;
        public setDefault(value: string): void;
        public getUpdatedAt(): string;
        public component1(): string;
        public component4(): string;
        public component8(): string;
        public copy(key: string, type: string, status: string, error: string, required: boolean, array: java.lang.Boolean, createdAt: string, updatedAt: string, size: number, default_: string): io.appwrite.models.AttributeString;
        public toString(): string;
        public getArray(): java.lang.Boolean;
        public component9(): number;
        public getCreatedAt(): string;
        public component7(): string;
        public component3(): string;
        public component10(): string;
        public getError(): string;
        public setArray(value: java.lang.Boolean): void;
        public getDefault(): string;
        public toMap(): java.util.Map<string, any>;
      }
      export module AttributeString {
        export class Companion {
          public static class: java.lang.Class<io.appwrite.models.AttributeString.Companion>;
          public from(map: java.util.Map<string, any>): io.appwrite.models.AttributeString;
        }
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module models {
      export class AttributeUrl {
        public static class: java.lang.Class<io.appwrite.models.AttributeUrl>;
        public getRequired(): boolean;
        public getStatus(): string;
        public component5(): boolean;
        public component6(): java.lang.Boolean;
        public getKey(): string;
        public equals(other: any): boolean;
        public hashCode(): number;
        public component2(): string;
        public component9(): string;
        public getType(): string;
        public getFormat(): string;
        public constructor(key: string, type: string, status: string, error: string, required: boolean, array: java.lang.Boolean, createdAt: string, updatedAt: string, format: string, default_: string);
        public setDefault(value: string): void;
        public getUpdatedAt(): string;
        public component1(): string;
        public component4(): string;
        public component8(): string;
        public copy(key: string, type: string, status: string, error: string, required: boolean, array: java.lang.Boolean, createdAt: string, updatedAt: string, format: string, default_: string): io.appwrite.models.AttributeUrl;
        public toString(): string;
        public getArray(): java.lang.Boolean;
        public getCreatedAt(): string;
        public component7(): string;
        public component3(): string;
        public component10(): string;
        public getError(): string;
        public setArray(value: java.lang.Boolean): void;
        public getDefault(): string;
        public toMap(): java.util.Map<string, any>;
      }
      export module AttributeUrl {
        export class Companion {
          public static class: java.lang.Class<io.appwrite.models.AttributeUrl.Companion>;
          public from(map: java.util.Map<string, any>): io.appwrite.models.AttributeUrl;
        }
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module models {
      export class Bucket {
        public static class: java.lang.Class<io.appwrite.models.Bucket>;
        public getId(): string;
        public component6(): string;
        public component5(): boolean;
        public getAllowedFileExtensions(): java.util.List<string>;
        public getCompression(): string;
        public equals(other: any): boolean;
        public hashCode(): number;
        public getEnabled(): boolean;
        public component2(): string;
        public constructor(id: string, createdAt: string, updatedAt: string, permissions: java.util.List<string>, fileSecurity: boolean, name: string, enabled: boolean, maximumFileSize: number, allowedFileExtensions: java.util.List<string>, compression: string, encryption: boolean, antivirus: boolean);
        public copy(id: string, createdAt: string, updatedAt: string, permissions: java.util.List<string>, fileSecurity: boolean, name: string, enabled: boolean, maximumFileSize: number, allowedFileExtensions: java.util.List<string>, compression: string, encryption: boolean, antivirus: boolean): io.appwrite.models.Bucket;
        public component7(): boolean;
        public getFileSecurity(): boolean;
        public getUpdatedAt(): string;
        public component1(): string;
        public component4(): java.util.List<string>;
        public getName(): string;
        public toString(): string;
        public getEncryption(): boolean;
        public getCreatedAt(): string;
        public component11(): boolean;
        public component9(): java.util.List<string>;
        public component12(): boolean;
        public component3(): string;
        public component10(): string;
        public getPermissions(): java.util.List<string>;
        public toMap(): java.util.Map<string, any>;
        public component8(): number;
        public getMaximumFileSize(): number;
        public getAntivirus(): boolean;
      }
      export module Bucket {
        export class Companion {
          public static class: java.lang.Class<io.appwrite.models.Bucket.Companion>;
          public from(map: java.util.Map<string, any>): io.appwrite.models.Bucket;
        }
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module models {
      export class BucketList {
        public static class: java.lang.Class<io.appwrite.models.BucketList>;
        public component2(): java.util.List<io.appwrite.models.Bucket>;
        public equals(other: any): boolean;
        public copy(total: number, buckets: java.util.List<io.appwrite.models.Bucket>): io.appwrite.models.BucketList;
        public hashCode(): number;
        public constructor(total: number, buckets: java.util.List<io.appwrite.models.Bucket>);
        public getTotal(): number;
        public component1(): number;
        public toString(): string;
        public getBuckets(): java.util.List<io.appwrite.models.Bucket>;
        public toMap(): java.util.Map<string, any>;
      }
      export module BucketList {
        export class Companion {
          public static class: java.lang.Class<io.appwrite.models.BucketList.Companion>;
          public from(it: java.util.Map<string, any>): io.appwrite.models.BucketList;
        }
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module models {
      export class Collection {
        public static class: java.lang.Class<io.appwrite.models.Collection>;
        public copy(id: string, createdAt: string, updatedAt: string, permissions: java.util.List<string>, databaseId: string, name: string, enabled: boolean, documentSecurity: boolean, attributes: java.util.List<any>, indexes: java.util.List<io.appwrite.models.Index>): io.appwrite.models.Collection;
        public getId(): string;
        public component6(): string;
        public equals(other: any): boolean;
        public getAttributes(): java.util.List<any>;
        public component9(): java.util.List<any>;
        public hashCode(): number;
        public getEnabled(): boolean;
        public component5(): string;
        public component2(): string;
        public component8(): boolean;
        public getDatabaseId(): string;
        public component10(): java.util.List<io.appwrite.models.Index>;
        public component7(): boolean;
        public getIndexes(): java.util.List<io.appwrite.models.Index>;
        public getUpdatedAt(): string;
        public component1(): string;
        public component4(): java.util.List<string>;
        public constructor(id: string, createdAt: string, updatedAt: string, permissions: java.util.List<string>, databaseId: string, name: string, enabled: boolean, documentSecurity: boolean, attributes: java.util.List<any>, indexes: java.util.List<io.appwrite.models.Index>);
        public getName(): string;
        public toString(): string;
        public getCreatedAt(): string;
        public component3(): string;
        public getDocumentSecurity(): boolean;
        public getPermissions(): java.util.List<string>;
        public toMap(): java.util.Map<string, any>;
      }
      export module Collection {
        export class Companion {
          public static class: java.lang.Class<io.appwrite.models.Collection.Companion>;
          public from(it: java.util.Map<string, any>): io.appwrite.models.Collection;
        }
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module models {
      export class CollectionList {
        public static class: java.lang.Class<io.appwrite.models.CollectionList>;
        public equals(other: any): boolean;
        public constructor(total: number, collections: java.util.List<io.appwrite.models.Collection>);
        public hashCode(): number;
        public getTotal(): number;
        public component1(): number;
        public copy(total: number, collections: java.util.List<io.appwrite.models.Collection>): io.appwrite.models.CollectionList;
        public toString(): string;
        public toMap(): java.util.Map<string, any>;
        public getCollections(): java.util.List<io.appwrite.models.Collection>;
        public component2(): java.util.List<io.appwrite.models.Collection>;
      }
      export module CollectionList {
        export class Companion {
          public static class: java.lang.Class<io.appwrite.models.CollectionList.Companion>;
          public from(it: java.util.Map<string, any>): io.appwrite.models.CollectionList;
        }
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module models {
      export class Continent {
        public static class: java.lang.Class<io.appwrite.models.Continent>;
        public constructor(name: string, code: string);
        public equals(other: any): boolean;
        public component1(): string;
        public hashCode(): number;
        public component2(): string;
        public getName(): string;
        public getCode(): string;
        public toString(): string;
        public toMap(): java.util.Map<string, any>;
        public copy(name: string, code: string): io.appwrite.models.Continent;
      }
      export module Continent {
        export class Companion {
          public static class: java.lang.Class<io.appwrite.models.Continent.Companion>;
          public from(map: java.util.Map<string, any>): io.appwrite.models.Continent;
        }
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module models {
      export class ContinentList {
        public static class: java.lang.Class<io.appwrite.models.ContinentList>;
        public component2(): java.util.List<io.appwrite.models.Continent>;
        public equals(other: any): boolean;
        public getContinents(): java.util.List<io.appwrite.models.Continent>;
        public hashCode(): number;
        public constructor(total: number, continents: java.util.List<io.appwrite.models.Continent>);
        public getTotal(): number;
        public component1(): number;
        public toString(): string;
        public toMap(): java.util.Map<string, any>;
        public copy(total: number, continents: java.util.List<io.appwrite.models.Continent>): io.appwrite.models.ContinentList;
      }
      export module ContinentList {
        export class Companion {
          public static class: java.lang.Class<io.appwrite.models.ContinentList.Companion>;
          public from(it: java.util.Map<string, any>): io.appwrite.models.ContinentList;
        }
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module models {
      export class Country {
        public static class: java.lang.Class<io.appwrite.models.Country>;
        public constructor(name: string, code: string);
        public equals(other: any): boolean;
        public component1(): string;
        public copy(name: string, code: string): io.appwrite.models.Country;
        public hashCode(): number;
        public component2(): string;
        public getName(): string;
        public getCode(): string;
        public toString(): string;
        public toMap(): java.util.Map<string, any>;
      }
      export module Country {
        export class Companion {
          public static class: java.lang.Class<io.appwrite.models.Country.Companion>;
          public from(map: java.util.Map<string, any>): io.appwrite.models.Country;
        }
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module models {
      export class CountryList {
        public static class: java.lang.Class<io.appwrite.models.CountryList>;
        public equals(other: any): boolean;
        public hashCode(): number;
        public getTotal(): number;
        public component1(): number;
        public constructor(total: number, countries: java.util.List<io.appwrite.models.Country>);
        public getCountries(): java.util.List<io.appwrite.models.Country>;
        public toString(): string;
        public toMap(): java.util.Map<string, any>;
        public copy(total: number, countries: java.util.List<io.appwrite.models.Country>): io.appwrite.models.CountryList;
        public component2(): java.util.List<io.appwrite.models.Country>;
      }
      export module CountryList {
        export class Companion {
          public static class: java.lang.Class<io.appwrite.models.CountryList.Companion>;
          public from(it: java.util.Map<string, any>): io.appwrite.models.CountryList;
        }
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module models {
      export class Currency {
        public static class: java.lang.Class<io.appwrite.models.Currency>;
        public getSymbol(): string;
        public component4(): number;
        public copy(symbol: string, name: string, symbolNative: string, decimalDigits: number, rounding: number, code: string, namePlural: string): io.appwrite.models.Currency;
        public component1(): string;
        public component6(): string;
        public getSymbolNative(): string;
        public getName(): string;
        public toString(): string;
        public getRounding(): number;
        public getDecimalDigits(): number;
        public component5(): number;
        public equals(other: any): boolean;
        public component7(): string;
        public component3(): string;
        public hashCode(): number;
        public component2(): string;
        public getNamePlural(): string;
        public getCode(): string;
        public toMap(): java.util.Map<string, any>;
        public constructor(symbol: string, name: string, symbolNative: string, decimalDigits: number, rounding: number, code: string, namePlural: string);
      }
      export module Currency {
        export class Companion {
          public static class: java.lang.Class<io.appwrite.models.Currency.Companion>;
          public from(map: java.util.Map<string, any>): io.appwrite.models.Currency;
        }
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module models {
      export class CurrencyList {
        public static class: java.lang.Class<io.appwrite.models.CurrencyList>;
        public component2(): java.util.List<io.appwrite.models.Currency>;
        public getCurrencies(): java.util.List<io.appwrite.models.Currency>;
        public equals(other: any): boolean;
        public hashCode(): number;
        public copy(total: number, currencies: java.util.List<io.appwrite.models.Currency>): io.appwrite.models.CurrencyList;
        public getTotal(): number;
        public component1(): number;
        public toString(): string;
        public toMap(): java.util.Map<string, any>;
        public constructor(total: number, currencies: java.util.List<io.appwrite.models.Currency>);
      }
      export module CurrencyList {
        export class Companion {
          public static class: java.lang.Class<io.appwrite.models.CurrencyList.Companion>;
          public from(it: java.util.Map<string, any>): io.appwrite.models.CurrencyList;
        }
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module models {
      export class Database {
        public static class: java.lang.Class<io.appwrite.models.Database>;
        public constructor(id: string, name: string, createdAt: string, updatedAt: string, enabled: boolean);
        public getId(): string;
        public getUpdatedAt(): string;
        public component1(): string;
        public component4(): string;
        public component5(): boolean;
        public getName(): string;
        public toString(): string;
        public getCreatedAt(): string;
        public copy(id: string, name: string, createdAt: string, updatedAt: string, enabled: boolean): io.appwrite.models.Database;
        public equals(other: any): boolean;
        public component3(): string;
        public hashCode(): number;
        public getEnabled(): boolean;
        public component2(): string;
        public toMap(): java.util.Map<string, any>;
      }
      export module Database {
        export class Companion {
          public static class: java.lang.Class<io.appwrite.models.Database.Companion>;
          public from(map: java.util.Map<string, any>): io.appwrite.models.Database;
        }
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module models {
      export class DatabaseList {
        public static class: java.lang.Class<io.appwrite.models.DatabaseList>;
        public component2(): java.util.List<io.appwrite.models.Database>;
        public equals(other: any): boolean;
        public getDatabases(): java.util.List<io.appwrite.models.Database>;
        public copy(total: number, databases: java.util.List<io.appwrite.models.Database>): io.appwrite.models.DatabaseList;
        public hashCode(): number;
        public getTotal(): number;
        public component1(): number;
        public constructor(total: number, databases: java.util.List<io.appwrite.models.Database>);
        public toString(): string;
        public toMap(): java.util.Map<string, any>;
      }
      export module DatabaseList {
        export class Companion {
          public static class: java.lang.Class<io.appwrite.models.DatabaseList.Companion>;
          public from(it: java.util.Map<string, any>): io.appwrite.models.DatabaseList;
        }
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module models {
      export class Deployment {
        public static class: java.lang.Class<io.appwrite.models.Deployment>;
        public getId(): string;
        public getBuildId(): string;
        public getResourceId(): string;
        public component22(): string;
        public hashCode(): number;
        public component5(): string;
        public component2(): string;
        public component15(): string;
        public component25(): string;
        public getProviderCommitAuthorUrl(): string;
        public getType(): string;
        public component21(): string;
        public component18(): string;
        public component11(): string;
        public component4(): string;
        public getProviderBranch(): string;
        public toString(): string;
        public getTotalSize(): number;
        public component9(): number;
        public getActivate(): boolean;
        public getBuildDuration(): number;
        public component20(): string;
        public component12(): boolean;
        public getProviderCommitMessage(): string;
        public component3(): string;
        public getResourceType(): string;
        public constructor(id: string, createdAt: string, updatedAt: string, type: string, resourceId: string, resourceType: string, entrypoint: string, sourceSize: number, buildSize: number, totalSize: number, buildId: string, activate: boolean, screenshotLight: string, screenshotDark: string, status: string, buildLogs: string, buildDuration: number, providerRepositoryName: string, providerRepositoryOwner: string, providerRepositoryUrl: string, providerBranch: string, providerCommitHash: string, providerCommitAuthorUrl: string, providerCommitAuthor: string, providerCommitMessage: string, providerCommitUrl: string, providerBranchUrl: string);
        public getProviderCommitUrl(): string;
        public getProviderCommitAuthor(): string;
        public component8(): number;
        public getScreenshotLight(): string;
        public component27(): string;
        public getStatus(): string;
        public copy(id: string, createdAt: string, updatedAt: string, type: string, resourceId: string, resourceType: string, entrypoint: string, sourceSize: number, buildSize: number, totalSize: number, buildId: string, activate: boolean, screenshotLight: string, screenshotDark: string, status: string, buildLogs: string, buildDuration: number, providerRepositoryName: string, providerRepositoryOwner: string, providerRepositoryUrl: string, providerBranch: string, providerCommitHash: string, providerCommitAuthorUrl: string, providerCommitAuthor: string, providerCommitMessage: string, providerCommitUrl: string, providerBranchUrl: string): io.appwrite.models.Deployment;
        public component6(): string;
        public component13(): string;
        public getProviderRepositoryUrl(): string;
        public component16(): string;
        public component26(): string;
        public component17(): number;
        public getEntrypoint(): string;
        public component19(): string;
        public equals(other: any): boolean;
        public getBuildSize(): number;
        public getProviderBranchUrl(): string;
        public getBuildLogs(): string;
        public getUpdatedAt(): string;
        public component1(): string;
        public getProviderRepositoryName(): string;
        public component24(): string;
        public getCreatedAt(): string;
        public getScreenshotDark(): string;
        public component10(): number;
        public getProviderRepositoryOwner(): string;
        public component14(): string;
        public component7(): string;
        public getProviderCommitHash(): string;
        public getSourceSize(): number;
        public component23(): string;
        public toMap(): java.util.Map<string, any>;
      }
      export module Deployment {
        export class Companion {
          public static class: java.lang.Class<io.appwrite.models.Deployment.Companion>;
          public from(map: java.util.Map<string, any>): io.appwrite.models.Deployment;
        }
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module models {
      export class DeploymentList {
        public static class: java.lang.Class<io.appwrite.models.DeploymentList>;
        public constructor(total: number, deployments: java.util.List<io.appwrite.models.Deployment>);
        public equals(other: any): boolean;
        public getDeployments(): java.util.List<io.appwrite.models.Deployment>;
        public component2(): java.util.List<io.appwrite.models.Deployment>;
        public hashCode(): number;
        public getTotal(): number;
        public component1(): number;
        public toString(): string;
        public toMap(): java.util.Map<string, any>;
        public copy(total: number, deployments: java.util.List<io.appwrite.models.Deployment>): io.appwrite.models.DeploymentList;
      }
      export module DeploymentList {
        export class Companion {
          public static class: java.lang.Class<io.appwrite.models.DeploymentList.Companion>;
          public from(it: java.util.Map<string, any>): io.appwrite.models.DeploymentList;
        }
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module models {
      export class Document<T> extends java.lang.Object {
        public static class: java.lang.Class<io.appwrite.models.Document<any>>;
        public component6(): java.util.List<string>;
        public getId(): string;
        public getUpdatedAt(): string;
        public component1(): string;
        public component4(): string;
        public toString(): string;
        public getData(): T;
        public getCreatedAt(): string;
        public equals(other: any): boolean;
        public copy(id: string, collectionId: string, databaseId: string, createdAt: string, updatedAt: string, permissions: java.util.List<string>, data: T): io.appwrite.models.Document<T>;
        public component3(): string;
        public hashCode(): number;
        public component5(): string;
        public getCollectionId(): string;
        public component2(): string;
        public getPermissions(): java.util.List<string>;
        public constructor(id: string, collectionId: string, databaseId: string, createdAt: string, updatedAt: string, permissions: java.util.List<string>, data: T);
        public component7(): T;
        public getDatabaseId(): string;
        public toMap(): java.util.Map<string, any>;
      }
      export module Document {
        export class Companion {
          public static class: java.lang.Class<io.appwrite.models.Document.Companion>;
          public from(map: java.util.Map<any, any>, nestedType: java.lang.Class<any>): io.appwrite.models.Document<any>;
          public invoke(id: string, collectionId: string, databaseId: string, createdAt: string, updatedAt: string, permissions: java.util.List<string>, data: java.util.Map<string, any>): io.appwrite.models.Document<java.util.Map<string, any>>;
        }
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module models {
      export class DocumentList<T> extends java.lang.Object {
        public static class: java.lang.Class<io.appwrite.models.DocumentList<any>>;
        public equals(other: any): boolean;
        public getDocuments(): java.util.List<io.appwrite.models.Document<T>>;
        public component2(): java.util.List<io.appwrite.models.Document<T>>;
        public hashCode(): number;
        public copy(total: number, documents: java.util.List<io.appwrite.models.Document<T>>): io.appwrite.models.DocumentList<T>;
        public constructor(total: number, documents: java.util.List<io.appwrite.models.Document<T>>);
        public getTotal(): number;
        public component1(): number;
        public toString(): string;
        public toMap(): java.util.Map<string, any>;
      }
      export module DocumentList {
        export class Companion {
          public static class: java.lang.Class<io.appwrite.models.DocumentList.Companion>;
          public from(it: java.util.Map<any, any>, item$iv$iv: java.lang.Class<any>): io.appwrite.models.DocumentList<any>;
          public invoke(total: number, documents: java.util.List<io.appwrite.models.Document<java.util.Map<string, any>>>): io.appwrite.models.DocumentList<java.util.Map<string, any>>;
        }
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module models {
      export class Execution {
        public static class: java.lang.Class<io.appwrite.models.Execution>;
        public component11(): number;
        public getId(): string;
        public getStatus(): string;
        public component6(): string;
        public component10(): java.util.List<io.appwrite.models.Headers>;
        public getDuration(): number;
        public component13(): java.util.List<io.appwrite.models.Headers>;
        public setScheduledAt(value: string): void;
        public getResponseStatusCode(): number;
        public getTrigger(): string;
        public equals(other: any): boolean;
        public hashCode(): number;
        public getRequestHeaders(): java.util.List<io.appwrite.models.Headers>;
        public component5(): string;
        public component12(): string;
        public component2(): string;
        public component15(): string;
        public component9(): string;
        public getResponseHeaders(): java.util.List<io.appwrite.models.Headers>;
        public getRequestPath(): string;
        public component16(): number;
        public getResponseBody(): string;
        public constructor(id: string, createdAt: string, updatedAt: string, permissions: java.util.List<string>, functionId: string, trigger: string, status: string, requestMethod: string, requestPath: string, requestHeaders: java.util.List<io.appwrite.models.Headers>, responseStatusCode: number, responseBody: string, responseHeaders: java.util.List<io.appwrite.models.Headers>, logs: string, errors: string, duration: number, scheduledAt: string);
        public getUpdatedAt(): string;
        public component1(): string;
        public component4(): java.util.List<string>;
        public component8(): string;
        public toString(): string;
        public getErrors(): string;
        public getRequestMethod(): string;
        public getCreatedAt(): string;
        public component14(): string;
        public component17(): string;
        public component7(): string;
        public getScheduledAt(): string;
        public component3(): string;
        public getLogs(): string;
        public copy(id: string, createdAt: string, updatedAt: string, permissions: java.util.List<string>, functionId: string, trigger: string, status: string, requestMethod: string, requestPath: string, requestHeaders: java.util.List<io.appwrite.models.Headers>, responseStatusCode: number, responseBody: string, responseHeaders: java.util.List<io.appwrite.models.Headers>, logs: string, errors: string, duration: number, scheduledAt: string): io.appwrite.models.Execution;
        public getPermissions(): java.util.List<string>;
        public toMap(): java.util.Map<string, any>;
        public getFunctionId(): string;
      }
      export module Execution {
        export class Companion {
          public static class: java.lang.Class<io.appwrite.models.Execution.Companion>;
          public from(it: java.util.Map<string, any>): io.appwrite.models.Execution;
        }
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module models {
      export class ExecutionList {
        public static class: java.lang.Class<io.appwrite.models.ExecutionList>;
        public getExecutions(): java.util.List<io.appwrite.models.Execution>;
        public equals(other: any): boolean;
        public hashCode(): number;
        public component2(): java.util.List<io.appwrite.models.Execution>;
        public constructor(total: number, executions: java.util.List<io.appwrite.models.Execution>);
        public getTotal(): number;
        public component1(): number;
        public toString(): string;
        public toMap(): java.util.Map<string, any>;
        public copy(total: number, executions: java.util.List<io.appwrite.models.Execution>): io.appwrite.models.ExecutionList;
      }
      export module ExecutionList {
        export class Companion {
          public static class: java.lang.Class<io.appwrite.models.ExecutionList.Companion>;
          public from(it: java.util.Map<string, any>): io.appwrite.models.ExecutionList;
        }
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module models {
      export class File {
        public static class: java.lang.Class<io.appwrite.models.File>;
        public component11(): number;
        public constructor(id: string, bucketId: string, createdAt: string, updatedAt: string, permissions: java.util.List<string>, name: string, signature: string, mimeType: string, sizeOriginal: number, chunksTotal: number, chunksUploaded: number);
        public getId(): string;
        public component6(): string;
        public getChunksUploaded(): number;
        public copy(id: string, bucketId: string, createdAt: string, updatedAt: string, permissions: java.util.List<string>, name: string, signature: string, mimeType: string, sizeOriginal: number, chunksTotal: number, chunksUploaded: number): io.appwrite.models.File;
        public equals(other: any): boolean;
        public getMimeType(): string;
        public hashCode(): number;
        public component2(): string;
        public getSignature(): string;
        public getUpdatedAt(): string;
        public component1(): string;
        public component4(): string;
        public component8(): string;
        public getName(): string;
        public toString(): string;
        public component9(): number;
        public getCreatedAt(): string;
        public component10(): number;
        public getSizeOriginal(): number;
        public component5(): java.util.List<string>;
        public component7(): string;
        public component3(): string;
        public getBucketId(): string;
        public getPermissions(): java.util.List<string>;
        public getChunksTotal(): number;
        public toMap(): java.util.Map<string, any>;
      }
      export module File {
        export class Companion {
          public static class: java.lang.Class<io.appwrite.models.File.Companion>;
          public from(map: java.util.Map<string, any>): io.appwrite.models.File;
        }
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module models {
      export class FileList {
        public static class: java.lang.Class<io.appwrite.models.FileList>;
        public component2(): java.util.List<io.appwrite.models.File>;
        public getFiles(): java.util.List<io.appwrite.models.File>;
        public equals(other: any): boolean;
        public constructor(total: number, files: java.util.List<io.appwrite.models.File>);
        public hashCode(): number;
        public getTotal(): number;
        public component1(): number;
        public copy(total: number, files: java.util.List<io.appwrite.models.File>): io.appwrite.models.FileList;
        public toString(): string;
        public toMap(): java.util.Map<string, any>;
      }
      export module FileList {
        export class Companion {
          public static class: java.lang.Class<io.appwrite.models.FileList.Companion>;
          public from(it: java.util.Map<string, any>): io.appwrite.models.FileList;
        }
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module models {
      export class Framework {
        public static class: java.lang.Class<io.appwrite.models.Framework>;
        public component1(): string;
        public component4(): java.util.List<string>;
        public getName(): string;
        public component5(): java.util.List<io.appwrite.models.FrameworkAdapter>;
        public copy(key: string, name: string, buildRuntime: string, runtimes: java.util.List<string>, adapters: java.util.List<io.appwrite.models.FrameworkAdapter>): io.appwrite.models.Framework;
        public toString(): string;
        public getKey(): string;
        public getBuildRuntime(): string;
        public equals(other: any): boolean;
        public component3(): string;
        public hashCode(): number;
        public getRuntimes(): java.util.List<string>;
        public getAdapters(): java.util.List<io.appwrite.models.FrameworkAdapter>;
        public component2(): string;
        public constructor(key: string, name: string, buildRuntime: string, runtimes: java.util.List<string>, adapters: java.util.List<io.appwrite.models.FrameworkAdapter>);
        public toMap(): java.util.Map<string, any>;
      }
      export module Framework {
        export class Companion {
          public static class: java.lang.Class<io.appwrite.models.Framework.Companion>;
          public from(it: java.util.Map<string, any>): io.appwrite.models.Framework;
        }
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module models {
      export class FrameworkAdapter {
        public static class: java.lang.Class<io.appwrite.models.FrameworkAdapter>;
        public component1(): string;
        public component4(): string;
        public copy(key: string, installCommand: string, buildCommand: string, outputDirectory: string, fallbackFile: string): io.appwrite.models.FrameworkAdapter;
        public toString(): string;
        public getKey(): string;
        public getOutputDirectory(): string;
        public equals(other: any): boolean;
        public constructor(key: string, installCommand: string, buildCommand: string, outputDirectory: string, fallbackFile: string);
        public getFallbackFile(): string;
        public component3(): string;
        public hashCode(): number;
        public component5(): string;
        public component2(): string;
        public getBuildCommand(): string;
        public getInstallCommand(): string;
        public toMap(): java.util.Map<string, any>;
      }
      export module FrameworkAdapter {
        export class Companion {
          public static class: java.lang.Class<io.appwrite.models.FrameworkAdapter.Companion>;
          public from(map: java.util.Map<string, any>): io.appwrite.models.FrameworkAdapter;
        }
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module models {
      export class FrameworkList {
        public static class: java.lang.Class<io.appwrite.models.FrameworkList>;
        public component2(): java.util.List<io.appwrite.models.Framework>;
        public copy(total: number, frameworks: java.util.List<io.appwrite.models.Framework>): io.appwrite.models.FrameworkList;
        public equals(other: any): boolean;
        public hashCode(): number;
        public constructor(total: number, frameworks: java.util.List<io.appwrite.models.Framework>);
        public getTotal(): number;
        public component1(): number;
        public getFrameworks(): java.util.List<io.appwrite.models.Framework>;
        public toString(): string;
        public toMap(): java.util.Map<string, any>;
      }
      export module FrameworkList {
        export class Companion {
          public static class: java.lang.Class<io.appwrite.models.FrameworkList.Companion>;
          public from(it: java.util.Map<string, any>): io.appwrite.models.FrameworkList;
        }
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module models {
      export class Function {
        public static class: java.lang.Class<io.appwrite.models.Function>;
        public component15(): java.util.List<string>;
        public getId(): string;
        public getSpecification(): string;
        public getLive(): boolean;
        public getProviderRootDirectory(): string;
        public component22(): string;
        public getVars(): java.util.List<io.appwrite.models.Variable>;
        public getDeploymentCreatedAt(): string;
        public hashCode(): number;
        public component5(): string;
        public component12(): string;
        public component2(): string;
        public copy(id: string, createdAt: string, updatedAt: string, execute: java.util.List<string>, name: string, enabled: boolean, live: boolean, logging: boolean, runtime: string, deploymentId: string, deploymentCreatedAt: string, latestDeploymentId: string, latestDeploymentCreatedAt: string, latestDeploymentStatus: string, scopes: java.util.List<string>, vars: java.util.List<io.appwrite.models.Variable>, events: java.util.List<string>, schedule: string, timeout: number, entrypoint: string, commands: string, version: string, installationId: string, providerRepositoryId: string, providerBranch: string, providerRootDirectory: string, providerSilentMode: boolean, specification: string): io.appwrite.models.Function;
        public getCommands(): string;
        public component25(): string;
        public getInstallationId(): string;
        public component6(): boolean;
        public component8(): boolean;
        public getLatestDeploymentCreatedAt(): string;
        public component7(): boolean;
        public component21(): string;
        public component18(): string;
        public component11(): string;
        public component17(): java.util.List<string>;
        public component4(): java.util.List<string>;
        public getLogging(): boolean;
        public getTimeout(): number;
        public getName(): string;
        public getRuntime(): string;
        public getProviderBranch(): string;
        public toString(): string;
        public getScopes(): java.util.List<string>;
        public component28(): string;
        public component20(): string;
        public component3(): string;
        public component10(): string;
        public component27(): boolean;
        public component13(): string;
        public component26(): string;
        public getExecute(): java.util.List<string>;
        public getEntrypoint(): string;
        public equals(other: any): boolean;
        public getSchedule(): string;
        public getEnabled(): boolean;
        public constructor(id: string, createdAt: string, updatedAt: string, execute: java.util.List<string>, name: string, enabled: boolean, live: boolean, logging: boolean, runtime: string, deploymentId: string, deploymentCreatedAt: string, latestDeploymentId: string, latestDeploymentCreatedAt: string, latestDeploymentStatus: string, scopes: java.util.List<string>, vars: java.util.List<io.appwrite.models.Variable>, events: java.util.List<string>, schedule: string, timeout: number, entrypoint: string, commands: string, version: string, installationId: string, providerRepositoryId: string, providerBranch: string, providerRootDirectory: string, providerSilentMode: boolean, specification: string);
        public component16(): java.util.List<io.appwrite.models.Variable>;
        public component9(): string;
        public getProviderRepositoryId(): string;
        public getEvents(): java.util.List<string>;
        public getUpdatedAt(): string;
        public component1(): string;
        public getProviderSilentMode(): boolean;
        public component24(): string;
        public getDeploymentId(): string;
        public getLatestDeploymentStatus(): string;
        public component19(): number;
        public getCreatedAt(): string;
        public getVersion(): string;
        public getLatestDeploymentId(): string;
        public component14(): string;
        public component23(): string;
        public toMap(): java.util.Map<string, any>;
      }
      export module Function {
        export class Companion {
          public static class: java.lang.Class<io.appwrite.models.Function.Companion>;
          public from(it: java.util.Map<string, any>): io.appwrite.models.Function;
        }
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module models {
      export class FunctionList {
        public static class: java.lang.Class<io.appwrite.models.FunctionList>;
        public constructor(total: number, functions: java.util.List<io.appwrite.models.Function>);
        public equals(other: any): boolean;
        public hashCode(): number;
        public copy(total: number, functions: java.util.List<io.appwrite.models.Function>): io.appwrite.models.FunctionList;
        public getTotal(): number;
        public component1(): number;
        public component2(): java.util.List<io.appwrite.models.Function>;
        public getFunctions(): java.util.List<io.appwrite.models.Function>;
        public toString(): string;
        public toMap(): java.util.Map<string, any>;
      }
      export module FunctionList {
        export class Companion {
          public static class: java.lang.Class<io.appwrite.models.FunctionList.Companion>;
          public from(it: java.util.Map<string, any>): io.appwrite.models.FunctionList;
        }
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module models {
      export class Headers {
        public static class: java.lang.Class<io.appwrite.models.Headers>;
        public copy(name: string, value: string): io.appwrite.models.Headers;
        public equals(other: any): boolean;
        public component1(): string;
        public constructor(name: string, value: string);
        public hashCode(): number;
        public getValue(): string;
        public component2(): string;
        public getName(): string;
        public toString(): string;
        public toMap(): java.util.Map<string, any>;
      }
      export module Headers {
        export class Companion {
          public static class: java.lang.Class<io.appwrite.models.Headers.Companion>;
          public from(map: java.util.Map<string, any>): io.appwrite.models.Headers;
        }
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module models {
      export class HealthAntivirus {
        public static class: java.lang.Class<io.appwrite.models.HealthAntivirus>;
        public getVersion(): string;
        public getStatus(): string;
        public equals(other: any): boolean;
        public component1(): string;
        public hashCode(): number;
        public component2(): string;
        public constructor(version: string, status: string);
        public copy(version: string, status: string): io.appwrite.models.HealthAntivirus;
        public toString(): string;
        public toMap(): java.util.Map<string, any>;
      }
      export module HealthAntivirus {
        export class Companion {
          public static class: java.lang.Class<io.appwrite.models.HealthAntivirus.Companion>;
          public from(map: java.util.Map<string, any>): io.appwrite.models.HealthAntivirus;
        }
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module models {
      export class HealthCertificate {
        public static class: java.lang.Class<io.appwrite.models.HealthCertificate>;
        public getIssuerOrganisation(): string;
        public component1(): string;
        public copy(name: string, subjectSN: string, issuerOrganisation: string, validFrom: string, validTo: string, signatureTypeSN: string): io.appwrite.models.HealthCertificate;
        public component6(): string;
        public component4(): string;
        public getName(): string;
        public getValidFrom(): string;
        public getValidTo(): string;
        public toString(): string;
        public getSubjectSN(): string;
        public equals(other: any): boolean;
        public getSignatureTypeSN(): string;
        public constructor(name: string, subjectSN: string, issuerOrganisation: string, validFrom: string, validTo: string, signatureTypeSN: string);
        public component3(): string;
        public hashCode(): number;
        public component5(): string;
        public component2(): string;
        public toMap(): java.util.Map<string, any>;
      }
      export module HealthCertificate {
        export class Companion {
          public static class: java.lang.Class<io.appwrite.models.HealthCertificate.Companion>;
          public from(map: java.util.Map<string, any>): io.appwrite.models.HealthCertificate;
        }
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module models {
      export class HealthQueue {
        public static class: java.lang.Class<io.appwrite.models.HealthQueue>;
        public copy(size: number): io.appwrite.models.HealthQueue;
        public equals(other: any): boolean;
        public getSize(): number;
        public hashCode(): number;
        public constructor(size: number);
        public component1(): number;
        public toString(): string;
        public toMap(): java.util.Map<string, any>;
      }
      export module HealthQueue {
        export class Companion {
          public static class: java.lang.Class<io.appwrite.models.HealthQueue.Companion>;
          public from(map: java.util.Map<string, any>): io.appwrite.models.HealthQueue;
        }
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module models {
      export class HealthStatus {
        public static class: java.lang.Class<io.appwrite.models.HealthStatus>;
        public getPing(): number;
        public getStatus(): string;
        public equals(other: any): boolean;
        public copy(name: string, ping: number, status: string): io.appwrite.models.HealthStatus;
        public component1(): string;
        public component2(): number;
        public component3(): string;
        public hashCode(): number;
        public getName(): string;
        public constructor(name: string, ping: number, status: string);
        public toString(): string;
        public toMap(): java.util.Map<string, any>;
      }
      export module HealthStatus {
        export class Companion {
          public static class: java.lang.Class<io.appwrite.models.HealthStatus.Companion>;
          public from(map: java.util.Map<string, any>): io.appwrite.models.HealthStatus;
        }
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module models {
      export class HealthTime {
        public static class: java.lang.Class<io.appwrite.models.HealthTime>;
        public getDiff(): number;
        public constructor(remoteTime: number, localTime: number, diff: number);
        public getLocalTime(): number;
        public component3(): number;
        public equals(other: any): boolean;
        public component2(): number;
        public hashCode(): number;
        public component1(): number;
        public getRemoteTime(): number;
        public toString(): string;
        public toMap(): java.util.Map<string, any>;
        public copy(remoteTime: number, localTime: number, diff: number): io.appwrite.models.HealthTime;
      }
      export module HealthTime {
        export class Companion {
          public static class: java.lang.Class<io.appwrite.models.HealthTime.Companion>;
          public from(map: java.util.Map<string, any>): io.appwrite.models.HealthTime;
        }
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module models {
      export class Identity {
        public static class: java.lang.Class<io.appwrite.models.Identity>;
        public getId(): string;
        public getProviderRefreshToken(): string;
        public component6(): string;
        public getProvider(): string;
        public equals(other: any): boolean;
        public hashCode(): number;
        public component5(): string;
        public component2(): string;
        public component9(): string;
        public constructor(id: string, createdAt: string, updatedAt: string, userId: string, provider: string, providerUid: string, providerEmail: string, providerAccessToken: string, providerAccessTokenExpiry: string, providerRefreshToken: string);
        public getProviderAccessTokenExpiry(): string;
        public copy(id: string, createdAt: string, updatedAt: string, userId: string, provider: string, providerUid: string, providerEmail: string, providerAccessToken: string, providerAccessTokenExpiry: string, providerRefreshToken: string): io.appwrite.models.Identity;
        public getUpdatedAt(): string;
        public component1(): string;
        public component4(): string;
        public getUserId(): string;
        public component8(): string;
        public toString(): string;
        public getCreatedAt(): string;
        public getProviderUid(): string;
        public component7(): string;
        public component3(): string;
        public component10(): string;
        public getProviderEmail(): string;
        public getProviderAccessToken(): string;
        public toMap(): java.util.Map<string, any>;
      }
      export module Identity {
        export class Companion {
          public static class: java.lang.Class<io.appwrite.models.Identity.Companion>;
          public from(map: java.util.Map<string, any>): io.appwrite.models.Identity;
        }
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module models {
      export class IdentityList {
        public static class: java.lang.Class<io.appwrite.models.IdentityList>;
        public constructor(total: number, identities: java.util.List<io.appwrite.models.Identity>);
        public component2(): java.util.List<io.appwrite.models.Identity>;
        public equals(other: any): boolean;
        public hashCode(): number;
        public getTotal(): number;
        public getIdentities(): java.util.List<io.appwrite.models.Identity>;
        public component1(): number;
        public copy(total: number, identities: java.util.List<io.appwrite.models.Identity>): io.appwrite.models.IdentityList;
        public toString(): string;
        public toMap(): java.util.Map<string, any>;
      }
      export module IdentityList {
        export class Companion {
          public static class: java.lang.Class<io.appwrite.models.IdentityList.Companion>;
          public from(it: java.util.Map<string, any>): io.appwrite.models.IdentityList;
        }
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module models {
      export class Index {
        public static class: java.lang.Class<io.appwrite.models.Index>;
        public getOrders(): java.util.List<string>;
        public getStatus(): string;
        public getKey(): string;
        public getLengths(): java.util.List<java.lang.Long>;
        public copy(key: string, type: string, status: string, error: string, attributes: java.util.List<string>, lengths: java.util.List<java.lang.Long>, orders: java.util.List<string>, createdAt: string, updatedAt: string): io.appwrite.models.Index;
        public component7(): java.util.List<string>;
        public getAttributes(): java.util.List<string>;
        public equals(other: any): boolean;
        public hashCode(): number;
        public component2(): string;
        public component9(): string;
        public getType(): string;
        public getUpdatedAt(): string;
        public component1(): string;
        public component4(): string;
        public setOrders(value: java.util.List<string>): void;
        public component8(): string;
        public toString(): string;
        public constructor(key: string, type: string, status: string, error: string, attributes: java.util.List<string>, lengths: java.util.List<java.lang.Long>, orders: java.util.List<string>, createdAt: string, updatedAt: string);
        public getCreatedAt(): string;
        public component5(): java.util.List<string>;
        public component6(): java.util.List<java.lang.Long>;
        public component3(): string;
        public getError(): string;
        public toMap(): java.util.Map<string, any>;
      }
      export module Index {
        export class Companion {
          public static class: java.lang.Class<io.appwrite.models.Index.Companion>;
          public from(map: java.util.Map<string, any>): io.appwrite.models.Index;
        }
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module models {
      export class IndexList {
        public static class: java.lang.Class<io.appwrite.models.IndexList>;
        public component2(): java.util.List<io.appwrite.models.Index>;
        public getIndexes(): java.util.List<io.appwrite.models.Index>;
        public equals(other: any): boolean;
        public copy(total: number, indexes: java.util.List<io.appwrite.models.Index>): io.appwrite.models.IndexList;
        public hashCode(): number;
        public getTotal(): number;
        public component1(): number;
        public toString(): string;
        public toMap(): java.util.Map<string, any>;
        public constructor(total: number, indexes: java.util.List<io.appwrite.models.Index>);
      }
      export module IndexList {
        export class Companion {
          public static class: java.lang.Class<io.appwrite.models.IndexList.Companion>;
          public from(it: java.util.Map<string, any>): io.appwrite.models.IndexList;
        }
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module models {
      export class InputFile {
        public static class: java.lang.Class<io.appwrite.models.InputFile>;
        public path: string;
        public filename: string;
        public mimeType: string;
        public sourceType: string;
        public data: any;
        public setFilename(value: string): void;
        public getMimeType(): string;
        public getSourceType(): string;
        public setData(value: any): void;
        public getFilename(): string;
        public setSourceType(value: string): void;
        public getPath(): string;
        public setPath(value: string): void;
        public setMimeType(value: string): void;
        public getData(): any;
      }
      export module InputFile {
        export class Companion {
          public static class: java.lang.Class<io.appwrite.models.InputFile.Companion>;
          public fromPath($this$fromPath_u24lambda_u241: string): io.appwrite.models.InputFile;
          public fromFile($this$fromFile_u24lambda_u240: java.io.File): io.appwrite.models.InputFile;
          public fromBytes($this$fromBytes_u24lambda_u242: androidNative.Array<number>, this_: string, bytes: string): io.appwrite.models.InputFile;
        }
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module models {
      export class Jwt {
        public static class: java.lang.Class<io.appwrite.models.Jwt>;
        public constructor(jwt: string);
        public equals(other: any): boolean;
        public component1(): string;
        public getJwt(): string;
        public hashCode(): number;
        public toString(): string;
        public toMap(): java.util.Map<string, any>;
        public copy(jwt: string): io.appwrite.models.Jwt;
      }
      export module Jwt {
        export class Companion {
          public static class: java.lang.Class<io.appwrite.models.Jwt.Companion>;
          public from(map: java.util.Map<string, any>): io.appwrite.models.Jwt;
        }
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module models {
      export class Language {
        public static class: java.lang.Class<io.appwrite.models.Language>;
        public equals(other: any): boolean;
        public component1(): string;
        public component3(): string;
        public hashCode(): number;
        public getNativeName(): string;
        public component2(): string;
        public constructor(name: string, code: string, nativeName: string);
        public getName(): string;
        public getCode(): string;
        public toString(): string;
        public toMap(): java.util.Map<string, any>;
        public copy(name: string, code: string, nativeName: string): io.appwrite.models.Language;
      }
      export module Language {
        export class Companion {
          public static class: java.lang.Class<io.appwrite.models.Language.Companion>;
          public from(map: java.util.Map<string, any>): io.appwrite.models.Language;
        }
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module models {
      export class LanguageList {
        public static class: java.lang.Class<io.appwrite.models.LanguageList>;
        public getLanguages(): java.util.List<io.appwrite.models.Language>;
        public equals(other: any): boolean;
        public constructor(total: number, languages: java.util.List<io.appwrite.models.Language>);
        public hashCode(): number;
        public getTotal(): number;
        public component1(): number;
        public toString(): string;
        public toMap(): java.util.Map<string, any>;
        public copy(total: number, languages: java.util.List<io.appwrite.models.Language>): io.appwrite.models.LanguageList;
        public component2(): java.util.List<io.appwrite.models.Language>;
      }
      export module LanguageList {
        export class Companion {
          public static class: java.lang.Class<io.appwrite.models.LanguageList.Companion>;
          public from(it: java.util.Map<string, any>): io.appwrite.models.LanguageList;
        }
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module models {
      export class Locale {
        public static class: java.lang.Class<io.appwrite.models.Locale>;
        public getContinent(): string;
        public getIp(): string;
        public getCurrency(): string;
        public getCountry(): string;
        public component1(): string;
        public component4(): string;
        public copy(ip: string, countryCode: string, country: string, continentCode: string, continent: string, eu: boolean, currency: string): io.appwrite.models.Locale;
        public getContinentCode(): string;
        public toString(): string;
        public equals(other: any): boolean;
        public getEu(): boolean;
        public component7(): string;
        public component3(): string;
        public hashCode(): number;
        public component5(): string;
        public getCountryCode(): string;
        public component2(): string;
        public component6(): boolean;
        public toMap(): java.util.Map<string, any>;
        public constructor(ip: string, countryCode: string, country: string, continentCode: string, continent: string, eu: boolean, currency: string);
      }
      export module Locale {
        export class Companion {
          public static class: java.lang.Class<io.appwrite.models.Locale.Companion>;
          public from(map: java.util.Map<string, any>): io.appwrite.models.Locale;
        }
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module models {
      export class LocaleCode {
        public static class: java.lang.Class<io.appwrite.models.LocaleCode>;
        public equals(other: any): boolean;
        public component1(): string;
        public copy(code: string, name: string): io.appwrite.models.LocaleCode;
        public hashCode(): number;
        public component2(): string;
        public getName(): string;
        public getCode(): string;
        public toString(): string;
        public toMap(): java.util.Map<string, any>;
        public constructor(code: string, name: string);
      }
      export module LocaleCode {
        export class Companion {
          public static class: java.lang.Class<io.appwrite.models.LocaleCode.Companion>;
          public from(map: java.util.Map<string, any>): io.appwrite.models.LocaleCode;
        }
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module models {
      export class LocaleCodeList {
        public static class: java.lang.Class<io.appwrite.models.LocaleCodeList>;
        public copy(total: number, localeCodes: java.util.List<io.appwrite.models.LocaleCode>): io.appwrite.models.LocaleCodeList;
        public equals(other: any): boolean;
        public hashCode(): number;
        public component2(): java.util.List<io.appwrite.models.LocaleCode>;
        public constructor(total: number, localeCodes: java.util.List<io.appwrite.models.LocaleCode>);
        public getTotal(): number;
        public component1(): number;
        public getLocaleCodes(): java.util.List<io.appwrite.models.LocaleCode>;
        public toString(): string;
        public toMap(): java.util.Map<string, any>;
      }
      export module LocaleCodeList {
        export class Companion {
          public static class: java.lang.Class<io.appwrite.models.LocaleCodeList.Companion>;
          public from(it: java.util.Map<string, any>): io.appwrite.models.LocaleCodeList;
        }
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module models {
      export class Log {
        public static class: java.lang.Class<io.appwrite.models.Log>;
        public getDeviceName(): string;
        public getDeviceModel(): string;
        public constructor(event: string, userId: string, userEmail: string, userName: string, mode: string, ip: string, time: string, osCode: string, osName: string, osVersion: string, clientType: string, clientCode: string, clientName: string, clientVersion: string, clientEngine: string, clientEngineVersion: string, deviceName: string, deviceBrand: string, deviceModel: string, countryCode: string, countryName: string);
        public getUserName(): string;
        public getClientEngine(): string;
        public getClientVersion(): string;
        public component6(): string;
        public component13(): string;
        public component16(): string;
        public getTime(): string;
        public getOsCode(): string;
        public getClientName(): string;
        public component19(): string;
        public equals(other: any): boolean;
        public hashCode(): number;
        public component5(): string;
        public component12(): string;
        public getCountryCode(): string;
        public component2(): string;
        public component15(): string;
        public component9(): string;
        public getClientCode(): string;
        public getMode(): string;
        public getOsName(): string;
        public getUserEmail(): string;
        public component21(): string;
        public getIp(): string;
        public component18(): string;
        public getEvent(): string;
        public component11(): string;
        public component1(): string;
        public component4(): string;
        public getClientType(): string;
        public getUserId(): string;
        public component8(): string;
        public getOsVersion(): string;
        public getClientEngineVersion(): string;
        public toString(): string;
        public getCountryName(): string;
        public component14(): string;
        public component17(): string;
        public component20(): string;
        public component7(): string;
        public component3(): string;
        public component10(): string;
        public toMap(): java.util.Map<string, any>;
        public getDeviceBrand(): string;
        public copy(event: string, userId: string, userEmail: string, userName: string, mode: string, ip: string, time: string, osCode: string, osName: string, osVersion: string, clientType: string, clientCode: string, clientName: string, clientVersion: string, clientEngine: string, clientEngineVersion: string, deviceName: string, deviceBrand: string, deviceModel: string, countryCode: string, countryName: string): io.appwrite.models.Log;
      }
      export module Log {
        export class Companion {
          public static class: java.lang.Class<io.appwrite.models.Log.Companion>;
          public from(map: java.util.Map<string, any>): io.appwrite.models.Log;
        }
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module models {
      export class LogList {
        public static class: java.lang.Class<io.appwrite.models.LogList>;
        public copy(total: number, logs: java.util.List<io.appwrite.models.Log>): io.appwrite.models.LogList;
        public equals(other: any): boolean;
        public hashCode(): number;
        public getTotal(): number;
        public component1(): number;
        public getLogs(): java.util.List<io.appwrite.models.Log>;
        public toString(): string;
        public toMap(): java.util.Map<string, any>;
        public component2(): java.util.List<io.appwrite.models.Log>;
        public constructor(total: number, logs: java.util.List<io.appwrite.models.Log>);
      }
      export module LogList {
        export class Companion {
          public static class: java.lang.Class<io.appwrite.models.LogList.Companion>;
          public from(it: java.util.Map<string, any>): io.appwrite.models.LogList;
        }
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module models {
      export class Membership {
        public static class: java.lang.Class<io.appwrite.models.Membership>;
        public getId(): string;
        public getUserName(): string;
        public component6(): string;
        public equals(other: any): boolean;
        public getJoined(): string;
        public hashCode(): number;
        public component5(): string;
        public getTeamName(): string;
        public component2(): string;
        public component9(): string;
        public getTeamId(): string;
        public getRoles(): java.util.List<string>;
        public getUserEmail(): string;
        public constructor(id: string, createdAt: string, updatedAt: string, userId: string, userName: string, userEmail: string, teamId: string, teamName: string, invited: string, joined: string, confirm: boolean, mfa: boolean, roles: java.util.List<string>);
        public component13(): java.util.List<string>;
        public getUpdatedAt(): string;
        public component1(): string;
        public getConfirm(): boolean;
        public component4(): string;
        public getUserId(): string;
        public component8(): string;
        public toString(): string;
        public copy(id: string, createdAt: string, updatedAt: string, userId: string, userName: string, userEmail: string, teamId: string, teamName: string, invited: string, joined: string, confirm: boolean, mfa: boolean, roles: java.util.List<string>): io.appwrite.models.Membership;
        public getCreatedAt(): string;
        public component11(): boolean;
        public component7(): string;
        public component12(): boolean;
        public component3(): string;
        public component10(): string;
        public getMfa(): boolean;
        public getInvited(): string;
        public toMap(): java.util.Map<string, any>;
      }
      export module Membership {
        export class Companion {
          public static class: java.lang.Class<io.appwrite.models.Membership.Companion>;
          public from(map: java.util.Map<string, any>): io.appwrite.models.Membership;
        }
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module models {
      export class MembershipList {
        public static class: java.lang.Class<io.appwrite.models.MembershipList>;
        public getMemberships(): java.util.List<io.appwrite.models.Membership>;
        public equals(other: any): boolean;
        public copy(total: number, memberships: java.util.List<io.appwrite.models.Membership>): io.appwrite.models.MembershipList;
        public hashCode(): number;
        public constructor(total: number, memberships: java.util.List<io.appwrite.models.Membership>);
        public getTotal(): number;
        public component1(): number;
        public toString(): string;
        public toMap(): java.util.Map<string, any>;
        public component2(): java.util.List<io.appwrite.models.Membership>;
      }
      export module MembershipList {
        export class Companion {
          public static class: java.lang.Class<io.appwrite.models.MembershipList.Companion>;
          public from(it: java.util.Map<string, any>): io.appwrite.models.MembershipList;
        }
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module models {
      export class Message {
        public static class: java.lang.Class<io.appwrite.models.Message>;
        public getProviderType(): string;
        public component11(): number;
        public component6(): java.util.List<string>;
        public getId(): string;
        public getStatus(): string;
        public component10(): java.util.List<string>;
        public component13(): string;
        public setScheduledAt(value: string): void;
        public getData(): any;
        public constructor(id: string, createdAt: string, updatedAt: string, providerType: string, topics: java.util.List<string>, users: java.util.List<string>, targets: java.util.List<string>, scheduledAt: string, deliveredAt: string, deliveryErrors: java.util.List<string>, deliveredTotal: number, data: any, status: string);
        public component7(): java.util.List<string>;
        public equals(other: any): boolean;
        public hashCode(): number;
        public component2(): string;
        public component9(): string;
        public getDeliveredAt(): string;
        public component12(): any;
        public getDeliveryErrors(): java.util.List<string>;
        public getUpdatedAt(): string;
        public component1(): string;
        public component4(): string;
        public component8(): string;
        public toString(): string;
        public getTargets(): java.util.List<string>;
        public getCreatedAt(): string;
        public getTopics(): java.util.List<string>;
        public setDeliveryErrors(value: java.util.List<string>): void;
        public getDeliveredTotal(): number;
        public setDeliveredAt(value: string): void;
        public component5(): java.util.List<string>;
        public getScheduledAt(): string;
        public component3(): string;
        public getUsers(): java.util.List<string>;
        public toMap(): java.util.Map<string, any>;
        public copy(id: string, createdAt: string, updatedAt: string, providerType: string, topics: java.util.List<string>, users: java.util.List<string>, targets: java.util.List<string>, scheduledAt: string, deliveredAt: string, deliveryErrors: java.util.List<string>, deliveredTotal: number, data: any, status: string): io.appwrite.models.Message;
      }
      export module Message {
        export class Companion {
          public static class: java.lang.Class<io.appwrite.models.Message.Companion>;
          public from(map: java.util.Map<string, any>): io.appwrite.models.Message;
        }
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module models {
      export class MessageList {
        public static class: java.lang.Class<io.appwrite.models.MessageList>;
        public equals(other: any): boolean;
        public component2(): java.util.List<io.appwrite.models.Message>;
        public hashCode(): number;
        public copy(total: number, messages: java.util.List<io.appwrite.models.Message>): io.appwrite.models.MessageList;
        public getTotal(): number;
        public component1(): number;
        public constructor(total: number, messages: java.util.List<io.appwrite.models.Message>);
        public toString(): string;
        public toMap(): java.util.Map<string, any>;
        public getMessages(): java.util.List<io.appwrite.models.Message>;
      }
      export module MessageList {
        export class Companion {
          public static class: java.lang.Class<io.appwrite.models.MessageList.Companion>;
          public from(it: java.util.Map<string, any>): io.appwrite.models.MessageList;
        }
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module models {
      export class MfaChallenge {
        public static class: java.lang.Class<io.appwrite.models.MfaChallenge>;
        public getId(): string;
        public component1(): string;
        public constructor(id: string, createdAt: string, userId: string, expire: string);
        public getExpire(): string;
        public component4(): string;
        public getUserId(): string;
        public toString(): string;
        public getCreatedAt(): string;
        public equals(other: any): boolean;
        public component3(): string;
        public hashCode(): number;
        public component2(): string;
        public copy(id: string, createdAt: string, userId: string, expire: string): io.appwrite.models.MfaChallenge;
        public toMap(): java.util.Map<string, any>;
      }
      export module MfaChallenge {
        export class Companion {
          public static class: java.lang.Class<io.appwrite.models.MfaChallenge.Companion>;
          public from(map: java.util.Map<string, any>): io.appwrite.models.MfaChallenge;
        }
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module models {
      export class MfaFactors {
        public static class: java.lang.Class<io.appwrite.models.MfaFactors>;
        public constructor(totp: boolean, phone: boolean, email: boolean, recoveryCode: boolean);
        public component2(): boolean;
        public component4(): boolean;
        public getRecoveryCode(): boolean;
        public component1(): boolean;
        public copy(totp: boolean, phone: boolean, email: boolean, recoveryCode: boolean): io.appwrite.models.MfaFactors;
        public toString(): string;
        public component3(): boolean;
        public equals(other: any): boolean;
        public getEmail(): boolean;
        public hashCode(): number;
        public getTotp(): boolean;
        public toMap(): java.util.Map<string, any>;
        public getPhone(): boolean;
      }
      export module MfaFactors {
        export class Companion {
          public static class: java.lang.Class<io.appwrite.models.MfaFactors.Companion>;
          public from(map: java.util.Map<string, any>): io.appwrite.models.MfaFactors;
        }
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module models {
      export class MfaRecoveryCodes {
        public static class: java.lang.Class<io.appwrite.models.MfaRecoveryCodes>;
        public equals(other: any): boolean;
        public component1(): java.util.List<string>;
        public hashCode(): number;
        public copy(recoveryCodes: java.util.List<string>): io.appwrite.models.MfaRecoveryCodes;
        public toString(): string;
        public toMap(): java.util.Map<string, any>;
        public getRecoveryCodes(): java.util.List<string>;
        public constructor(recoveryCodes: java.util.List<string>);
      }
      export module MfaRecoveryCodes {
        export class Companion {
          public static class: java.lang.Class<io.appwrite.models.MfaRecoveryCodes.Companion>;
          public from(map: java.util.Map<string, any>): io.appwrite.models.MfaRecoveryCodes;
        }
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module models {
      export class MfaType {
        public static class: java.lang.Class<io.appwrite.models.MfaType>;
        public constructor(secret: string, uri: string);
        public getUri(): string;
        public equals(other: any): boolean;
        public getSecret(): string;
        public component1(): string;
        public hashCode(): number;
        public component2(): string;
        public copy(secret: string, uri: string): io.appwrite.models.MfaType;
        public toString(): string;
        public toMap(): java.util.Map<string, any>;
      }
      export module MfaType {
        export class Companion {
          public static class: java.lang.Class<io.appwrite.models.MfaType.Companion>;
          public from(map: java.util.Map<string, any>): io.appwrite.models.MfaType;
        }
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module models {
      export class Phone {
        public static class: java.lang.Class<io.appwrite.models.Phone>;
        public equals(other: any): boolean;
        public constructor(code: string, countryCode: string, countryName: string);
        public component1(): string;
        public component3(): string;
        public hashCode(): number;
        public copy(code: string, countryCode: string, countryName: string): io.appwrite.models.Phone;
        public getCountryCode(): string;
        public component2(): string;
        public getCode(): string;
        public toString(): string;
        public toMap(): java.util.Map<string, any>;
        public getCountryName(): string;
      }
      export module Phone {
        export class Companion {
          public static class: java.lang.Class<io.appwrite.models.Phone.Companion>;
          public from(map: java.util.Map<string, any>): io.appwrite.models.Phone;
        }
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module models {
      export class PhoneList {
        public static class: java.lang.Class<io.appwrite.models.PhoneList>;
        public equals(other: any): boolean;
        public component2(): java.util.List<io.appwrite.models.Phone>;
        public hashCode(): number;
        public getTotal(): number;
        public component1(): number;
        public getPhones(): java.util.List<io.appwrite.models.Phone>;
        public copy(total: number, phones: java.util.List<io.appwrite.models.Phone>): io.appwrite.models.PhoneList;
        public toString(): string;
        public toMap(): java.util.Map<string, any>;
        public constructor(total: number, phones: java.util.List<io.appwrite.models.Phone>);
      }
      export module PhoneList {
        export class Companion {
          public static class: java.lang.Class<io.appwrite.models.PhoneList.Companion>;
          public from(it: java.util.Map<string, any>): io.appwrite.models.PhoneList;
        }
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module models {
      export class Preferences<T> extends java.lang.Object {
        public static class: java.lang.Class<io.appwrite.models.Preferences<any>>;
        public copy(data: T): io.appwrite.models.Preferences<T>;
        public equals(other: any): boolean;
        public constructor(data: T);
        public hashCode(): number;
        public component1(): T;
        public toString(): string;
        public toMap(): java.util.Map<string, any>;
        public getData(): T;
      }
      export module Preferences {
        export class Companion {
          public static class: java.lang.Class<io.appwrite.models.Preferences.Companion>;
          public from(map: java.util.Map<any, any>, nestedType: java.lang.Class<any>): io.appwrite.models.Preferences<any>;
          public invoke(data: java.util.Map<string, any>): io.appwrite.models.Preferences<java.util.Map<string, any>>;
        }
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module models {
      export class Provider {
        public static class: java.lang.Class<io.appwrite.models.Provider>;
        public getId(): string;
        public getCredentials(): any;
        public getProvider(): string;
        public getOptions(): any;
        public component8(): any;
        public equals(other: any): boolean;
        public hashCode(): number;
        public getEnabled(): boolean;
        public component5(): string;
        public component9(): any;
        public component2(): string;
        public component6(): boolean;
        public setOptions(value: any): void;
        public getType(): string;
        public getUpdatedAt(): string;
        public component1(): string;
        public copy(id: string, createdAt: string, updatedAt: string, name: string, provider: string, enabled: boolean, type: string, credentials: any, options: any): io.appwrite.models.Provider;
        public component4(): string;
        public getName(): string;
        public constructor(id: string, createdAt: string, updatedAt: string, name: string, provider: string, enabled: boolean, type: string, credentials: any, options: any);
        public toString(): string;
        public getCreatedAt(): string;
        public component7(): string;
        public component3(): string;
        public toMap(): java.util.Map<string, any>;
      }
      export module Provider {
        export class Companion {
          public static class: java.lang.Class<io.appwrite.models.Provider.Companion>;
          public from(map: java.util.Map<string, any>): io.appwrite.models.Provider;
        }
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module models {
      export class ProviderList {
        public static class: java.lang.Class<io.appwrite.models.ProviderList>;
        public copy(total: number, providers: java.util.List<io.appwrite.models.Provider>): io.appwrite.models.ProviderList;
        public equals(other: any): boolean;
        public getProviders(): java.util.List<io.appwrite.models.Provider>;
        public hashCode(): number;
        public component2(): java.util.List<io.appwrite.models.Provider>;
        public getTotal(): number;
        public component1(): number;
        public toString(): string;
        public constructor(total: number, providers: java.util.List<io.appwrite.models.Provider>);
        public toMap(): java.util.Map<string, any>;
      }
      export module ProviderList {
        export class Companion {
          public static class: java.lang.Class<io.appwrite.models.ProviderList.Companion>;
          public from(it: java.util.Map<string, any>): io.appwrite.models.ProviderList;
        }
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module models {
      export class ResourceToken {
        public static class: java.lang.Class<io.appwrite.models.ResourceToken>;
        public getId(): string;
        public component1(): string;
        public getResourceId(): string;
        public component6(): string;
        public getExpire(): string;
        public component4(): string;
        public toString(): string;
        public constructor(id: string, createdAt: string, resourceId: string, resourceType: string, expire: string, secret: string, accessedAt: string);
        public getCreatedAt(): string;
        public equals(other: any): boolean;
        public getSecret(): string;
        public component7(): string;
        public copy(id: string, createdAt: string, resourceId: string, resourceType: string, expire: string, secret: string, accessedAt: string): io.appwrite.models.ResourceToken;
        public component3(): string;
        public hashCode(): number;
        public component5(): string;
        public getResourceType(): string;
        public component2(): string;
        public toMap(): java.util.Map<string, any>;
        public getAccessedAt(): string;
      }
      export module ResourceToken {
        export class Companion {
          public static class: java.lang.Class<io.appwrite.models.ResourceToken.Companion>;
          public from(map: java.util.Map<string, any>): io.appwrite.models.ResourceToken;
        }
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module models {
      export class ResourceTokenList {
        public static class: java.lang.Class<io.appwrite.models.ResourceTokenList>;
        public constructor(total: number, tokens: java.util.List<io.appwrite.models.ResourceToken>);
        public equals(other: any): boolean;
        public getTokens(): java.util.List<io.appwrite.models.ResourceToken>;
        public copy(total: number, tokens: java.util.List<io.appwrite.models.ResourceToken>): io.appwrite.models.ResourceTokenList;
        public hashCode(): number;
        public getTotal(): number;
        public component1(): number;
        public component2(): java.util.List<io.appwrite.models.ResourceToken>;
        public toString(): string;
        public toMap(): java.util.Map<string, any>;
      }
      export module ResourceTokenList {
        export class Companion {
          public static class: java.lang.Class<io.appwrite.models.ResourceTokenList.Companion>;
          public from(it: java.util.Map<string, any>): io.appwrite.models.ResourceTokenList;
        }
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module models {
      export class Runtime {
        public static class: java.lang.Class<io.appwrite.models.Runtime>;
        public getLogo(): string;
        public constructor(id: string, key: string, name: string, version: string, base: string, image: string, logo: string, supports: java.util.List<string>);
        public getId(): string;
        public component1(): string;
        public component8(): java.util.List<string>;
        public component6(): string;
        public component4(): string;
        public getName(): string;
        public toString(): string;
        public getKey(): string;
        public getBase(): string;
        public getImage(): string;
        public getVersion(): string;
        public copy(id: string, key: string, name: string, version: string, base: string, image: string, logo: string, supports: java.util.List<string>): io.appwrite.models.Runtime;
        public equals(other: any): boolean;
        public component7(): string;
        public component3(): string;
        public hashCode(): number;
        public component5(): string;
        public component2(): string;
        public toMap(): java.util.Map<string, any>;
        public getSupports(): java.util.List<string>;
      }
      export module Runtime {
        export class Companion {
          public static class: java.lang.Class<io.appwrite.models.Runtime.Companion>;
          public from(map: java.util.Map<string, any>): io.appwrite.models.Runtime;
        }
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module models {
      export class RuntimeList {
        public static class: java.lang.Class<io.appwrite.models.RuntimeList>;
        public equals(other: any): boolean;
        public hashCode(): number;
        public copy(total: number, runtimes: java.util.List<io.appwrite.models.Runtime>): io.appwrite.models.RuntimeList;
        public getTotal(): number;
        public getRuntimes(): java.util.List<io.appwrite.models.Runtime>;
        public component1(): number;
        public constructor(total: number, runtimes: java.util.List<io.appwrite.models.Runtime>);
        public toString(): string;
        public toMap(): java.util.Map<string, any>;
        public component2(): java.util.List<io.appwrite.models.Runtime>;
      }
      export module RuntimeList {
        export class Companion {
          public static class: java.lang.Class<io.appwrite.models.RuntimeList.Companion>;
          public from(it: java.util.Map<string, any>): io.appwrite.models.RuntimeList;
        }
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module models {
      export class Session {
        public static class: java.lang.Class<io.appwrite.models.Session>;
        public getCurrent(): boolean;
        public getId(): string;
        public getClientEngine(): string;
        public getClientVersion(): string;
        public getOsCode(): string;
        public getClientName(): string;
        public component22(): string;
        public hashCode(): number;
        public component5(): string;
        public component12(): string;
        public getCountryCode(): string;
        public component2(): string;
        public component15(): string;
        public component25(): string;
        public getMfaUpdatedAt(): string;
        public component21(): string;
        public component18(): string;
        public component11(): string;
        public component4(): string;
        public getClientType(): string;
        public getUserId(): string;
        public getOsVersion(): string;
        public toString(): string;
        public component28(): string;
        public getProviderUid(): string;
        public component17(): string;
        public component20(): string;
        public component3(): string;
        public component10(): string;
        public component26(): boolean;
        public getDeviceBrand(): string;
        public constructor(id: string, createdAt: string, updatedAt: string, userId: string, expire: string, provider: string, providerUid: string, providerAccessToken: string, providerAccessTokenExpiry: string, providerRefreshToken: string, ip: string, osCode: string, osName: string, osVersion: string, clientType: string, clientCode: string, clientName: string, clientVersion: string, clientEngine: string, clientEngineVersion: string, deviceName: string, deviceBrand: string, deviceModel: string, countryCode: string, countryName: string, current: boolean, factors: java.util.List<string>, secret: string, mfaUpdatedAt: string);
        public getDeviceName(): string;
        public getProviderRefreshToken(): string;
        public getDeviceModel(): string;
        public component6(): string;
        public component13(): string;
        public component16(): string;
        public getProvider(): string;
        public getFactors(): java.util.List<string>;
        public component19(): string;
        public copy(id: string, createdAt: string, updatedAt: string, userId: string, expire: string, provider: string, providerUid: string, providerAccessToken: string, providerAccessTokenExpiry: string, providerRefreshToken: string, ip: string, osCode: string, osName: string, osVersion: string, clientType: string, clientCode: string, clientName: string, clientVersion: string, clientEngine: string, clientEngineVersion: string, deviceName: string, deviceBrand: string, deviceModel: string, countryCode: string, countryName: string, current: boolean, factors: java.util.List<string>, secret: string, mfaUpdatedAt: string): io.appwrite.models.Session;
        public equals(other: any): boolean;
        public getSecret(): string;
        public component27(): java.util.List<string>;
        public component9(): string;
        public getClientCode(): string;
        public getOsName(): string;
        public component29(): string;
        public getProviderAccessTokenExpiry(): string;
        public getIp(): string;
        public getUpdatedAt(): string;
        public component1(): string;
        public getExpire(): string;
        public component8(): string;
        public getClientEngineVersion(): string;
        public component24(): string;
        public getCountryName(): string;
        public getCreatedAt(): string;
        public component14(): string;
        public component7(): string;
        public component23(): string;
        public getProviderAccessToken(): string;
        public toMap(): java.util.Map<string, any>;
      }
      export module Session {
        export class Companion {
          public static class: java.lang.Class<io.appwrite.models.Session.Companion>;
          public from(map: java.util.Map<string, any>): io.appwrite.models.Session;
        }
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module models {
      export class SessionList {
        public static class: java.lang.Class<io.appwrite.models.SessionList>;
        public copy(total: number, sessions: java.util.List<io.appwrite.models.Session>): io.appwrite.models.SessionList;
        public equals(other: any): boolean;
        public component2(): java.util.List<io.appwrite.models.Session>;
        public hashCode(): number;
        public constructor(total: number, sessions: java.util.List<io.appwrite.models.Session>);
        public getTotal(): number;
        public component1(): number;
        public toString(): string;
        public getSessions(): java.util.List<io.appwrite.models.Session>;
        public toMap(): java.util.Map<string, any>;
      }
      export module SessionList {
        export class Companion {
          public static class: java.lang.Class<io.appwrite.models.SessionList.Companion>;
          public from(it: java.util.Map<string, any>): io.appwrite.models.SessionList;
        }
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module models {
      export class Site {
        public static class: java.lang.Class<io.appwrite.models.Site>;
        public getId(): string;
        public getSpecification(): string;
        public component5(): boolean;
        public getLive(): boolean;
        public getDeploymentScreenshotLight(): string;
        public getProviderRootDirectory(): string;
        public component22(): string;
        public getVars(): java.util.List<io.appwrite.models.Variable>;
        public getDeploymentCreatedAt(): string;
        public hashCode(): number;
        public constructor(id: string, createdAt: string, updatedAt: string, name: string, enabled: boolean, live: boolean, logging: boolean, framework: string, deploymentId: string, deploymentCreatedAt: string, deploymentScreenshotLight: string, deploymentScreenshotDark: string, latestDeploymentId: string, latestDeploymentCreatedAt: string, latestDeploymentStatus: string, vars: java.util.List<io.appwrite.models.Variable>, timeout: number, installCommand: string, buildCommand: string, outputDirectory: string, installationId: string, providerRepositoryId: string, providerBranch: string, providerRootDirectory: string, providerSilentMode: boolean, specification: string, buildRuntime: string, adapter: string, fallbackFile: string);
        public component12(): string;
        public component2(): string;
        public component15(): string;
        public getInstallationId(): string;
        public component6(): boolean;
        public getInstallCommand(): string;
        public getLatestDeploymentCreatedAt(): string;
        public component7(): boolean;
        public component21(): string;
        public component18(): string;
        public component11(): string;
        public getLogging(): boolean;
        public component4(): string;
        public getTimeout(): number;
        public getName(): string;
        public getProviderBranch(): string;
        public toString(): string;
        public getFramework(): string;
        public getBuildRuntime(): string;
        public component28(): string;
        public component20(): string;
        public component3(): string;
        public component10(): string;
        public component25(): boolean;
        public getBuildCommand(): string;
        public component27(): string;
        public component13(): string;
        public component26(): string;
        public component17(): number;
        public component19(): string;
        public equals(other: any): boolean;
        public getDeploymentScreenshotDark(): string;
        public getFallbackFile(): string;
        public getEnabled(): boolean;
        public component16(): java.util.List<io.appwrite.models.Variable>;
        public component9(): string;
        public getProviderRepositoryId(): string;
        public component29(): string;
        public copy(id: string, createdAt: string, updatedAt: string, name: string, enabled: boolean, live: boolean, logging: boolean, framework: string, deploymentId: string, deploymentCreatedAt: string, deploymentScreenshotLight: string, deploymentScreenshotDark: string, latestDeploymentId: string, latestDeploymentCreatedAt: string, latestDeploymentStatus: string, vars: java.util.List<io.appwrite.models.Variable>, timeout: number, installCommand: string, buildCommand: string, outputDirectory: string, installationId: string, providerRepositoryId: string, providerBranch: string, providerRootDirectory: string, providerSilentMode: boolean, specification: string, buildRuntime: string, adapter: string, fallbackFile: string): io.appwrite.models.Site;
        public getUpdatedAt(): string;
        public component1(): string;
        public component8(): string;
        public getProviderSilentMode(): boolean;
        public component24(): string;
        public getDeploymentId(): string;
        public getLatestDeploymentStatus(): string;
        public getCreatedAt(): string;
        public getLatestDeploymentId(): string;
        public getOutputDirectory(): string;
        public component14(): string;
        public getAdapter(): string;
        public component23(): string;
        public toMap(): java.util.Map<string, any>;
      }
      export module Site {
        export class Companion {
          public static class: java.lang.Class<io.appwrite.models.Site.Companion>;
          public from(it: java.util.Map<string, any>): io.appwrite.models.Site;
        }
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module models {
      export class SiteList {
        public static class: java.lang.Class<io.appwrite.models.SiteList>;
        public constructor(total: number, sites: java.util.List<io.appwrite.models.Site>);
        public getSites(): java.util.List<io.appwrite.models.Site>;
        public equals(other: any): boolean;
        public hashCode(): number;
        public component2(): java.util.List<io.appwrite.models.Site>;
        public getTotal(): number;
        public component1(): number;
        public toString(): string;
        public toMap(): java.util.Map<string, any>;
        public copy(total: number, sites: java.util.List<io.appwrite.models.Site>): io.appwrite.models.SiteList;
      }
      export module SiteList {
        export class Companion {
          public static class: java.lang.Class<io.appwrite.models.SiteList.Companion>;
          public from(it: java.util.Map<string, any>): io.appwrite.models.SiteList;
        }
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module models {
      export class Specification {
        public static class: java.lang.Class<io.appwrite.models.Specification>;
        public getMemory(): number;
        public constructor(memory: number, cpus: number, enabled: boolean, slug: string);
        public component2(): number;
        public getSlug(): string;
        public component4(): string;
        public copy(memory: number, cpus: number, enabled: boolean, slug: string): io.appwrite.models.Specification;
        public component1(): number;
        public toString(): string;
        public component3(): boolean;
        public equals(other: any): boolean;
        public hashCode(): number;
        public getEnabled(): boolean;
        public toMap(): java.util.Map<string, any>;
        public getCpus(): number;
      }
      export module Specification {
        export class Companion {
          public static class: java.lang.Class<io.appwrite.models.Specification.Companion>;
          public from(map: java.util.Map<string, any>): io.appwrite.models.Specification;
        }
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module models {
      export class SpecificationList {
        public static class: java.lang.Class<io.appwrite.models.SpecificationList>;
        public equals(other: any): boolean;
        public hashCode(): number;
        public getSpecifications(): java.util.List<io.appwrite.models.Specification>;
        public copy(total: number, specifications: java.util.List<io.appwrite.models.Specification>): io.appwrite.models.SpecificationList;
        public getTotal(): number;
        public component1(): number;
        public toString(): string;
        public constructor(total: number, specifications: java.util.List<io.appwrite.models.Specification>);
        public toMap(): java.util.Map<string, any>;
        public component2(): java.util.List<io.appwrite.models.Specification>;
      }
      export module SpecificationList {
        export class Companion {
          public static class: java.lang.Class<io.appwrite.models.SpecificationList.Companion>;
          public from(it: java.util.Map<string, any>): io.appwrite.models.SpecificationList;
        }
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module models {
      export class Subscriber {
        public static class: java.lang.Class<io.appwrite.models.Subscriber>;
        public getProviderType(): string;
        public getId(): string;
        public getUserName(): string;
        public getUpdatedAt(): string;
        public component1(): string;
        public copy(id: string, createdAt: string, updatedAt: string, targetId: string, target: io.appwrite.models.Target, userId: string, userName: string, topicId: string, providerType: string): io.appwrite.models.Subscriber;
        public component6(): string;
        public component4(): string;
        public getUserId(): string;
        public component8(): string;
        public toString(): string;
        public component5(): io.appwrite.models.Target;
        public getCreatedAt(): string;
        public equals(other: any): boolean;
        public component7(): string;
        public getTopicId(): string;
        public component3(): string;
        public hashCode(): number;
        public component2(): string;
        public constructor(id: string, createdAt: string, updatedAt: string, targetId: string, target: io.appwrite.models.Target, userId: string, userName: string, topicId: string, providerType: string);
        public component9(): string;
        public getTarget(): io.appwrite.models.Target;
        public toMap(): java.util.Map<string, any>;
        public getTargetId(): string;
      }
      export module Subscriber {
        export class Companion {
          public static class: java.lang.Class<io.appwrite.models.Subscriber.Companion>;
          public from(map: java.util.Map<string, any>): io.appwrite.models.Subscriber;
        }
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module models {
      export class SubscriberList {
        public static class: java.lang.Class<io.appwrite.models.SubscriberList>;
        public equals(other: any): boolean;
        public hashCode(): number;
        public constructor(total: number, subscribers: java.util.List<io.appwrite.models.Subscriber>);
        public copy(total: number, subscribers: java.util.List<io.appwrite.models.Subscriber>): io.appwrite.models.SubscriberList;
        public getTotal(): number;
        public getSubscribers(): java.util.List<io.appwrite.models.Subscriber>;
        public component1(): number;
        public toString(): string;
        public toMap(): java.util.Map<string, any>;
        public component2(): java.util.List<io.appwrite.models.Subscriber>;
      }
      export module SubscriberList {
        export class Companion {
          public static class: java.lang.Class<io.appwrite.models.SubscriberList.Companion>;
          public from(it: java.util.Map<string, any>): io.appwrite.models.SubscriberList;
        }
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module models {
      export class Target {
        public static class: java.lang.Class<io.appwrite.models.Target>;
        public getProviderType(): string;
        public getId(): string;
        public component6(): string;
        public constructor(id: string, createdAt: string, updatedAt: string, name: string, userId: string, providerId: string, providerType: string, identifier: string, expired: boolean);
        public getExpired(): boolean;
        public equals(other: any): boolean;
        public hashCode(): number;
        public component5(): string;
        public component9(): boolean;
        public getProviderId(): string;
        public component2(): string;
        public setProviderId(value: string): void;
        public getUpdatedAt(): string;
        public component1(): string;
        public component4(): string;
        public getUserId(): string;
        public component8(): string;
        public getName(): string;
        public toString(): string;
        public getCreatedAt(): string;
        public component7(): string;
        public component3(): string;
        public copy(id: string, createdAt: string, updatedAt: string, name: string, userId: string, providerId: string, providerType: string, identifier: string, expired: boolean): io.appwrite.models.Target;
        public getIdentifier(): string;
        public toMap(): java.util.Map<string, any>;
      }
      export module Target {
        export class Companion {
          public static class: java.lang.Class<io.appwrite.models.Target.Companion>;
          public from(map: java.util.Map<string, any>): io.appwrite.models.Target;
        }
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module models {
      export class TargetList {
        public static class: java.lang.Class<io.appwrite.models.TargetList>;
        public copy(total: number, targets: java.util.List<io.appwrite.models.Target>): io.appwrite.models.TargetList;
        public equals(other: any): boolean;
        public hashCode(): number;
        public constructor(total: number, targets: java.util.List<io.appwrite.models.Target>);
        public getTotal(): number;
        public component1(): number;
        public toString(): string;
        public toMap(): java.util.Map<string, any>;
        public getTargets(): java.util.List<io.appwrite.models.Target>;
        public component2(): java.util.List<io.appwrite.models.Target>;
      }
      export module TargetList {
        export class Companion {
          public static class: java.lang.Class<io.appwrite.models.TargetList.Companion>;
          public from(it: java.util.Map<string, any>): io.appwrite.models.TargetList;
        }
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module models {
      export class Team<T> extends java.lang.Object {
        public static class: java.lang.Class<io.appwrite.models.Team<any>>;
        public getId(): string;
        public getUpdatedAt(): string;
        public component1(): string;
        public component4(): string;
        public constructor(id: string, createdAt: string, updatedAt: string, name: string, total: number, prefs: io.appwrite.models.Preferences<T>);
        public getTotal(): number;
        public getName(): string;
        public component6(): io.appwrite.models.Preferences<T>;
        public toString(): string;
        public copy(id: string, createdAt: string, updatedAt: string, name: string, total: number, prefs: io.appwrite.models.Preferences<T>): io.appwrite.models.Team<T>;
        public getCreatedAt(): string;
        public component5(): number;
        public equals(other: any): boolean;
        public getPrefs(): io.appwrite.models.Preferences<T>;
        public component3(): string;
        public hashCode(): number;
        public component2(): string;
        public toMap(): java.util.Map<string, any>;
      }
      export module Team {
        export class Companion {
          public static class: java.lang.Class<io.appwrite.models.Team.Companion>;
          public invoke(id: string, createdAt: string, updatedAt: string, name: string, total: number, prefs: io.appwrite.models.Preferences<java.util.Map<string, any>>): io.appwrite.models.Team<java.util.Map<string, any>>;
          public from(map: java.util.Map<any, any>, nestedType: java.lang.Class<any>): io.appwrite.models.Team<any>;
        }
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module models {
      export class TeamList<T> extends java.lang.Object {
        public static class: java.lang.Class<io.appwrite.models.TeamList<any>>;
        public copy(total: number, teams: java.util.List<io.appwrite.models.Team<T>>): io.appwrite.models.TeamList<T>;
        public component2(): java.util.List<io.appwrite.models.Team<T>>;
        public equals(other: any): boolean;
        public hashCode(): number;
        public getTotal(): number;
        public component1(): number;
        public toString(): string;
        public constructor(total: number, teams: java.util.List<io.appwrite.models.Team<T>>);
        public toMap(): java.util.Map<string, any>;
        public getTeams(): java.util.List<io.appwrite.models.Team<T>>;
      }
      export module TeamList {
        export class Companion {
          public static class: java.lang.Class<io.appwrite.models.TeamList.Companion>;
          public from(it: java.util.Map<any, any>, item$iv$iv: java.lang.Class<any>): io.appwrite.models.TeamList<any>;
          public invoke(total: number, teams: java.util.List<io.appwrite.models.Team<java.util.Map<string, any>>>): io.appwrite.models.TeamList<java.util.Map<string, any>>;
        }
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module models {
      export class Token {
        public static class: java.lang.Class<io.appwrite.models.Token>;
        public copy(id: string, createdAt: string, userId: string, secret: string, expire: string, phrase: string): io.appwrite.models.Token;
        public getId(): string;
        public component1(): string;
        public component6(): string;
        public getExpire(): string;
        public component4(): string;
        public getUserId(): string;
        public toString(): string;
        public getCreatedAt(): string;
        public constructor(id: string, createdAt: string, userId: string, secret: string, expire: string, phrase: string);
        public equals(other: any): boolean;
        public getSecret(): string;
        public component3(): string;
        public hashCode(): number;
        public getPhrase(): string;
        public component5(): string;
        public component2(): string;
        public toMap(): java.util.Map<string, any>;
      }
      export module Token {
        export class Companion {
          public static class: java.lang.Class<io.appwrite.models.Token.Companion>;
          public from(map: java.util.Map<string, any>): io.appwrite.models.Token;
        }
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module models {
      export class Topic {
        public static class: java.lang.Class<io.appwrite.models.Topic>;
        public getSubscribe(): java.util.List<string>;
        public getId(): string;
        public getUpdatedAt(): string;
        public component1(): string;
        public component8(): java.util.List<string>;
        public component4(): string;
        public component7(): number;
        public getName(): string;
        public constructor(id: string, createdAt: string, updatedAt: string, name: string, emailTotal: number, smsTotal: number, pushTotal: number, subscribe: java.util.List<string>);
        public toString(): string;
        public getCreatedAt(): string;
        public component5(): number;
        public equals(other: any): boolean;
        public component3(): string;
        public hashCode(): number;
        public component2(): string;
        public component6(): number;
        public copy(id: string, createdAt: string, updatedAt: string, name: string, emailTotal: number, smsTotal: number, pushTotal: number, subscribe: java.util.List<string>): io.appwrite.models.Topic;
        public getEmailTotal(): number;
        public toMap(): java.util.Map<string, any>;
        public getSmsTotal(): number;
        public getPushTotal(): number;
      }
      export module Topic {
        export class Companion {
          public static class: java.lang.Class<io.appwrite.models.Topic.Companion>;
          public from(map: java.util.Map<string, any>): io.appwrite.models.Topic;
        }
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module models {
      export class TopicList {
        public static class: java.lang.Class<io.appwrite.models.TopicList>;
        public equals(other: any): boolean;
        public getTopics(): java.util.List<io.appwrite.models.Topic>;
        public hashCode(): number;
        public constructor(total: number, topics: java.util.List<io.appwrite.models.Topic>);
        public copy(total: number, topics: java.util.List<io.appwrite.models.Topic>): io.appwrite.models.TopicList;
        public getTotal(): number;
        public component1(): number;
        public component2(): java.util.List<io.appwrite.models.Topic>;
        public toString(): string;
        public toMap(): java.util.Map<string, any>;
      }
      export module TopicList {
        export class Companion {
          public static class: java.lang.Class<io.appwrite.models.TopicList.Companion>;
          public from(it: java.util.Map<string, any>): io.appwrite.models.TopicList;
        }
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module models {
      export class UploadProgress {
        public static class: java.lang.Class<io.appwrite.models.UploadProgress>;
        public constructor(id: string, progress: number, sizeUploaded: number, chunksTotal: number, chunksUploaded: number);
        public getId(): string;
        public component4(): number;
        public component1(): string;
        public component2(): number;
        public copy(id: string, progress: number, sizeUploaded: number, chunksTotal: number, chunksUploaded: number): io.appwrite.models.UploadProgress;
        public getChunksUploaded(): number;
        public toString(): string;
        public component3(): number;
        public component5(): number;
        public equals(other: any): boolean;
        public getProgress(): number;
        public hashCode(): number;
        public getChunksTotal(): number;
        public getSizeUploaded(): number;
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module models {
      export class User<T> extends java.lang.Object {
        public static class: java.lang.Class<io.appwrite.models.User<any>>;
        public getId(): string;
        public getHash(): string;
        public setHash(value: string): void;
        public component16(): boolean;
        public getPhone(): string;
        public component6(): string;
        public component10(): java.util.List<string>;
        public component13(): string;
        public getHashOptions(): any;
        public component17(): io.appwrite.models.Preferences<T>;
        public component7(): any;
        public component19(): string;
        public equals(other: any): boolean;
        public hashCode(): number;
        public component5(): string;
        public component9(): boolean;
        public component12(): string;
        public component2(): string;
        public getPasswordUpdate(): string;
        public copy(id: string, createdAt: string, updatedAt: string, name: string, password: string, hash: string, hashOptions: any, registration: string, status: boolean, labels: java.util.List<string>, passwordUpdate: string, email: string, phone: string, emailVerification: boolean, phoneVerification: boolean, mfa: boolean, prefs: io.appwrite.models.Preferences<T>, targets: java.util.List<io.appwrite.models.Target>, accessedAt: string): io.appwrite.models.User<T>;
        public getRegistration(): string;
        public getAccessedAt(): string;
        public getStatus(): boolean;
        public component18(): java.util.List<io.appwrite.models.Target>;
        public setHashOptions(value: any): void;
        public getEmail(): string;
        public component11(): string;
        public getUpdatedAt(): string;
        public component1(): string;
        public component4(): string;
        public constructor(id: string, createdAt: string, updatedAt: string, name: string, password: string, hash: string, hashOptions: any, registration: string, status: boolean, labels: java.util.List<string>, passwordUpdate: string, email: string, phone: string, emailVerification: boolean, phoneVerification: boolean, mfa: boolean, prefs: io.appwrite.models.Preferences<T>, targets: java.util.List<io.appwrite.models.Target>, accessedAt: string);
        public component8(): string;
        public getName(): string;
        public setPassword(value: string): void;
        public toString(): string;
        public getCreatedAt(): string;
        public getLabels(): java.util.List<string>;
        public getEmailVerification(): boolean;
        public getPrefs(): io.appwrite.models.Preferences<T>;
        public component3(): string;
        public getPhoneVerification(): boolean;
        public getMfa(): boolean;
        public component14(): boolean;
        public getPassword(): string;
        public component15(): boolean;
        public toMap(): java.util.Map<string, any>;
        public getTargets(): java.util.List<io.appwrite.models.Target>;
      }
      export module User {
        export class Companion {
          public static class: java.lang.Class<io.appwrite.models.User.Companion>;
          public from(it: java.util.Map<any, any>, item$iv$iv: java.lang.Class<any>): io.appwrite.models.User<any>;
          public invoke(id: string, createdAt: string, updatedAt: string, name: string, password: string, hash: string, hashOptions: any, registration: string, status: boolean, labels: java.util.List<string>, passwordUpdate: string, email: string, phone: string, emailVerification: boolean, phoneVerification: boolean, mfa: boolean, prefs: io.appwrite.models.Preferences<java.util.Map<string, any>>, targets: java.util.List<io.appwrite.models.Target>, accessedAt: string): io.appwrite.models.User<java.util.Map<string, any>>;
        }
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module models {
      export class UserList<T> extends java.lang.Object {
        public static class: java.lang.Class<io.appwrite.models.UserList<any>>;
        public constructor(total: number, users: java.util.List<io.appwrite.models.User<T>>);
        public equals(other: any): boolean;
        public copy(total: number, users: java.util.List<io.appwrite.models.User<T>>): io.appwrite.models.UserList<T>;
        public hashCode(): number;
        public getTotal(): number;
        public component1(): number;
        public component2(): java.util.List<io.appwrite.models.User<T>>;
        public getUsers(): java.util.List<io.appwrite.models.User<T>>;
        public toString(): string;
        public toMap(): java.util.Map<string, any>;
      }
      export module UserList {
        export class Companion {
          public static class: java.lang.Class<io.appwrite.models.UserList.Companion>;
          public invoke(total: number, users: java.util.List<io.appwrite.models.User<java.util.Map<string, any>>>): io.appwrite.models.UserList<java.util.Map<string, any>>;
          public from(it: java.util.Map<any, any>, item$iv$iv: java.lang.Class<any>): io.appwrite.models.UserList<any>;
        }
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module models {
      export class Variable {
        public static class: java.lang.Class<io.appwrite.models.Variable>;
        public getId(): string;
        public getSecret(): boolean;
        public copy(id: string, createdAt: string, updatedAt: string, key: string, value: string, secret: boolean, resourceType: string, resourceId: string): io.appwrite.models.Variable;
        public getUpdatedAt(): string;
        public component1(): string;
        public getResourceId(): string;
        public component4(): string;
        public getValue(): string;
        public component8(): string;
        public toString(): string;
        public getKey(): string;
        public getCreatedAt(): string;
        public equals(other: any): boolean;
        public component7(): string;
        public constructor(id: string, createdAt: string, updatedAt: string, key: string, value: string, secret: boolean, resourceType: string, resourceId: string);
        public component3(): string;
        public hashCode(): number;
        public component5(): string;
        public getResourceType(): string;
        public component2(): string;
        public component6(): boolean;
        public toMap(): java.util.Map<string, any>;
      }
      export module Variable {
        export class Companion {
          public static class: java.lang.Class<io.appwrite.models.Variable.Companion>;
          public from(map: java.util.Map<string, any>): io.appwrite.models.Variable;
        }
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module models {
      export class VariableList {
        public static class: java.lang.Class<io.appwrite.models.VariableList>;
        public component2(): java.util.List<io.appwrite.models.Variable>;
        public equals(other: any): boolean;
        public hashCode(): number;
        public getVariables(): java.util.List<io.appwrite.models.Variable>;
        public getTotal(): number;
        public component1(): number;
        public constructor(total: number, variables: java.util.List<io.appwrite.models.Variable>);
        public copy(total: number, variables: java.util.List<io.appwrite.models.Variable>): io.appwrite.models.VariableList;
        public toString(): string;
        public toMap(): java.util.Map<string, any>;
      }
      export module VariableList {
        export class Companion {
          public static class: java.lang.Class<io.appwrite.models.VariableList.Companion>;
          public from(it: java.util.Map<string, any>): io.appwrite.models.VariableList;
        }
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module services {
      export class Account extends io.appwrite.services.Service {
        public static class: java.lang.Class<io.appwrite.services.Account>;
        public updatePrefs(apiPath: any, apiParams: java.lang.Class<any>, apiHeaders: any): any;
        public updatePrefs(this_: any, prefs: any): any;
        public updateSession(apiParams: string, apiHeaders: any): any;
        public createRecovery(apiParams: string, apiHeaders: string, converter: any): any;
        public createPhoneToken(apiParams: string, apiHeaders: string, converter: any): any;
        public updateMfaChallenge(apiParams: string, apiHeaders: string, converter: any): any;
        public updateMfaRecoveryCodes(apiParams: any): any;
        public get(this_: any): any;
        public getSession(apiParams: string, apiHeaders: any): any;
        public updateMfaAuthenticator(this_: io.appwrite.enums.AuthenticatorType, type: string, otp: any): any;
        public updatePassword(password: string, $completion: any): any;
        public updateEmail(apiPath: string, apiParams: string, apiHeaders: java.lang.Class<any>, converter: any): any;
        public updateRecovery(apiParams: string, apiHeaders: string, converter: string, this_: any): any;
        public constructor(client: io.appwrite.Client);
        public createOAuth2Token(provider: io.appwrite.enums.OAuthProvider, success: string, failure: string, $completion: any): any;
        public get(apiPath: java.lang.Class<any>, apiParams: any): any;
        public getMfaRecoveryCodes(apiParams: any): any;
        public updateMFA(apiPath: boolean, apiParams: java.lang.Class<any>, apiHeaders: any): any;
        public createOAuth2Token(provider: io.appwrite.enums.OAuthProvider, success: string, $completion: any): any;
        public createMagicURLToken(apiParams: string, apiHeaders: string, converter: string, this_: java.lang.Boolean, userId: any): any;
        public updatePassword(apiPath: string, apiParams: string, apiHeaders: java.lang.Class<any>, converter: any): any;
        public deleteSession(apiParams: string, apiHeaders: any): any;
        public createPhoneVerification(apiParams: any): any;
        public createOAuth2Token(apiParams: io.appwrite.enums.OAuthProvider, apiHeaders: string, this_: string, provider: java.util.List<string>, success: any): any;
        public getPrefs(apiPath: java.lang.Class<any>, apiParams: any): any;
        public createOAuth2Token(provider: io.appwrite.enums.OAuthProvider, $completion: any): any;
        public updateName(this_: string, name: any): any;
        public listMfaFactors(apiParams: any): any;
        public create(userId: string, email: string, password: string, $completion: any): any;
        public createMfaChallenge(apiParams: io.appwrite.enums.AuthenticationFactor, apiHeaders: any): any;
        public createAnonymousSession(apiParams: any): any;
        public createVerification(apiParams: string, apiHeaders: any): any;
        public updatePhone(this_: string, phone: string, password: any): any;
        public updateStatus(apiPath: java.lang.Class<any>, apiParams: any): any;
        public updatePhoneSession(apiParams: string, apiHeaders: string, converter: any): any;
        public createSession(apiParams: string, apiHeaders: string, converter: any): any;
        public createMagicURLToken(userId: string, email: string, url: string, $completion: any): any;
        public createEmailPasswordSession(apiParams: string, apiHeaders: string, converter: any): any;
        public updateName(apiPath: string, apiParams: java.lang.Class<any>, apiHeaders: any): any;
        public createMfaAuthenticator(apiParams: io.appwrite.enums.AuthenticatorType, apiHeaders: any): any;
        public updateVerification(apiParams: string, apiHeaders: string, converter: any): any;
        public updateEmail(this_: string, email: string, password: any): any;
        public createJWT(apiParams: any): any;
        public getPrefs(this_: any): any;
        public deleteIdentity(apiParams: string, apiHeaders: any): any;
        public deleteSessions(apiParams: any): any;
        public updateMFA(this_: boolean, mfa: any): any;
        public listIdentities(apiParams: java.util.List<string>, apiHeaders: any): any;
        public updatePassword(password: string, nestedType: java.lang.Class<any>, $completion: any): any;
        public deleteMfaAuthenticator(apiParams: io.appwrite.enums.AuthenticatorType, apiHeaders: any): any;
        public updateStatus(this_: any): any;
        public updateMfaAuthenticator(apiPath: io.appwrite.enums.AuthenticatorType, apiParams: string, apiHeaders: java.lang.Class<any>, converter: any): any;
        public create(this_: string, userId: string, email: string, password: string, name: any): any;
        public updateMagicURLSession(apiParams: string, apiHeaders: string, converter: any): any;
        public createEmailToken(apiParams: string, apiHeaders: string, converter: java.lang.Boolean, this_: any): any;
        public create(apiPath: string, apiParams: string, apiHeaders: string, converter: string, this_: java.lang.Class<any>, userId: any): any;
        public updatePhoneVerification(apiParams: string, apiHeaders: string, converter: any): any;
        public createEmailToken(userId: string, email: string, $completion: any): any;
        public updatePassword(this_: string, password: string, oldPassword: any): any;
        public updatePhone(apiPath: string, apiParams: string, apiHeaders: java.lang.Class<any>, converter: any): any;
        public listLogs(apiParams: java.util.List<string>, apiHeaders: any): any;
        public createMfaRecoveryCodes(apiParams: any): any;
        public listSessions(apiParams: any): any;
        public listLogs($completion: any): any;
        public listIdentities($completion: any): any;
        public create(userId: string, email: string, password: string, nestedType: java.lang.Class<any>, $completion: any): any;
        public createMagicURLToken(userId: string, email: string, $completion: any): any;
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module services {
      export class Avatars extends io.appwrite.services.Service {
        public static class: java.lang.Class<io.appwrite.services.Avatars>;
        public getInitials(name: string, width: java.lang.Long, $completion: any): any;
        public getQR(text: string, size: java.lang.Long, $completion: any): any;
        public getBrowser(apiParams: io.appwrite.enums.Browser, apiHeaders: java.lang.Long, this_: java.lang.Long, code: java.lang.Long, width: any): any;
        public getCreditCard(code: io.appwrite.enums.CreditCard, $completion: any): any;
        public getCreditCard(apiParams: io.appwrite.enums.CreditCard, apiHeaders: java.lang.Long, this_: java.lang.Long, code: java.lang.Long, width: any): any;
        public getInitials(name: string, width: java.lang.Long, height: java.lang.Long, $completion: any): any;
        public getBrowser(code: io.appwrite.enums.Browser, $completion: any): any;
        public getImage(url: string, $completion: any): any;
        public getInitials(name: string, $completion: any): any;
        public getImage(apiParams: string, apiHeaders: java.lang.Long, this_: java.lang.Long, url: any): any;
        public getInitials(apiParams: string, apiHeaders: java.lang.Long, this_: java.lang.Long, name: string, width: any): any;
        public getBrowser(code: io.appwrite.enums.Browser, width: java.lang.Long, height: java.lang.Long, $completion: any): any;
        public getInitials($completion: any): any;
        public getFlag(code: io.appwrite.enums.Flag, width: java.lang.Long, height: java.lang.Long, $completion: any): any;
        public constructor(client: io.appwrite.Client);
        public getCreditCard(code: io.appwrite.enums.CreditCard, width: java.lang.Long, height: java.lang.Long, $completion: any): any;
        public getQR(text: string, size: java.lang.Long, margin: java.lang.Long, $completion: any): any;
        public getQR(apiParams: string, apiHeaders: java.lang.Long, this_: java.lang.Long, text: java.lang.Boolean, size: any): any;
        public getQR(text: string, $completion: any): any;
        public getFlag(apiParams: io.appwrite.enums.Flag, apiHeaders: java.lang.Long, this_: java.lang.Long, code: java.lang.Long, width: any): any;
        public getImage(url: string, width: java.lang.Long, $completion: any): any;
        public getFavicon(apiParams: string, apiHeaders: any): any;
        public getBrowser(code: io.appwrite.enums.Browser, width: java.lang.Long, $completion: any): any;
        public getCreditCard(code: io.appwrite.enums.CreditCard, width: java.lang.Long, $completion: any): any;
        public getFlag(code: io.appwrite.enums.Flag, $completion: any): any;
        public getFlag(code: io.appwrite.enums.Flag, width: java.lang.Long, $completion: any): any;
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module services {
      export class Databases extends io.appwrite.services.Service {
        public static class: java.lang.Class<io.appwrite.services.Databases>;
        public createUrlAttribute(databaseId: string, collectionId: string, key: string, required: boolean, $completion: any): any;
        public deleteDocuments(databaseId: string, collectionId: string, $completion: any): any;
        public updateRelationshipAttribute(databaseId: string, collectionId: string, key: string, onDelete: io.appwrite.enums.RelationMutate, $completion: any): any;
        public createDocuments(this_: string, databaseId: string, collectionId: java.util.List<any>, documents: any): any;
        public createUrlAttribute(apiParams: string, apiHeaders: string, converter: string, this_: boolean, databaseId: string, collectionId: java.lang.Boolean, key: any): any;
        public createIntegerAttribute(databaseId: string, collectionId: string, key: string, required: boolean, min: java.lang.Long, max: java.lang.Long, $completion: any): any;
        public updateDocument(databaseId: string, collectionId: string, documentId: string, $completion: any): any;
        public create(apiParams: string, apiHeaders: string, converter: java.lang.Boolean, this_: any): any;
        public createRelationshipAttribute(databaseId: string, collectionId: string, relatedCollectionId: string, type: io.appwrite.enums.RelationshipType, twoWay: java.lang.Boolean, $completion: any): any;
        public update(databaseId: string, name: string, $completion: any): any;
        public updateEmailAttribute(databaseId: string, collectionId: string, key: string, required: boolean, default_: string, $completion: any): any;
        public createFloatAttribute(databaseId: string, collectionId: string, key: string, required: boolean, min: java.lang.Double, $completion: any): any;
        public deleteDocuments(this_: string, databaseId: string, collectionId: java.util.List<string>, queries: any): any;
        public updateDocuments(this_: string, databaseId: string, collectionId: any, data: java.util.List<string>, queries: any): any;
        public listIndexes(databaseId: string, collectionId: string, $completion: any): any;
        public createFloatAttribute(databaseId: string, collectionId: string, key: string, required: boolean, $completion: any): any;
        public getDocument(apiPath: string, apiParams: string, apiHeaders: string, converter: java.util.List<any>, this_: java.lang.Class<any>, databaseId: any): any;
        public updateIntegerAttribute(databaseId: string, collectionId: string, key: string, required: boolean, $completion: any): any;
        public updateFloatAttribute(databaseId: string, collectionId: string, key: string, required: boolean, $completion: any): any;
        public createIntegerAttribute(databaseId: string, collectionId: string, key: string, required: boolean, $completion: any): any;
        public listCollections(databaseId: string, $completion: any): any;
        public updateCollection(databaseId: string, collectionId: string, name: string, $completion: any): any;
        public updateCollection(databaseId: string, collectionId: string, name: string, permissions: java.util.List<string>, $completion: any): any;
        public constructor(client: io.appwrite.Client);
        public createDocument(apiPath: string, apiParams: string, apiHeaders: string, converter: any, this_: java.util.List<any>, databaseId: java.lang.Class<any>, collectionId: any): any;
        public updateDocument(databaseId: string, collectionId: string, documentId: string, data: any, nestedType: java.lang.Class<any>, $completion: any): any;
        public updateStringAttribute(databaseId: string, collectionId: string, key: string, required: boolean, $completion: any): any;
        public createDocument(databaseId: string, collectionId: string, documentId: string, data: any, nestedType: java.lang.Class<any>, $completion: any): any;
        public listDocuments(databaseId: string, collectionId: string, nestedType: java.lang.Class<any>, $completion: any): any;
        public createFloatAttribute(apiParams: string, apiHeaders: string, converter: string, this_: boolean, databaseId: java.lang.Double, collectionId: java.lang.Double, key: java.lang.Double, required: java.lang.Boolean, min: any): any;
        public createEmailAttribute(databaseId: string, collectionId: string, key: string, required: boolean, default_: string, $completion: any): any;
        public updateIpAttribute(databaseId: string, collectionId: string, key: string, required: boolean, default_: string, $completion: any): any;
        public updateDocuments(databaseId: string, collectionId: string, data: any, $completion: any): any;
        public get(apiParams: string, apiHeaders: any): any;
        public updateBooleanAttribute(apiParams: string, apiHeaders: string, converter: string, this_: boolean, databaseId: java.lang.Boolean, collectionId: string, key: any): any;
        public createStringAttribute(databaseId: string, collectionId: string, key: string, size: number, required: boolean, default_: string, array: java.lang.Boolean, $completion: any): any;
        public getCollection(apiParams: string, apiHeaders: string, converter: any): any;
        public upsertDocuments(this_: string, databaseId: string, collectionId: java.util.List<any>, documents: any): any;
        public listAttributes(apiParams: string, apiHeaders: string, converter: java.util.List<string>, this_: any): any;
        public update(apiParams: string, apiHeaders: string, converter: java.lang.Boolean, this_: any): any;
        public updateEmailAttribute(apiParams: string, apiHeaders: string, converter: string, this_: boolean, databaseId: string, collectionId: string, key: any): any;
        public updateFloatAttribute(databaseId: string, collectionId: string, key: string, required: boolean, default_: java.lang.Double, $completion: any): any;
        public getDocument(databaseId: string, collectionId: string, documentId: string, $completion: any): any;
        public updateIntegerAttribute(apiParams: string, apiHeaders: string, converter: string, this_: boolean, databaseId: java.lang.Long, collectionId: java.lang.Long, key: java.lang.Long, required: string, default_: any): any;
        public updateBooleanAttribute(databaseId: string, collectionId: string, key: string, required: boolean, default_: java.lang.Boolean, $completion: any): any;
        public upsertDocuments(apiPath: string, apiParams: string, apiHeaders: java.util.List<any>, converter: java.lang.Class<any>, this_: any): any;
        public updateUrlAttribute(databaseId: string, collectionId: string, key: string, required: boolean, default_: string, $completion: any): any;
        public create(databaseId: string, name: string, $completion: any): any;
        public upsertDocuments(databaseId: string, collectionId: string, $completion: any): any;
        public listIndexes(apiParams: string, apiHeaders: string, converter: java.util.List<string>, this_: any): any;
        public updateRelationshipAttribute(apiParams: string, apiHeaders: string, converter: string, this_: io.appwrite.enums.RelationMutate, databaseId: string, collectionId: any): any;
        public updateEmailAttribute(databaseId: string, collectionId: string, key: string, required: boolean, $completion: any): any;
        public updateUrlAttribute(databaseId: string, collectionId: string, key: string, required: boolean, $completion: any): any;
        public createIndex(databaseId: string, collectionId: string, key: string, type: io.appwrite.enums.IndexType, attributes: java.util.List<string>, orders: java.util.List<string>, $completion: any): any;
        public createStringAttribute(apiParams: string, apiHeaders: string, converter: string, this_: number, databaseId: boolean, collectionId: string, key: java.lang.Boolean, size: java.lang.Boolean, required: any): any;
        public updateCollection(databaseId: string, collectionId: string, name: string, permissions: java.util.List<string>, documentSecurity: java.lang.Boolean, $completion: any): any;
        public createIpAttribute(apiParams: string, apiHeaders: string, converter: string, this_: boolean, databaseId: string, collectionId: java.lang.Boolean, key: any): any;
        public createDatetimeAttribute(databaseId: string, collectionId: string, key: string, required: boolean, default_: string, $completion: any): any;
        public deleteDocuments(apiPath: string, apiParams: string, apiHeaders: java.util.List<any>, converter: java.lang.Class<any>, this_: any): any;
        public updateDatetimeAttribute(databaseId: string, collectionId: string, key: string, required: boolean, $completion: any): any;
        public updateRelationshipAttribute(databaseId: string, collectionId: string, key: string, $completion: any): any;
        public createDocument(this_: string, databaseId: string, collectionId: string, documentId: any, data: java.util.List<string>, permissions: any): any;
        public getDocument(databaseId: string, collectionId: string, documentId: string, nestedType: java.lang.Class<any>, $completion: any): any;
        public updateIpAttribute(apiParams: string, apiHeaders: string, converter: string, this_: boolean, databaseId: string, collectionId: string, key: any): any;
        public createIntegerAttribute(apiParams: string, apiHeaders: string, converter: string, this_: boolean, databaseId: java.lang.Long, collectionId: java.lang.Long, key: java.lang.Long, required: java.lang.Boolean, min: any): any;
        public updateDatetimeAttribute(databaseId: string, collectionId: string, key: string, required: boolean, default_: string, $completion: any): any;
        public deleteDocument(apiParams: string, apiHeaders: string, this_: string, databaseId: any): any;
        public updateDocument(databaseId: string, collectionId: string, documentId: string, nestedType: java.lang.Class<any>, $completion: any): any;
        public createBooleanAttribute(databaseId: string, collectionId: string, key: string, required: boolean, $completion: any): any;
        public createRelationshipAttribute(apiParams: string, apiHeaders: string, converter: string, this_: io.appwrite.enums.RelationshipType, databaseId: java.lang.Boolean, collectionId: string, relatedCollectionId: string, type: io.appwrite.enums.RelationMutate, twoWay: any): any;
        public listDocuments(databaseId: string, collectionId: string, $completion: any): any;
        public upsertDocuments(databaseId: string, collectionId: string, nestedType: java.lang.Class<any>, $completion: any): any;
        public createDocument(databaseId: string, collectionId: string, documentId: string, data: any, $completion: any): any;
        public updateBooleanAttribute(databaseId: string, collectionId: string, key: string, required: boolean, $completion: any): any;
        public updateDocuments(databaseId: string, collectionId: string, $completion: any): any;
        public listCollections(apiParams: string, apiHeaders: java.util.List<string>, converter: string, this_: any): any;
        public createEnumAttribute(databaseId: string, collectionId: string, key: string, elements: java.util.List<string>, required: boolean, $completion: any): any;
        public createIpAttribute(databaseId: string, collectionId: string, key: string, required: boolean, default_: string, $completion: any): any;
        public updateFloatAttribute(apiParams: string, apiHeaders: string, converter: string, this_: boolean, databaseId: java.lang.Double, collectionId: java.lang.Double, key: java.lang.Double, required: string, default_: any): any;
        public delete(apiParams: string, apiHeaders: any): any;
        public createIndex(apiParams: string, apiHeaders: string, converter: string, this_: io.appwrite.enums.IndexType, databaseId: java.util.List<string>, collectionId: java.util.List<string>, key: java.util.List<java.lang.Long>, type: any): any;
        public createCollection(databaseId: string, collectionId: string, name: string, permissions: java.util.List<string>, $completion: any): any;
        public createUrlAttribute(databaseId: string, collectionId: string, key: string, required: boolean, default_: string, $completion: any): any;
        public createCollection(databaseId: string, collectionId: string, name: string, $completion: any): any;
        public createEnumAttribute(apiParams: string, apiHeaders: string, converter: string, this_: java.util.List<string>, databaseId: boolean, collectionId: string, key: java.lang.Boolean, elements: any): any;
        public createEnumAttribute(databaseId: string, collectionId: string, key: string, elements: java.util.List<string>, required: boolean, default_: string, $completion: any): any;
        public updateDocuments(databaseId: string, collectionId: string, nestedType: java.lang.Class<any>, $completion: any): any;
        public createCollection(databaseId: string, collectionId: string, name: string, permissions: java.util.List<string>, documentSecurity: java.lang.Boolean, $completion: any): any;
        public createFloatAttribute(databaseId: string, collectionId: string, key: string, required: boolean, min: java.lang.Double, max: java.lang.Double, $completion: any): any;
        public createIndex(databaseId: string, collectionId: string, key: string, type: io.appwrite.enums.IndexType, attributes: java.util.List<string>, $completion: any): any;
        public updateUrlAttribute(apiParams: string, apiHeaders: string, converter: string, this_: boolean, databaseId: string, collectionId: string, key: any): any;
        public updateEnumAttribute(databaseId: string, collectionId: string, key: string, elements: java.util.List<string>, required: boolean, default_: string, $completion: any): any;
        public list($completion: any): any;
        public listDocuments(this_: string, databaseId: string, collectionId: java.util.List<string>, queries: any): any;
        public createDatetimeAttribute(databaseId: string, collectionId: string, key: string, required: boolean, $completion: any): any;
        public listCollections(databaseId: string, queries: java.util.List<string>, $completion: any): any;
        public updateStringAttribute(databaseId: string, collectionId: string, key: string, required: boolean, default_: string, size: java.lang.Long, $completion: any): any;
        public createIpAttribute(databaseId: string, collectionId: string, key: string, required: boolean, $completion: any): any;
        public updateDocument(apiPath: string, apiParams: string, apiHeaders: string, converter: any, this_: java.util.List<any>, databaseId: java.lang.Class<any>, collectionId: any): any;
        public deleteAttribute(apiParams: string, apiHeaders: string, this_: string, databaseId: any): any;
        public createEmailAttribute(databaseId: string, collectionId: string, key: string, required: boolean, $completion: any): any;
        public createIntegerAttribute(databaseId: string, collectionId: string, key: string, required: boolean, min: java.lang.Long, max: java.lang.Long, default_: java.lang.Long, $completion: any): any;
        public updateDatetimeAttribute(apiParams: string, apiHeaders: string, converter: string, this_: boolean, databaseId: string, collectionId: string, key: any): any;
        public updateStringAttribute(apiParams: string, apiHeaders: string, converter: string, this_: boolean, databaseId: string, collectionId: java.lang.Long, key: string, required: any): any;
        public updateDocuments(databaseId: string, collectionId: string, data: any, nestedType: java.lang.Class<any>, $completion: any): any;
        public createCollection(apiParams: string, apiHeaders: string, converter: string, this_: java.util.List<string>, databaseId: java.lang.Boolean, collectionId: java.lang.Boolean, name: any): any;
        public createDocuments(apiPath: string, apiParams: string, apiHeaders: java.util.List<any>, converter: java.lang.Class<any>, this_: any): any;
        public createFloatAttribute(databaseId: string, collectionId: string, key: string, required: boolean, min: java.lang.Double, max: java.lang.Double, default_: java.lang.Double, $completion: any): any;
        public updateIntegerAttribute(databaseId: string, collectionId: string, key: string, required: boolean, default_: java.lang.Long, $completion: any): any;
        public listAttributes(databaseId: string, collectionId: string, $completion: any): any;
        public updateStringAttribute(databaseId: string, collectionId: string, key: string, required: boolean, default_: string, $completion: any): any;
        public createDatetimeAttribute(apiParams: string, apiHeaders: string, converter: string, this_: boolean, databaseId: string, collectionId: java.lang.Boolean, key: any): any;
        public updateFloatAttribute(databaseId: string, collectionId: string, key: string, required: boolean, default_: java.lang.Double, min: java.lang.Double, $completion: any): any;
        public createStringAttribute(databaseId: string, collectionId: string, key: string, size: number, required: boolean, $completion: any): any;
        public deleteCollection(apiParams: string, apiHeaders: string, this_: any): any;
        public createBooleanAttribute(apiParams: string, apiHeaders: string, converter: string, this_: boolean, databaseId: java.lang.Boolean, collectionId: java.lang.Boolean, key: any): any;
        public list(apiParams: java.util.List<string>, apiHeaders: string, converter: any): any;
        public updateDocuments(apiPath: string, apiParams: string, apiHeaders: any, converter: java.util.List<any>, this_: java.lang.Class<any>, databaseId: any): any;
        public deleteIndex(apiParams: string, apiHeaders: string, this_: string, databaseId: any): any;
        public updateIntegerAttribute(databaseId: string, collectionId: string, key: string, required: boolean, default_: java.lang.Long, min: java.lang.Long, max: java.lang.Long, $completion: any): any;
        public updateDocument(this_: string, databaseId: string, collectionId: string, documentId: any, data: java.util.List<string>, permissions: any): any;
        public createRelationshipAttribute(databaseId: string, collectionId: string, relatedCollectionId: string, type: io.appwrite.enums.RelationshipType, twoWay: java.lang.Boolean, key: string, $completion: any): any;
        public createBooleanAttribute(databaseId: string, collectionId: string, key: string, required: boolean, default_: java.lang.Boolean, $completion: any): any;
        public createStringAttribute(databaseId: string, collectionId: string, key: string, size: number, required: boolean, default_: string, $completion: any): any;
        public createRelationshipAttribute(databaseId: string, collectionId: string, relatedCollectionId: string, type: io.appwrite.enums.RelationshipType, $completion: any): any;
        public getIndex(apiParams: string, apiHeaders: string, converter: string, this_: any): any;
        public updateIpAttribute(databaseId: string, collectionId: string, key: string, required: boolean, $completion: any): any;
        public deleteDocuments(databaseId: string, collectionId: string, nestedType: java.lang.Class<any>, $completion: any): any;
        public createIntegerAttribute(databaseId: string, collectionId: string, key: string, required: boolean, min: java.lang.Long, $completion: any): any;
        public createEmailAttribute(apiParams: string, apiHeaders: string, converter: string, this_: boolean, databaseId: string, collectionId: java.lang.Boolean, key: any): any;
        public list(queries: java.util.List<string>, $completion: any): any;
        public listDocuments(apiPath: string, apiParams: string, apiHeaders: java.util.List<any>, converter: java.lang.Class<any>, this_: any): any;
        public updateIntegerAttribute(databaseId: string, collectionId: string, key: string, required: boolean, default_: java.lang.Long, min: java.lang.Long, $completion: any): any;
        public updateCollection(apiParams: string, apiHeaders: string, converter: string, this_: java.util.List<string>, databaseId: java.lang.Boolean, collectionId: java.lang.Boolean, name: any): any;
        public updateFloatAttribute(databaseId: string, collectionId: string, key: string, required: boolean, default_: java.lang.Double, min: java.lang.Double, max: java.lang.Double, $completion: any): any;
        public getDocument(this_: string, databaseId: string, collectionId: string, documentId: java.util.List<string>, queries: any): any;
        public updateEnumAttribute(apiParams: string, apiHeaders: string, converter: string, this_: java.util.List<string>, databaseId: boolean, collectionId: string, key: string, elements: any): any;
        public updateDocument(databaseId: string, collectionId: string, documentId: string, data: any, $completion: any): any;
        public updateEnumAttribute(databaseId: string, collectionId: string, key: string, elements: java.util.List<string>, required: boolean, $completion: any): any;
        public getAttribute(apiParams: string, apiHeaders: string, this_: string, databaseId: any): any;
        public createRelationshipAttribute(databaseId: string, collectionId: string, relatedCollectionId: string, type: io.appwrite.enums.RelationshipType, twoWay: java.lang.Boolean, key: string, twoWayKey: string, $completion: any): any;
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module services {
      export class Functions extends io.appwrite.services.Service {
        public static class: java.lang.Class<io.appwrite.services.Functions>;
        public updateFunctionDeployment(apiParams: string, apiHeaders: string, converter: any): any;
        public create(functionId: string, name: string, runtime: io.appwrite.enums.Runtime, execute: java.util.List<string>, events: java.util.List<string>, schedule: string, timeout: java.lang.Long, enabled: java.lang.Boolean, logging: java.lang.Boolean, entrypoint: string, commands: string, scopes: java.util.List<string>, installationId: string, providerRepositoryId: string, providerBranch: string, $completion: any): any;
        public create(functionId: string, name: string, runtime: io.appwrite.enums.Runtime, execute: java.util.List<string>, events: java.util.List<string>, schedule: string, timeout: java.lang.Long, enabled: java.lang.Boolean, logging: java.lang.Boolean, entrypoint: string, commands: string, scopes: java.util.List<string>, $completion: any): any;
        public createDeployment(functionId: string, code: io.appwrite.models.InputFile, activate: boolean, entrypoint: string, $completion: any): any;
        public delete(apiParams: string, apiHeaders: any): any;
        public listRuntimes(apiParams: any): any;
        public create(functionId: string, name: string, runtime: io.appwrite.enums.Runtime, execute: java.util.List<string>, $completion: any): any;
        public createExecution(functionId: string, $completion: any): any;
        public createVcsDeployment(apiParams: string, apiHeaders: io.appwrite.enums.VCSDeploymentType, converter: string, this_: java.lang.Boolean, functionId: any): any;
        public createExecution(functionId: string, body: string, $completion: any): any;
        public create(functionId: string, name: string, runtime: io.appwrite.enums.Runtime, execute: java.util.List<string>, events: java.util.List<string>, schedule: string, timeout: java.lang.Long, enabled: java.lang.Boolean, logging: java.lang.Boolean, $completion: any): any;
        public update(functionId: string, name: string, runtime: io.appwrite.enums.Runtime, execute: java.util.List<string>, events: java.util.List<string>, schedule: string, $completion: any): any;
        public createExecution(functionId: string, body: string, async: java.lang.Boolean, path: string, method: io.appwrite.enums.ExecutionMethod, headers: any, $completion: any): any;
        public list($completion: any): any;
        public create(functionId: string, name: string, runtime: io.appwrite.enums.Runtime, execute: java.util.List<string>, events: java.util.List<string>, $completion: any): any;
        public getDeployment(apiParams: string, apiHeaders: string, converter: any): any;
        public update(functionId: string, name: string, runtime: io.appwrite.enums.Runtime, execute: java.util.List<string>, events: java.util.List<string>, schedule: string, timeout: java.lang.Long, enabled: java.lang.Boolean, logging: java.lang.Boolean, entrypoint: string, $completion: any): any;
        public update(functionId: string, name: string, $completion: any): any;
        public constructor(client: io.appwrite.Client);
        public update(functionId: string, name: string, runtime: io.appwrite.enums.Runtime, execute: java.util.List<string>, events: java.util.List<string>, schedule: string, timeout: java.lang.Long, enabled: java.lang.Boolean, logging: java.lang.Boolean, entrypoint: string, commands: string, scopes: java.util.List<string>, installationId: string, providerRepositoryId: string, providerBranch: string, providerSilentMode: java.lang.Boolean, providerRootDirectory: string, $completion: any): any;
        public createExecution(functionId: string, body: string, async: java.lang.Boolean, path: string, $completion: any): any;
        public update(functionId: string, name: string, runtime: io.appwrite.enums.Runtime, execute: java.util.List<string>, $completion: any): any;
        public createVcsDeployment(functionId: string, type: io.appwrite.enums.VCSDeploymentType, reference: string, $completion: any): any;
        public update(functionId: string, name: string, runtime: io.appwrite.enums.Runtime, $completion: any): any;
        public listVariables(apiParams: string, apiHeaders: any): any;
        public createExecution(functionId: string, body: string, async: java.lang.Boolean, $completion: any): any;
        public createDeployment(apiParams: string, apiHeaders: io.appwrite.models.InputFile, converter: boolean, idParamName: string, paramName: string, this_: any, functionId: any): any;
        public listExecutions(apiParams: string, apiHeaders: java.util.List<string>, converter: any): any;
        public create(functionId: string, name: string, runtime: io.appwrite.enums.Runtime, execute: java.util.List<string>, events: java.util.List<string>, schedule: string, timeout: java.lang.Long, enabled: java.lang.Boolean, logging: java.lang.Boolean, entrypoint: string, commands: string, scopes: java.util.List<string>, installationId: string, providerRepositoryId: string, providerBranch: string, providerSilentMode: java.lang.Boolean, providerRootDirectory: string, $completion: any): any;
        public createDuplicateDeployment(apiParams: string, apiHeaders: string, converter: string, this_: any): any;
        public create(functionId: string, name: string, runtime: io.appwrite.enums.Runtime, execute: java.util.List<string>, events: java.util.List<string>, schedule: string, timeout: java.lang.Long, enabled: java.lang.Boolean, $completion: any): any;
        public create(functionId: string, name: string, runtime: io.appwrite.enums.Runtime, execute: java.util.List<string>, events: java.util.List<string>, schedule: string, timeout: java.lang.Long, enabled: java.lang.Boolean, logging: java.lang.Boolean, entrypoint: string, commands: string, scopes: java.util.List<string>, installationId: string, providerRepositoryId: string, providerBranch: string, providerSilentMode: java.lang.Boolean, $completion: any): any;
        public createVariable(apiParams: string, apiHeaders: string, converter: string, this_: java.lang.Boolean, functionId: any): any;
        public get(apiParams: string, apiHeaders: any): any;
        public update(functionId: string, name: string, runtime: io.appwrite.enums.Runtime, execute: java.util.List<string>, events: java.util.List<string>, schedule: string, timeout: java.lang.Long, enabled: java.lang.Boolean, logging: java.lang.Boolean, entrypoint: string, commands: string, scopes: java.util.List<string>, installationId: string, $completion: any): any;
        public updateDeploymentStatus(apiParams: string, apiHeaders: string, converter: any): any;
        public update(functionId: string, name: string, runtime: io.appwrite.enums.Runtime, execute: java.util.List<string>, events: java.util.List<string>, schedule: string, timeout: java.lang.Long, enabled: java.lang.Boolean, logging: java.lang.Boolean, $completion: any): any;
        public create(functionId: string, name: string, runtime: io.appwrite.enums.Runtime, execute: java.util.List<string>, events: java.util.List<string>, schedule: string, timeout: java.lang.Long, $completion: any): any;
        public listDeployments(functionId: string, $completion: any): any;
        public createTemplateDeployment(apiParams: string, apiHeaders: string, converter: string, this_: string, functionId: string, repository: java.lang.Boolean, owner: any): any;
        public getExecution(apiParams: string, apiHeaders: string, converter: any): any;
        public create(functionId: string, name: string, runtime: io.appwrite.enums.Runtime, execute: java.util.List<string>, events: java.util.List<string>, schedule: string, $completion: any): any;
        public deleteVariable(apiParams: string, apiHeaders: string, this_: any): any;
        public list(apiParams: java.util.List<string>, apiHeaders: string, converter: any): any;
        public update(functionId: string, name: string, runtime: io.appwrite.enums.Runtime, execute: java.util.List<string>, events: java.util.List<string>, schedule: string, timeout: java.lang.Long, enabled: java.lang.Boolean, logging: java.lang.Boolean, entrypoint: string, commands: string, scopes: java.util.List<string>, installationId: string, providerRepositoryId: string, providerBranch: string, $completion: any): any;
        public listDeployments(apiParams: string, apiHeaders: java.util.List<string>, converter: string, this_: any): any;
        public create(functionId: string, name: string, runtime: io.appwrite.enums.Runtime, execute: java.util.List<string>, events: java.util.List<string>, schedule: string, timeout: java.lang.Long, enabled: java.lang.Boolean, logging: java.lang.Boolean, entrypoint: string, commands: string, $completion: any): any;
        public createDeployment(functionId: string, code: io.appwrite.models.InputFile, activate: boolean, $completion: any): any;
        public update(functionId: string, name: string, runtime: io.appwrite.enums.Runtime, execute: java.util.List<string>, events: java.util.List<string>, schedule: string, timeout: java.lang.Long, enabled: java.lang.Boolean, logging: java.lang.Boolean, entrypoint: string, commands: string, $completion: any): any;
        public getDeploymentDownload(functionId: string, deploymentId: string, $completion: any): any;
        public deleteDeployment(apiParams: string, apiHeaders: string, this_: any): any;
        public createTemplateDeployment(functionId: string, repository: string, owner: string, rootDirectory: string, version: string, $completion: any): any;
        public createDeployment(functionId: string, code: io.appwrite.models.InputFile, activate: boolean, entrypoint: string, commands: string, $completion: any): any;
        public deleteExecution(apiParams: string, apiHeaders: string, this_: any): any;
        public create(functionId: string, name: string, runtime: io.appwrite.enums.Runtime, $completion: any): any;
        public update(functionId: string, name: string, runtime: io.appwrite.enums.Runtime, execute: java.util.List<string>, events: java.util.List<string>, $completion: any): any;
        public create(apiParams: string, apiHeaders: string, converter: io.appwrite.enums.Runtime, this_: java.util.List<string>, functionId: java.util.List<string>, name: string, runtime: java.lang.Long, execute: java.lang.Boolean, events: java.lang.Boolean, schedule: string, timeout: string, enabled: java.util.List<string>, logging: string, entrypoint: string, commands: string, scopes: java.lang.Boolean, installationId: string, providerRepositoryId: string, providerBranch: any): any;
        public update(functionId: string, name: string, runtime: io.appwrite.enums.Runtime, execute: java.util.List<string>, events: java.util.List<string>, schedule: string, timeout: java.lang.Long, enabled: java.lang.Boolean, logging: java.lang.Boolean, entrypoint: string, commands: string, scopes: java.util.List<string>, installationId: string, providerRepositoryId: string, $completion: any): any;
        public updateVariable(apiParams: string, apiHeaders: string, converter: string, this_: string, functionId: java.lang.Boolean, variableId: any): any;
        public createVariable(functionId: string, key: string, value: string, $completion: any): any;
        public create(functionId: string, name: string, runtime: io.appwrite.enums.Runtime, execute: java.util.List<string>, events: java.util.List<string>, schedule: string, timeout: java.lang.Long, enabled: java.lang.Boolean, logging: java.lang.Boolean, entrypoint: string, commands: string, scopes: java.util.List<string>, installationId: string, $completion: any): any;
        public createDuplicateDeployment(functionId: string, deploymentId: string, $completion: any): any;
        public list(queries: java.util.List<string>, $completion: any): any;
        public update(functionId: string, name: string, runtime: io.appwrite.enums.Runtime, execute: java.util.List<string>, events: java.util.List<string>, schedule: string, timeout: java.lang.Long, enabled: java.lang.Boolean, logging: java.lang.Boolean, entrypoint: string, commands: string, scopes: java.util.List<string>, installationId: string, providerRepositoryId: string, providerBranch: string, providerSilentMode: java.lang.Boolean, $completion: any): any;
        public update(functionId: string, name: string, runtime: io.appwrite.enums.Runtime, execute: java.util.List<string>, events: java.util.List<string>, schedule: string, timeout: java.lang.Long, enabled: java.lang.Boolean, logging: java.lang.Boolean, entrypoint: string, commands: string, scopes: java.util.List<string>, $completion: any): any;
        public update(functionId: string, name: string, runtime: io.appwrite.enums.Runtime, execute: java.util.List<string>, events: java.util.List<string>, schedule: string, timeout: java.lang.Long, enabled: java.lang.Boolean, $completion: any): any;
        public create(functionId: string, name: string, runtime: io.appwrite.enums.Runtime, execute: java.util.List<string>, events: java.util.List<string>, schedule: string, timeout: java.lang.Long, enabled: java.lang.Boolean, logging: java.lang.Boolean, entrypoint: string, commands: string, scopes: java.util.List<string>, installationId: string, providerRepositoryId: string, $completion: any): any;
        public createExecution(functionId: string, body: string, async: java.lang.Boolean, path: string, method: io.appwrite.enums.ExecutionMethod, $completion: any): any;
        public listSpecifications(apiParams: any): any;
        public updateVariable(functionId: string, variableId: string, key: string, $completion: any): any;
        public update(apiParams: string, apiHeaders: string, converter: io.appwrite.enums.Runtime, this_: java.util.List<string>, functionId: java.util.List<string>, name: string, runtime: java.lang.Long, execute: java.lang.Boolean, events: java.lang.Boolean, schedule: string, timeout: string, enabled: java.util.List<string>, logging: string, entrypoint: string, commands: string, scopes: java.lang.Boolean, installationId: string, providerRepositoryId: string, providerBranch: any): any;
        public create(functionId: string, name: string, runtime: io.appwrite.enums.Runtime, execute: java.util.List<string>, events: java.util.List<string>, schedule: string, timeout: java.lang.Long, enabled: java.lang.Boolean, logging: java.lang.Boolean, entrypoint: string, $completion: any): any;
        public createExecution(apiParams: string, apiHeaders: string, converter: java.lang.Boolean, this_: string, functionId: io.appwrite.enums.ExecutionMethod, body: any, async: string, path: any): any;
        public getVariable(apiParams: string, apiHeaders: string, converter: any): any;
        public getDeploymentDownload(apiParams: string, apiHeaders: string, this_: io.appwrite.enums.DeploymentDownloadType, functionId: any): any;
        public update(functionId: string, name: string, runtime: io.appwrite.enums.Runtime, execute: java.util.List<string>, events: java.util.List<string>, schedule: string, timeout: java.lang.Long, $completion: any): any;
        public updateVariable(functionId: string, variableId: string, key: string, value: string, $completion: any): any;
        public listExecutions(functionId: string, $completion: any): any;
        public listDeployments(functionId: string, queries: java.util.List<string>, $completion: any): any;
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module services {
      export class Graphql extends io.appwrite.services.Service {
        public static class: java.lang.Class<io.appwrite.services.Graphql>;
        public constructor(client: io.appwrite.Client);
        public query(apiParams: any, apiHeaders: any): any;
        public mutation(apiParams: any, apiHeaders: any): any;
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module services {
      export class Health extends io.appwrite.services.Service {
        public static class: java.lang.Class<io.appwrite.services.Health>;
        public getQueueBuilds($completion: any): any;
        public getQueueFunctions(apiParams: java.lang.Long, apiHeaders: any): any;
        public getCertificate($completion: any): any;
        public getQueueStatsResources(apiParams: java.lang.Long, apiHeaders: any): any;
        public getPubSub(apiParams: any): any;
        public getQueueBuilds(apiParams: java.lang.Long, apiHeaders: any): any;
        public getQueueMails(apiParams: java.lang.Long, apiHeaders: any): any;
        public getQueueWebhooks($completion: any): any;
        public get(apiParams: any): any;
        public getQueueDatabases($completion: any): any;
        public getQueueMails($completion: any): any;
        public getQueueDatabases(name: string, $completion: any): any;
        public getQueueDeletes(apiParams: java.lang.Long, apiHeaders: any): any;
        public getQueueMessaging(apiParams: java.lang.Long, apiHeaders: any): any;
        public getDB(apiParams: any): any;
        public getFailedJobs(apiParams: io.appwrite.enums.Name, apiHeaders: java.lang.Long, converter: any): any;
        public getAntivirus(apiParams: any): any;
        public getQueueLogs(apiParams: java.lang.Long, apiHeaders: any): any;
        public getStorageLocal(apiParams: any): any;
        public getQueueMigrations($completion: any): any;
        public getCertificate(apiParams: string, apiHeaders: any): any;
        public getTime(apiParams: any): any;
        public getQueueFunctions($completion: any): any;
        public constructor(client: io.appwrite.Client);
        public getQueueCertificates(apiParams: java.lang.Long, apiHeaders: any): any;
        public getQueueMigrations(apiParams: java.lang.Long, apiHeaders: any): any;
        public getQueueLogs($completion: any): any;
        public getQueueMessaging($completion: any): any;
        public getFailedJobs(name: io.appwrite.enums.Name, $completion: any): any;
        public getQueueWebhooks(apiParams: java.lang.Long, apiHeaders: any): any;
        public getQueueDeletes($completion: any): any;
        public getCache(apiParams: any): any;
        public getQueueDatabases(apiParams: string, apiHeaders: java.lang.Long, converter: any): any;
        public getQueueUsage(apiParams: java.lang.Long, apiHeaders: any): any;
        public getQueueStatsResources($completion: any): any;
        public getQueueCertificates($completion: any): any;
        public getQueueUsage($completion: any): any;
        public getStorage(apiParams: any): any;
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module services {
      export class Locale extends io.appwrite.services.Service {
        public static class: java.lang.Class<io.appwrite.services.Locale>;
        public listLanguages(apiParams: any): any;
        public constructor(client: io.appwrite.Client);
        public listContinents(apiParams: any): any;
        public listCurrencies(apiParams: any): any;
        public listCountries(apiParams: any): any;
        public listCountriesPhones(apiParams: any): any;
        public get(apiParams: any): any;
        public listCodes(apiParams: any): any;
        public listCountriesEU(apiParams: any): any;
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module services {
      export class Messaging extends io.appwrite.services.Service {
        public static class: java.lang.Class<io.appwrite.services.Messaging>;
        public updatePush(apiParams: string, apiHeaders: java.util.List<string>, converter: java.util.List<string>, this_: java.util.List<string>, messageId: string, topics: string, users: any, targets: string, title: string, body: string, data: string, action: string, image: string, icon: java.lang.Long, sound: java.lang.Boolean, color: string, tag: java.lang.Boolean, badge: java.lang.Boolean, draft: io.appwrite.enums.MessagePriority, scheduledAt: any): any;
        public createSms(apiParams: string, apiHeaders: string, converter: java.util.List<string>, this_: java.util.List<string>, messageId: java.util.List<string>, content: java.lang.Boolean, topics: string, users: any): any;
        public listTargets(apiParams: string, apiHeaders: java.util.List<string>, converter: any): any;
        public updateSendgridProvider(providerId: string, name: string, enabled: java.lang.Boolean, apiKey: string, fromName: string, fromEmail: string, $completion: any): any;
        public updateEmail(apiParams: string, apiHeaders: java.util.List<string>, converter: java.util.List<string>, this_: java.util.List<string>, messageId: string, topics: string, users: java.lang.Boolean, targets: java.lang.Boolean, subject: java.util.List<string>, content: java.util.List<string>, draft: string, html: java.util.List<string>, cc: any): any;
        public createMailgunProvider(apiParams: string, apiHeaders: string, converter: string, this_: string, providerId: java.lang.Boolean, name: string, apiKey: string, domain: string, isEuRegion: string, fromName: java.lang.Boolean, fromEmail: any): any;
        public listProviders(queries: java.util.List<string>, $completion: any): any;
        public updateSmtpProvider(providerId: string, name: string, $completion: any): any;
        public createApnsProvider(providerId: string, name: string, authKey: string, authKeyId: string, teamId: string, $completion: any): any;
        public deleteProvider(apiParams: string, apiHeaders: any): any;
        public createSendgridProvider(providerId: string, name: string, apiKey: string, fromName: string, fromEmail: string, $completion: any): any;
        public updateMailgunProvider(apiParams: string, apiHeaders: string, converter: string, this_: string, providerId: java.lang.Boolean, name: java.lang.Boolean, apiKey: string, domain: string, isEuRegion: string, enabled: string, fromName: any): any;
        public createPush(messageId: string, title: string, body: string, topics: java.util.List<string>, users: java.util.List<string>, targets: java.util.List<string>, $completion: any): any;
        public listSubscriberLogs(apiParams: string, apiHeaders: java.util.List<string>, converter: any): any;
        public updateSms(messageId: string, topics: java.util.List<string>, users: java.util.List<string>, $completion: any): any;
        public constructor(client: io.appwrite.Client);
        public updateVonageProvider(providerId: string, $completion: any): any;
        public createPush(messageId: string, title: string, body: string, topics: java.util.List<string>, users: java.util.List<string>, targets: java.util.List<string>, data: any, action: string, image: string, icon: string, $completion: any): any;
        public listProviders($completion: any): any;
        public createPush(messageId: string, title: string, body: string, topics: java.util.List<string>, $completion: any): any;
        public updatePush(messageId: string, topics: java.util.List<string>, users: java.util.List<string>, targets: java.util.List<string>, title: string, body: string, data: any, action: string, image: string, icon: string, sound: string, color: string, tag: string, badge: java.lang.Long, draft: java.lang.Boolean, scheduledAt: string, $completion: any): any;
        public updateSendgridProvider(providerId: string, name: string, enabled: java.lang.Boolean, $completion: any): any;
        public createSendgridProvider(providerId: string, name: string, apiKey: string, fromName: string, $completion: any): any;
        public updateApnsProvider(providerId: string, $completion: any): any;
        public updateTopic(topicId: string, $completion: any): any;
        public updateSms(messageId: string, topics: java.util.List<string>, users: java.util.List<string>, targets: java.util.List<string>, $completion: any): any;
        public listProviderLogs(apiParams: string, apiHeaders: java.util.List<string>, converter: any): any;
        public createSmtpProvider(providerId: string, name: string, host: string, port: java.lang.Long, username: string, password: string, encryption: io.appwrite.enums.SmtpEncryption, autoTLS: java.lang.Boolean, mailer: string, fromName: string, fromEmail: string, replyToName: string, replyToEmail: string, $completion: any): any;
        public createSmtpProvider(providerId: string, name: string, host: string, port: java.lang.Long, username: string, password: string, encryption: io.appwrite.enums.SmtpEncryption, autoTLS: java.lang.Boolean, $completion: any): any;
        public updateTopic(apiParams: string, apiHeaders: string, converter: java.util.List<string>, this_: any): any;
        public createSms(messageId: string, content: string, topics: java.util.List<string>, users: java.util.List<string>, targets: java.util.List<string>, $completion: any): any;
        public updateSmtpProvider(apiParams: string, apiHeaders: string, converter: string, this_: java.lang.Long, providerId: string, name: string, host: io.appwrite.enums.SmtpEncryption, port: java.lang.Boolean, username: string, password: string, encryption: string, autoTLS: string, mailer: string, fromName: java.lang.Boolean, fromEmail: any): any;
        public updatePush(messageId: string, topics: java.util.List<string>, users: java.util.List<string>, targets: java.util.List<string>, title: string, body: string, data: any, action: string, image: string, icon: string, sound: string, color: string, tag: string, badge: java.lang.Long, draft: java.lang.Boolean, scheduledAt: string, contentAvailable: java.lang.Boolean, critical: java.lang.Boolean, $completion: any): any;
        public updateSendgridProvider(providerId: string, name: string, enabled: java.lang.Boolean, apiKey: string, fromName: string, $completion: any): any;
        public listSubscribers(topicId: string, queries: java.util.List<string>, $completion: any): any;
        public createMailgunProvider(providerId: string, name: string, apiKey: string, domain: string, isEuRegion: java.lang.Boolean, fromName: string, fromEmail: string, replyToName: string, $completion: any): any;
        public createTwilioProvider(providerId: string, name: string, from: string, $completion: any): any;
        public updateSms(messageId: string, topics: java.util.List<string>, users: java.util.List<string>, targets: java.util.List<string>, content: string, draft: java.lang.Boolean, $completion: any): any;
        public createTextmagicProvider(providerId: string, name: string, from: string, username: string, $completion: any): any;
        public updateEmail(messageId: string, topics: java.util.List<string>, $completion: any): any;
        public createPush(messageId: string, title: string, body: string, topics: java.util.List<string>, users: java.util.List<string>, targets: java.util.List<string>, data: any, action: string, image: string, $completion: any): any;
        public createSmtpProvider(providerId: string, name: string, host: string, port: java.lang.Long, $completion: any): any;
        public updateTwilioProvider(apiParams: string, apiHeaders: string, converter: java.lang.Boolean, this_: string, providerId: string, name: string, enabled: any): any;
        public createSmtpProvider(apiParams: string, apiHeaders: string, converter: string, this_: java.lang.Long, providerId: string, name: string, host: io.appwrite.enums.SmtpEncryption, port: java.lang.Boolean, username: string, password: string, encryption: string, autoTLS: string, mailer: string, fromName: java.lang.Boolean, fromEmail: any): any;
        public createEmail(messageId: string, subject: string, content: string, topics: java.util.List<string>, users: java.util.List<string>, targets: java.util.List<string>, cc: java.util.List<string>, bcc: java.util.List<string>, $completion: any): any;
        public listMessageLogs(messageId: string, $completion: any): any;
        public updateApnsProvider(providerId: string, name: string, enabled: java.lang.Boolean, authKey: string, $completion: any): any;
        public updateSmtpProvider(providerId: string, name: string, host: string, $completion: any): any;
        public createSmtpProvider(providerId: string, name: string, host: string, port: java.lang.Long, username: string, password: string, encryption: io.appwrite.enums.SmtpEncryption, autoTLS: java.lang.Boolean, mailer: string, fromName: string, $completion: any): any;
        public updatePush(messageId: string, topics: java.util.List<string>, users: java.util.List<string>, targets: java.util.List<string>, title: string, body: string, data: any, action: string, image: string, $completion: any): any;
        public createSms(messageId: string, content: string, topics: java.util.List<string>, users: java.util.List<string>, $completion: any): any;
        public updatePush(messageId: string, topics: java.util.List<string>, users: java.util.List<string>, targets: java.util.List<string>, title: string, body: string, data: any, action: string, image: string, icon: string, sound: string, $completion: any): any;
        public updateTelesignProvider(providerId: string, name: string, $completion: any): any;
        public createTopic(apiParams: string, apiHeaders: string, converter: java.util.List<string>, this_: any): any;
        public updatePush(messageId: string, topics: java.util.List<string>, users: java.util.List<string>, targets: java.util.List<string>, title: string, body: string, $completion: any): any;
        public listSubscribers(topicId: string, $completion: any): any;
        public updateMailgunProvider(providerId: string, name: string, $completion: any): any;
        public updateSmtpProvider(providerId: string, name: string, host: string, port: java.lang.Long, username: string, password: string, encryption: io.appwrite.enums.SmtpEncryption, autoTLS: java.lang.Boolean, mailer: string, fromName: string, fromEmail: string, replyToName: string, replyToEmail: string, $completion: any): any;
        public createTopic(topicId: string, name: string, $completion: any): any;
        public createEmail(messageId: string, subject: string, content: string, topics: java.util.List<string>, users: java.util.List<string>, targets: java.util.List<string>, $completion: any): any;
        public createSms(messageId: string, content: string, topics: java.util.List<string>, $completion: any): any;
        public createMailgunProvider(providerId: string, name: string, $completion: any): any;
        public updateMailgunProvider(providerId: string, name: string, apiKey: string, domain: string, isEuRegion: java.lang.Boolean, enabled: java.lang.Boolean, fromName: string, fromEmail: string, $completion: any): any;
        public createSmtpProvider(providerId: string, name: string, host: string, port: java.lang.Long, username: string, password: string, encryption: io.appwrite.enums.SmtpEncryption, autoTLS: java.lang.Boolean, mailer: string, $completion: any): any;
        public listMessageLogs(apiParams: string, apiHeaders: java.util.List<string>, converter: any): any;
        public updatePush(messageId: string, $completion: any): any;
        public createTextmagicProvider(providerId: string, name: string, from: string, username: string, apiKey: string, $completion: any): any;
        public updateTwilioProvider(providerId: string, name: string, enabled: java.lang.Boolean, accountSid: string, authToken: string, $completion: any): any;
        public updateMsg91Provider(providerId: string, $completion: any): any;
        public getTopic(apiParams: string, apiHeaders: any): any;
        public listMessages($completion: any): any;
        public updateMsg91Provider(providerId: string, name: string, enabled: java.lang.Boolean, templateId: string, senderId: string, $completion: any): any;
        public createMailgunProvider(providerId: string, name: string, apiKey: string, domain: string, $completion: any): any;
        public delete(apiParams: string, apiHeaders: any): any;
        public createEmail(messageId: string, subject: string, content: string, topics: java.util.List<string>, users: java.util.List<string>, targets: java.util.List<string>, cc: java.util.List<string>, bcc: java.util.List<string>, attachments: java.util.List<string>, draft: java.lang.Boolean, html: java.lang.Boolean, $completion: any): any;
        public createEmail(apiParams: string, apiHeaders: string, converter: string, this_: java.util.List<string>, messageId: java.util.List<string>, subject: java.util.List<string>, content: java.util.List<string>, topics: java.util.List<string>, users: java.util.List<string>, targets: java.lang.Boolean, cc: java.lang.Boolean, bcc: string, attachments: any): any;
        public updateMailgunProvider(providerId: string, name: string, apiKey: string, domain: string, isEuRegion: java.lang.Boolean, enabled: java.lang.Boolean, fromName: string, $completion: any): any;
        public updateEmail(messageId: string, topics: java.util.List<string>, users: java.util.List<string>, targets: java.util.List<string>, subject: string, content: string, draft: java.lang.Boolean, $completion: any): any;
        public updatePush(messageId: string, topics: java.util.List<string>, users: java.util.List<string>, targets: java.util.List<string>, title: string, $completion: any): any;
        public createTelesignProvider(providerId: string, name: string, from: string, $completion: any): any;
        public createMailgunProvider(providerId: string, name: string, apiKey: string, $completion: any): any;
        public updateTwilioProvider(providerId: string, $completion: any): any;
        public updateEmail(messageId: string, topics: java.util.List<string>, users: java.util.List<string>, targets: java.util.List<string>, subject: string, content: string, $completion: any): any;
        public updateMailgunProvider(providerId: string, name: string, apiKey: string, domain: string, isEuRegion: java.lang.Boolean, enabled: java.lang.Boolean, fromName: string, fromEmail: string, replyToName: string, $completion: any): any;
        public createMsg91Provider(providerId: string, name: string, $completion: any): any;
        public updateVonageProvider(providerId: string, name: string, enabled: java.lang.Boolean, apiKey: string, apiSecret: string, $completion: any): any;
        public createPush(apiParams: string, apiHeaders: string, converter: string, this_: java.util.List<string>, messageId: java.util.List<string>, title: java.util.List<string>, body: any, topics: string, users: string, targets: string, data: string, action: string, image: string, icon: java.lang.Long, sound: java.lang.Boolean, color: string, tag: java.lang.Boolean, badge: java.lang.Boolean, draft: io.appwrite.enums.MessagePriority, scheduledAt: any): any;
        public deleteTopic(apiParams: string, apiHeaders: any): any;
        public updateEmail(messageId: string, topics: java.util.List<string>, users: java.util.List<string>, targets: java.util.List<string>, $completion: any): any;
        public updateEmail(messageId: string, topics: java.util.List<string>, users: java.util.List<string>, targets: java.util.List<string>, subject: string, $completion: any): any;
        public createMailgunProvider(providerId: string, name: string, apiKey: string, domain: string, isEuRegion: java.lang.Boolean, fromName: string, fromEmail: string, replyToName: string, replyToEmail: string, $completion: any): any;
        public updateMsg91Provider(providerId: string, name: string, $completion: any): any;
        public updatePush(messageId: string, topics: java.util.List<string>, users: java.util.List<string>, targets: java.util.List<string>, title: string, body: string, data: any, action: string, image: string, icon: string, sound: string, color: string, tag: string, badge: java.lang.Long, draft: java.lang.Boolean, $completion: any): any;
        public createSmtpProvider(providerId: string, name: string, host: string, port: java.lang.Long, username: string, password: string, $completion: any): any;
        public updateSmtpProvider(providerId: string, name: string, host: string, port: java.lang.Long, username: string, password: string, encryption: io.appwrite.enums.SmtpEncryption, autoTLS: java.lang.Boolean, mailer: string, $completion: any): any;
        public listSubscriberLogs(subscriberId: string, $completion: any): any;
        public createApnsProvider(providerId: string, name: string, $completion: any): any;
        public updateTelesignProvider(providerId: string, $completion: any): any;
        public updateSmtpProvider(providerId: string, name: string, host: string, port: java.lang.Long, username: string, password: string, encryption: io.appwrite.enums.SmtpEncryption, autoTLS: java.lang.Boolean, mailer: string, fromName: string, fromEmail: string, replyToName: string, $completion: any): any;
        public updateEmail(messageId: string, topics: java.util.List<string>, users: java.util.List<string>, $completion: any): any;
        public createFcmProvider(providerId: string, name: string, serviceAccountJSON: any, $completion: any): any;
        public createSms(messageId: string, content: string, $completion: any): any;
        public updatePush(messageId: string, topics: java.util.List<string>, users: java.util.List<string>, targets: java.util.List<string>, title: string, body: string, data: any, action: string, image: string, icon: string, $completion: any): any;
        public createTextmagicProvider(providerId: string, name: string, $completion: any): any;
        public createEmail(messageId: string, subject: string, content: string, topics: java.util.List<string>, $completion: any): any;
        public createPush(messageId: string, $completion: any): any;
        public updatePush(messageId: string, topics: java.util.List<string>, users: java.util.List<string>, targets: java.util.List<string>, title: string, body: string, data: any, action: string, image: string, icon: string, sound: string, color: string, tag: string, badge: java.lang.Long, draft: java.lang.Boolean, scheduledAt: string, contentAvailable: java.lang.Boolean, $completion: any): any;
        public updateMailgunProvider(providerId: string, name: string, apiKey: string, $completion: any): any;
        public updateTwilioProvider(providerId: string, name: string, enabled: java.lang.Boolean, $completion: any): any;
        public listSubscribers(apiParams: string, apiHeaders: java.util.List<string>, converter: string, this_: any): any;
        public updatePush(messageId: string, topics: java.util.List<string>, users: java.util.List<string>, $completion: any): any;
        public updateSmtpProvider(providerId: string, name: string, host: string, port: java.lang.Long, username: string, password: string, encryption: io.appwrite.enums.SmtpEncryption, autoTLS: java.lang.Boolean, mailer: string, fromName: string, fromEmail: string, $completion: any): any;
        public getProvider(apiParams: string, apiHeaders: any): any;
        public createSmtpProvider(providerId: string, name: string, host: string, port: java.lang.Long, username: string, password: string, encryption: io.appwrite.enums.SmtpEncryption, $completion: any): any;
        public createSmtpProvider(providerId: string, name: string, host: string, port: java.lang.Long, username: string, password: string, encryption: io.appwrite.enums.SmtpEncryption, autoTLS: java.lang.Boolean, mailer: string, fromName: string, fromEmail: string, replyToName: string, $completion: any): any;
        public updateSmtpProvider(providerId: string, name: string, host: string, port: java.lang.Long, $completion: any): any;
        public createPush(messageId: string, title: string, body: string, topics: java.util.List<string>, users: java.util.List<string>, targets: java.util.List<string>, data: any, action: string, $completion: any): any;
        public listTopics(apiParams: java.util.List<string>, apiHeaders: string, converter: any): any;
        public createEmail(messageId: string, subject: string, content: string, topics: java.util.List<string>, users: java.util.List<string>, targets: java.util.List<string>, cc: java.util.List<string>, $completion: any): any;
        public createVonageProvider(providerId: string, name: string, from: string, apiKey: string, apiSecret: string, $completion: any): any;
        public updateTextmagicProvider(providerId: string, name: string, enabled: java.lang.Boolean, username: string, $completion: any): any;
        public createTwilioProvider(apiParams: string, apiHeaders: string, converter: string, this_: string, providerId: string, name: java.lang.Boolean, from: any): any;
        public listMessages(queries: java.util.List<string>, $completion: any): any;
        public updatePush(messageId: string, topics: java.util.List<string>, users: java.util.List<string>, targets: java.util.List<string>, title: string, body: string, data: any, action: string, image: string, icon: string, sound: string, color: string, tag: string, badge: java.lang.Long, $completion: any): any;
        public createSmtpProvider(providerId: string, name: string, host: string, port: java.lang.Long, username: string, $completion: any): any;
        public createApnsProvider(providerId: string, name: string, authKey: string, $completion: any): any;
        public updateMailgunProvider(providerId: string, name: string, apiKey: string, domain: string, $completion: any): any;
        public listTopicLogs(apiParams: string, apiHeaders: java.util.List<string>, converter: any): any;
        public updateVonageProvider(providerId: string, name: string, enabled: java.lang.Boolean, $completion: any): any;
        public updateFcmProvider(apiParams: string, apiHeaders: string, converter: java.lang.Boolean, this_: any, providerId: any): any;
        public updateTwilioProvider(providerId: string, name: string, enabled: java.lang.Boolean, accountSid: string, $completion: any): any;
        public updateSendgridProvider(providerId: string, name: string, enabled: java.lang.Boolean, apiKey: string, $completion: any): any;
        public updateMsg91Provider(providerId: string, name: string, enabled: java.lang.Boolean, $completion: any): any;
        public createVonageProvider(apiParams: string, apiHeaders: string, converter: string, this_: string, providerId: string, name: java.lang.Boolean, from: any): any;
        public updateMsg91Provider(providerId: string, name: string, enabled: java.lang.Boolean, templateId: string, $completion: any): any;
        public updateSmtpProvider(providerId: string, name: string, host: string, port: java.lang.Long, username: string, password: string, $completion: any): any;
        public createMsg91Provider(providerId: string, name: string, templateId: string, senderId: string, authKey: string, $completion: any): any;
        public updateSmtpProvider(providerId: string, name: string, host: string, port: java.lang.Long, username: string, $completion: any): any;
        public createPush(messageId: string, title: string, body: string, topics: java.util.List<string>, users: java.util.List<string>, targets: java.util.List<string>, data: any, action: string, image: string, icon: string, sound: string, color: string, tag: string, badge: java.lang.Long, draft: java.lang.Boolean, scheduledAt: string, contentAvailable: java.lang.Boolean, $completion: any): any;
        public createTextmagicProvider(apiParams: string, apiHeaders: string, converter: string, this_: string, providerId: string, name: java.lang.Boolean, from: any): any;
        public updateFcmProvider(providerId: string, $completion: any): any;
        public createVonageProvider(providerId: string, name: string, from: string, $completion: any): any;
        public createPush(messageId: string, title: string, $completion: any): any;
        public updateVonageProvider(apiParams: string, apiHeaders: string, converter: java.lang.Boolean, this_: string, providerId: string, name: string, enabled: any): any;
        public listProviderLogs(providerId: string, $completion: any): any;
        public listTopics($completion: any): any;
        public updateApnsProvider(providerId: string, name: string, $completion: any): any;
        public createMailgunProvider(providerId: string, name: string, apiKey: string, domain: string, isEuRegion: java.lang.Boolean, fromName: string, fromEmail: string, $completion: any): any;
        public updateApnsProvider(providerId: string, name: string, enabled: java.lang.Boolean, authKey: string, authKeyId: string, $completion: any): any;
        public listTopics(queries: java.util.List<string>, $completion: any): any;
        public updateSendgridProvider(apiParams: string, apiHeaders: string, converter: java.lang.Boolean, this_: string, providerId: string, name: string, enabled: string, apiKey: string, fromName: any): any;
        public createPush(messageId: string, title: string, body: string, topics: java.util.List<string>, users: java.util.List<string>, targets: java.util.List<string>, data: any, action: string, image: string, icon: string, sound: string, $completion: any): any;
        public updateFcmProvider(providerId: string, name: string, enabled: java.lang.Boolean, $completion: any): any;
        public updateTelesignProvider(apiParams: string, apiHeaders: string, converter: java.lang.Boolean, this_: string, providerId: string, name: string, enabled: any): any;
        public createTelesignProvider(providerId: string, name: string, from: string, customerId: string, $completion: any): any;
        public updateSms(messageId: string, topics: java.util.List<string>, $completion: any): any;
        public updateTopic(topicId: string, name: string, $completion: any): any;
        public createSubscriber(apiParams: string, apiHeaders: string, converter: string, this_: any): any;
        public updateVonageProvider(providerId: string, name: string, enabled: java.lang.Boolean, apiKey: string, $completion: any): any;
        public createTwilioProvider(providerId: string, name: string, $completion: any): any;
        public updatePush(messageId: string, topics: java.util.List<string>, $completion: any): any;
        public updateTextmagicProvider(providerId: string, name: string, enabled: java.lang.Boolean, username: string, apiKey: string, $completion: any): any;
        public createSms(messageId: string, content: string, topics: java.util.List<string>, users: java.util.List<string>, targets: java.util.List<string>, draft: java.lang.Boolean, $completion: any): any;
        public createApnsProvider(apiParams: string, apiHeaders: string, converter: string, this_: string, providerId: string, name: string, authKey: java.lang.Boolean, authKeyId: java.lang.Boolean, teamId: any): any;
        public createEmail(messageId: string, subject: string, content: string, topics: java.util.List<string>, users: java.util.List<string>, targets: java.util.List<string>, cc: java.util.List<string>, bcc: java.util.List<string>, attachments: java.util.List<string>, draft: java.lang.Boolean, $completion: any): any;
        public updateSms(messageId: string, topics: java.util.List<string>, users: java.util.List<string>, targets: java.util.List<string>, content: string, $completion: any): any;
        public createFcmProvider(providerId: string, name: string, $completion: any): any;
        public createTelesignProvider(apiParams: string, apiHeaders: string, converter: string, this_: string, providerId: string, name: java.lang.Boolean, from: any): any;
        public createVonageProvider(providerId: string, name: string, $completion: any): any;
        public updatePush(messageId: string, topics: java.util.List<string>, users: java.util.List<string>, targets: java.util.List<string>, title: string, body: string, data: any, $completion: any): any;
        public createPush(messageId: string, title: string, body: string, topics: java.util.List<string>, users: java.util.List<string>, $completion: any): any;
        public createSendgridProvider(providerId: string, name: string, apiKey: string, fromName: string, fromEmail: string, replyToName: string, $completion: any): any;
        public updateEmail(messageId: string, topics: java.util.List<string>, users: java.util.List<string>, targets: java.util.List<string>, subject: string, content: string, draft: java.lang.Boolean, html: java.lang.Boolean, cc: java.util.List<string>, bcc: java.util.List<string>, $completion: any): any;
        public updateTelesignProvider(providerId: string, name: string, enabled: java.lang.Boolean, customerId: string, apiKey: string, $completion: any): any;
        public createApnsProvider(providerId: string, name: string, authKey: string, authKeyId: string, teamId: string, bundleId: string, $completion: any): any;
        public createEmail(messageId: string, subject: string, content: string, topics: java.util.List<string>, users: java.util.List<string>, targets: java.util.List<string>, cc: java.util.List<string>, bcc: java.util.List<string>, attachments: java.util.List<string>, $completion: any): any;
        public updateSendgridProvider(providerId: string, $completion: any): any;
        public createMsg91Provider(providerId: string, name: string, templateId: string, $completion: any): any;
        public createEmail(messageId: string, subject: string, content: string, $completion: any): any;
        public createTelesignProvider(providerId: string, name: string, $completion: any): any;
        public updateVonageProvider(providerId: string, name: string, $completion: any): any;
        public createMsg91Provider(providerId: string, name: string, templateId: string, senderId: string, $completion: any): any;
        public createEmail(messageId: string, subject: string, content: string, topics: java.util.List<string>, users: java.util.List<string>, $completion: any): any;
        public updateTextmagicProvider(providerId: string, name: string, $completion: any): any;
        public updatePush(messageId: string, topics: java.util.List<string>, users: java.util.List<string>, targets: java.util.List<string>, $completion: any): any;
        public createSendgridProvider(providerId: string, name: string, apiKey: string, $completion: any): any;
        public listTopicLogs(topicId: string, $completion: any): any;
        public listTargets(messageId: string, $completion: any): any;
        public createMailgunProvider(providerId: string, name: string, apiKey: string, domain: string, isEuRegion: java.lang.Boolean, $completion: any): any;
        public createSmtpProvider(providerId: string, name: string, host: string, $completion: any): any;
        public updateTextmagicProvider(providerId: string, $completion: any): any;
        public updateFcmProvider(providerId: string, name: string, $completion: any): any;
        public updateTelesignProvider(providerId: string, name: string, enabled: java.lang.Boolean, customerId: string, $completion: any): any;
        public updateSms(messageId: string, $completion: any): any;
        public createSmtpProvider(providerId: string, name: string, host: string, port: java.lang.Long, username: string, password: string, encryption: io.appwrite.enums.SmtpEncryption, autoTLS: java.lang.Boolean, mailer: string, fromName: string, fromEmail: string, $completion: any): any;
        public updateMailgunProvider(providerId: string, name: string, apiKey: string, domain: string, isEuRegion: java.lang.Boolean, $completion: any): any;
        public updateSmtpProvider(providerId: string, name: string, host: string, port: java.lang.Long, username: string, password: string, encryption: io.appwrite.enums.SmtpEncryption, autoTLS: java.lang.Boolean, $completion: any): any;
        public updateTelesignProvider(providerId: string, name: string, enabled: java.lang.Boolean, $completion: any): any;
        public createVonageProvider(providerId: string, name: string, from: string, apiKey: string, $completion: any): any;
        public updateEmail(messageId: string, topics: java.util.List<string>, users: java.util.List<string>, targets: java.util.List<string>, subject: string, content: string, draft: java.lang.Boolean, html: java.lang.Boolean, $completion: any): any;
        public updateSmtpProvider(providerId: string, name: string, host: string, port: java.lang.Long, username: string, password: string, encryption: io.appwrite.enums.SmtpEncryption, $completion: any): any;
        public getSubscriber(apiParams: string, apiHeaders: string, converter: any): any;
        public createSendgridProvider(providerId: string, name: string, apiKey: string, fromName: string, fromEmail: string, replyToName: string, replyToEmail: string, $completion: any): any;
        public createPush(messageId: string, title: string, body: string, topics: java.util.List<string>, users: java.util.List<string>, targets: java.util.List<string>, data: any, action: string, image: string, icon: string, sound: string, color: string, tag: string, badge: java.lang.Long, draft: java.lang.Boolean, scheduledAt: string, $completion: any): any;
        public getMessage(apiParams: string, apiHeaders: any): any;
        public updateEmail(messageId: string, topics: java.util.List<string>, users: java.util.List<string>, targets: java.util.List<string>, subject: string, content: string, draft: java.lang.Boolean, html: java.lang.Boolean, cc: java.util.List<string>, bcc: java.util.List<string>, scheduledAt: string, $completion: any): any;
        public createPush(messageId: string, title: string, body: string, topics: java.util.List<string>, users: java.util.List<string>, targets: java.util.List<string>, data: any, action: string, image: string, icon: string, sound: string, color: string, $completion: any): any;
        public createPush(messageId: string, title: string, body: string, topics: java.util.List<string>, users: java.util.List<string>, targets: java.util.List<string>, data: any, action: string, image: string, icon: string, sound: string, color: string, tag: string, badge: java.lang.Long, draft: java.lang.Boolean, $completion: any): any;
        public createPush(messageId: string, title: string, body: string, topics: java.util.List<string>, users: java.util.List<string>, targets: java.util.List<string>, data: any, action: string, image: string, icon: string, sound: string, color: string, tag: string, $completion: any): any;
        public updateApnsProvider(providerId: string, name: string, enabled: java.lang.Boolean, authKey: string, authKeyId: string, teamId: string, bundleId: string, $completion: any): any;
        public listProviders(apiParams: java.util.List<string>, apiHeaders: string, converter: any): any;
        public updateApnsProvider(providerId: string, name: string, enabled: java.lang.Boolean, $completion: any): any;
        public updateApnsProvider(providerId: string, name: string, enabled: java.lang.Boolean, authKey: string, authKeyId: string, teamId: string, $completion: any): any;
        public updateEmail(messageId: string, topics: java.util.List<string>, users: java.util.List<string>, targets: java.util.List<string>, subject: string, content: string, draft: java.lang.Boolean, html: java.lang.Boolean, cc: java.util.List<string>, $completion: any): any;
        public updateSmtpProvider(providerId: string, $completion: any): any;
        public updatePush(messageId: string, topics: java.util.List<string>, users: java.util.List<string>, targets: java.util.List<string>, title: string, body: string, data: any, action: string, image: string, icon: string, sound: string, color: string, $completion: any): any;
        public createMsg91Provider(apiParams: string, apiHeaders: string, converter: string, this_: string, providerId: string, name: java.lang.Boolean, templateId: any): any;
        public updateTextmagicProvider(apiParams: string, apiHeaders: string, converter: java.lang.Boolean, this_: string, providerId: string, name: string, enabled: any): any;
        public createTelesignProvider(providerId: string, name: string, from: string, customerId: string, apiKey: string, $completion: any): any;
        public createApnsProvider(providerId: string, name: string, authKey: string, authKeyId: string, teamId: string, bundleId: string, sandbox: java.lang.Boolean, $completion: any): any;
        public updateMailgunProvider(providerId: string, $completion: any): any;
        public createTwilioProvider(providerId: string, name: string, from: string, accountSid: string, $completion: any): any;
        public updatePush(messageId: string, topics: java.util.List<string>, users: java.util.List<string>, targets: java.util.List<string>, title: string, body: string, data: any, action: string, $completion: any): any;
        public listMessages(apiParams: java.util.List<string>, apiHeaders: string, converter: any): any;
        public updateSendgridProvider(providerId: string, name: string, enabled: java.lang.Boolean, apiKey: string, fromName: string, fromEmail: string, replyToName: string, $completion: any): any;
        public updateApnsProvider(apiParams: string, apiHeaders: string, converter: java.lang.Boolean, this_: string, providerId: string, name: string, enabled: string, authKey: java.lang.Boolean, authKeyId: any): any;
        public createApnsProvider(providerId: string, name: string, authKey: string, authKeyId: string, $completion: any): any;
        public createSendgridProvider(providerId: string, name: string, $completion: any): any;
        public updateMsg91Provider(apiParams: string, apiHeaders: string, converter: java.lang.Boolean, this_: string, providerId: string, name: string, enabled: any): any;
        public updateSmtpProvider(providerId: string, name: string, host: string, port: java.lang.Long, username: string, password: string, encryption: io.appwrite.enums.SmtpEncryption, autoTLS: java.lang.Boolean, mailer: string, fromName: string, $completion: any): any;
        public updateTextmagicProvider(providerId: string, name: string, enabled: java.lang.Boolean, $completion: any): any;
        public createPush(messageId: string, title: string, body: string, topics: java.util.List<string>, users: java.util.List<string>, targets: java.util.List<string>, data: any, action: string, image: string, icon: string, sound: string, color: string, tag: string, badge: java.lang.Long, $completion: any): any;
        public updatePush(messageId: string, topics: java.util.List<string>, users: java.util.List<string>, targets: java.util.List<string>, title: string, body: string, data: any, action: string, image: string, icon: string, sound: string, color: string, tag: string, $completion: any): any;
        public updateMailgunProvider(providerId: string, name: string, apiKey: string, domain: string, isEuRegion: java.lang.Boolean, enabled: java.lang.Boolean, $completion: any): any;
        public updateTwilioProvider(providerId: string, name: string, $completion: any): any;
        public deleteSubscriber(apiParams: string, apiHeaders: string, this_: any): any;
        public createPush(messageId: string, title: string, body: string, topics: java.util.List<string>, users: java.util.List<string>, targets: java.util.List<string>, data: any, $completion: any): any;
        public createMailgunProvider(providerId: string, name: string, apiKey: string, domain: string, isEuRegion: java.lang.Boolean, fromName: string, $completion: any): any;
        public createFcmProvider(apiParams: string, apiHeaders: string, converter: any, this_: java.lang.Boolean, providerId: any): any;
        public createTwilioProvider(providerId: string, name: string, from: string, accountSid: string, authToken: string, $completion: any): any;
        public createPush(messageId: string, title: string, body: string, $completion: any): any;
        public updateEmail(messageId: string, $completion: any): any;
        public createTextmagicProvider(providerId: string, name: string, from: string, $completion: any): any;
        public updateSms(apiParams: string, apiHeaders: java.util.List<string>, converter: java.util.List<string>, this_: java.util.List<string>, messageId: string, topics: java.lang.Boolean, users: string, targets: any): any;
        public createSendgridProvider(apiParams: string, apiHeaders: string, converter: string, this_: string, providerId: string, name: string, apiKey: string, fromName: java.lang.Boolean, fromEmail: any): any;
        public createPush(messageId: string, title: string, body: string, topics: java.util.List<string>, users: java.util.List<string>, targets: java.util.List<string>, data: any, action: string, image: string, icon: string, sound: string, color: string, tag: string, badge: java.lang.Long, draft: java.lang.Boolean, scheduledAt: string, contentAvailable: java.lang.Boolean, critical: java.lang.Boolean, $completion: any): any;
        public updateSendgridProvider(providerId: string, name: string, $completion: any): any;
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module services {
      export abstract class Service {
        public static class: java.lang.Class<io.appwrite.services.Service>;
        public constructor(client: io.appwrite.Client);
        public getClient(): io.appwrite.Client;
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module services {
      export class Sites extends io.appwrite.services.Service {
        public static class: java.lang.Class<io.appwrite.services.Sites>;
        public updateVariable(siteId: string, variableId: string, key: string, value: string, $completion: any): any;
        public update(siteId: string, name: string, framework: io.appwrite.enums.Framework, enabled: java.lang.Boolean, logging: java.lang.Boolean, timeout: java.lang.Long, installCommand: string, buildCommand: string, outputDirectory: string, buildRuntime: io.appwrite.enums.BuildRuntime, adapter: io.appwrite.enums.Adapter, fallbackFile: string, installationId: string, providerRepositoryId: string, providerBranch: string, providerSilentMode: java.lang.Boolean, $completion: any): any;
        public update(siteId: string, name: string, framework: io.appwrite.enums.Framework, enabled: java.lang.Boolean, logging: java.lang.Boolean, timeout: java.lang.Long, installCommand: string, buildCommand: string, outputDirectory: string, buildRuntime: io.appwrite.enums.BuildRuntime, adapter: io.appwrite.enums.Adapter, fallbackFile: string, installationId: string, providerRepositoryId: string, providerBranch: string, providerSilentMode: java.lang.Boolean, providerRootDirectory: string, $completion: any): any;
        public update(siteId: string, name: string, framework: io.appwrite.enums.Framework, enabled: java.lang.Boolean, logging: java.lang.Boolean, timeout: java.lang.Long, installCommand: string, buildCommand: string, outputDirectory: string, buildRuntime: io.appwrite.enums.BuildRuntime, adapter: io.appwrite.enums.Adapter, fallbackFile: string, $completion: any): any;
        public createDuplicateDeployment(apiParams: string, apiHeaders: string, converter: any): any;
        public delete(apiParams: string, apiHeaders: any): any;
        public createDeployment(apiParams: string, apiHeaders: io.appwrite.models.InputFile, converter: boolean, idParamName: string, paramName: string, this_: string, siteId: any, code: any): any;
        public create(siteId: string, name: string, framework: io.appwrite.enums.Framework, buildRuntime: io.appwrite.enums.BuildRuntime, enabled: java.lang.Boolean, logging: java.lang.Boolean, timeout: java.lang.Long, installCommand: string, buildCommand: string, outputDirectory: string, adapter: io.appwrite.enums.Adapter, installationId: string, fallbackFile: string, providerRepositoryId: string, providerBranch: string, providerSilentMode: java.lang.Boolean, providerRootDirectory: string, $completion: any): any;
        public createVariable(apiParams: string, apiHeaders: string, converter: string, this_: java.lang.Boolean, siteId: any): any;
        public create(siteId: string, name: string, framework: io.appwrite.enums.Framework, buildRuntime: io.appwrite.enums.BuildRuntime, enabled: java.lang.Boolean, logging: java.lang.Boolean, timeout: java.lang.Long, installCommand: string, $completion: any): any;
        public list($completion: any): any;
        public createDeployment(siteId: string, code: io.appwrite.models.InputFile, activate: boolean, installCommand: string, buildCommand: string, $completion: any): any;
        public getDeployment(apiParams: string, apiHeaders: string, converter: any): any;
        public updateVariable(apiParams: string, apiHeaders: string, converter: string, this_: string, siteId: java.lang.Boolean, variableId: any): any;
        public createDeployment(siteId: string, code: io.appwrite.models.InputFile, activate: boolean, installCommand: string, buildCommand: string, outputDirectory: string, $completion: any): any;
        public listLogs(siteId: string, $completion: any): any;
        public createVariable(siteId: string, key: string, value: string, $completion: any): any;
        public constructor(client: io.appwrite.Client);
        public create(siteId: string, name: string, framework: io.appwrite.enums.Framework, buildRuntime: io.appwrite.enums.BuildRuntime, enabled: java.lang.Boolean, logging: java.lang.Boolean, timeout: java.lang.Long, installCommand: string, buildCommand: string, outputDirectory: string, adapter: io.appwrite.enums.Adapter, installationId: string, $completion: any): any;
        public listVariables(apiParams: string, apiHeaders: any): any;
        public create(siteId: string, name: string, framework: io.appwrite.enums.Framework, buildRuntime: io.appwrite.enums.BuildRuntime, enabled: java.lang.Boolean, logging: java.lang.Boolean, timeout: java.lang.Long, installCommand: string, buildCommand: string, outputDirectory: string, adapter: io.appwrite.enums.Adapter, installationId: string, fallbackFile: string, providerRepositoryId: string, $completion: any): any;
        public createDeployment(siteId: string, code: io.appwrite.models.InputFile, activate: boolean, installCommand: string, $completion: any): any;
        public update(apiParams: string, apiHeaders: string, converter: io.appwrite.enums.Framework, this_: java.lang.Boolean, siteId: java.lang.Boolean, name: java.lang.Long, framework: string, enabled: string, logging: string, timeout: io.appwrite.enums.BuildRuntime, installCommand: io.appwrite.enums.Adapter, buildCommand: string, outputDirectory: string, buildRuntime: string, adapter: string, fallbackFile: java.lang.Boolean, installationId: string, providerRepositoryId: string, providerBranch: any): any;
        public update(siteId: string, name: string, framework: io.appwrite.enums.Framework, enabled: java.lang.Boolean, logging: java.lang.Boolean, timeout: java.lang.Long, installCommand: string, buildCommand: string, $completion: any): any;
        public create(siteId: string, name: string, framework: io.appwrite.enums.Framework, buildRuntime: io.appwrite.enums.BuildRuntime, enabled: java.lang.Boolean, logging: java.lang.Boolean, timeout: java.lang.Long, installCommand: string, buildCommand: string, outputDirectory: string, adapter: io.appwrite.enums.Adapter, installationId: string, fallbackFile: string, providerRepositoryId: string, providerBranch: string, $completion: any): any;
        public get(apiParams: string, apiHeaders: any): any;
        public create(siteId: string, name: string, framework: io.appwrite.enums.Framework, buildRuntime: io.appwrite.enums.BuildRuntime, $completion: any): any;
        public listDeployments(siteId: string, $completion: any): any;
        public updateDeploymentStatus(apiParams: string, apiHeaders: string, converter: any): any;
        public update(siteId: string, name: string, framework: io.appwrite.enums.Framework, enabled: java.lang.Boolean, logging: java.lang.Boolean, timeout: java.lang.Long, installCommand: string, $completion: any): any;
        public create(siteId: string, name: string, framework: io.appwrite.enums.Framework, buildRuntime: io.appwrite.enums.BuildRuntime, enabled: java.lang.Boolean, logging: java.lang.Boolean, timeout: java.lang.Long, $completion: any): any;
        public updateVariable(siteId: string, variableId: string, key: string, $completion: any): any;
        public listDeployments(siteId: string, queries: java.util.List<string>, $completion: any): any;
        public create(siteId: string, name: string, framework: io.appwrite.enums.Framework, buildRuntime: io.appwrite.enums.BuildRuntime, enabled: java.lang.Boolean, logging: java.lang.Boolean, $completion: any): any;
        public updateSiteDeployment(apiParams: string, apiHeaders: string, converter: any): any;
        public deleteLog(apiParams: string, apiHeaders: string, this_: any): any;
        public create(siteId: string, name: string, framework: io.appwrite.enums.Framework, buildRuntime: io.appwrite.enums.BuildRuntime, enabled: java.lang.Boolean, logging: java.lang.Boolean, timeout: java.lang.Long, installCommand: string, buildCommand: string, outputDirectory: string, adapter: io.appwrite.enums.Adapter, $completion: any): any;
        public deleteVariable(apiParams: string, apiHeaders: string, this_: any): any;
        public list(apiParams: java.util.List<string>, apiHeaders: string, converter: any): any;
        public listDeployments(apiParams: string, apiHeaders: java.util.List<string>, converter: string, this_: any): any;
        public update(siteId: string, name: string, framework: io.appwrite.enums.Framework, enabled: java.lang.Boolean, logging: java.lang.Boolean, timeout: java.lang.Long, installCommand: string, buildCommand: string, outputDirectory: string, buildRuntime: io.appwrite.enums.BuildRuntime, $completion: any): any;
        public update(siteId: string, name: string, framework: io.appwrite.enums.Framework, enabled: java.lang.Boolean, logging: java.lang.Boolean, timeout: java.lang.Long, installCommand: string, buildCommand: string, outputDirectory: string, buildRuntime: io.appwrite.enums.BuildRuntime, adapter: io.appwrite.enums.Adapter, fallbackFile: string, installationId: string, $completion: any): any;
        public getDeploymentDownload(apiParams: string, apiHeaders: string, this_: io.appwrite.enums.DeploymentDownloadType, siteId: any): any;
        public deleteDeployment(apiParams: string, apiHeaders: string, this_: any): any;
        public getDeploymentDownload(siteId: string, deploymentId: string, $completion: any): any;
        public getLog(apiParams: string, apiHeaders: string, converter: any): any;
        public update(siteId: string, name: string, framework: io.appwrite.enums.Framework, enabled: java.lang.Boolean, logging: java.lang.Boolean, timeout: java.lang.Long, installCommand: string, buildCommand: string, outputDirectory: string, buildRuntime: io.appwrite.enums.BuildRuntime, adapter: io.appwrite.enums.Adapter, fallbackFile: string, installationId: string, providerRepositoryId: string, $completion: any): any;
        public create(siteId: string, name: string, framework: io.appwrite.enums.Framework, buildRuntime: io.appwrite.enums.BuildRuntime, enabled: java.lang.Boolean, logging: java.lang.Boolean, timeout: java.lang.Long, installCommand: string, buildCommand: string, outputDirectory: string, adapter: io.appwrite.enums.Adapter, installationId: string, fallbackFile: string, providerRepositoryId: string, providerBranch: string, providerSilentMode: java.lang.Boolean, $completion: any): any;
        public update(siteId: string, name: string, framework: io.appwrite.enums.Framework, $completion: any): any;
        public listFrameworks(apiParams: any): any;
        public update(siteId: string, name: string, framework: io.appwrite.enums.Framework, enabled: java.lang.Boolean, logging: java.lang.Boolean, timeout: java.lang.Long, $completion: any): any;
        public createTemplateDeployment(apiParams: string, apiHeaders: string, converter: string, this_: string, siteId: string, repository: java.lang.Boolean, owner: any): any;
        public createVcsDeployment(siteId: string, type: io.appwrite.enums.VCSDeploymentType, reference: string, $completion: any): any;
        public createVcsDeployment(apiParams: string, apiHeaders: io.appwrite.enums.VCSDeploymentType, converter: string, this_: java.lang.Boolean, siteId: any): any;
        public create(siteId: string, name: string, framework: io.appwrite.enums.Framework, buildRuntime: io.appwrite.enums.BuildRuntime, enabled: java.lang.Boolean, logging: java.lang.Boolean, timeout: java.lang.Long, installCommand: string, buildCommand: string, outputDirectory: string, adapter: io.appwrite.enums.Adapter, installationId: string, fallbackFile: string, $completion: any): any;
        public createDeployment(siteId: string, code: io.appwrite.models.InputFile, activate: boolean, $completion: any): any;
        public list(queries: java.util.List<string>, $completion: any): any;
        public update(siteId: string, name: string, framework: io.appwrite.enums.Framework, enabled: java.lang.Boolean, logging: java.lang.Boolean, timeout: java.lang.Long, installCommand: string, buildCommand: string, outputDirectory: string, buildRuntime: io.appwrite.enums.BuildRuntime, adapter: io.appwrite.enums.Adapter, fallbackFile: string, installationId: string, providerRepositoryId: string, providerBranch: string, $completion: any): any;
        public create(apiParams: string, apiHeaders: string, converter: io.appwrite.enums.Framework, this_: io.appwrite.enums.BuildRuntime, siteId: java.lang.Boolean, name: java.lang.Boolean, framework: java.lang.Long, buildRuntime: string, enabled: string, logging: string, timeout: io.appwrite.enums.Adapter, installCommand: string, buildCommand: string, outputDirectory: string, adapter: string, installationId: java.lang.Boolean, fallbackFile: string, providerRepositoryId: string, providerBranch: any): any;
        public update(siteId: string, name: string, framework: io.appwrite.enums.Framework, enabled: java.lang.Boolean, $completion: any): any;
        public listSpecifications(apiParams: any): any;
        public update(siteId: string, name: string, framework: io.appwrite.enums.Framework, enabled: java.lang.Boolean, logging: java.lang.Boolean, $completion: any): any;
        public create(siteId: string, name: string, framework: io.appwrite.enums.Framework, buildRuntime: io.appwrite.enums.BuildRuntime, enabled: java.lang.Boolean, $completion: any): any;
        public create(siteId: string, name: string, framework: io.appwrite.enums.Framework, buildRuntime: io.appwrite.enums.BuildRuntime, enabled: java.lang.Boolean, logging: java.lang.Boolean, timeout: java.lang.Long, installCommand: string, buildCommand: string, $completion: any): any;
        public getVariable(apiParams: string, apiHeaders: string, converter: any): any;
        public createTemplateDeployment(siteId: string, repository: string, owner: string, rootDirectory: string, version: string, $completion: any): any;
        public create(siteId: string, name: string, framework: io.appwrite.enums.Framework, buildRuntime: io.appwrite.enums.BuildRuntime, enabled: java.lang.Boolean, logging: java.lang.Boolean, timeout: java.lang.Long, installCommand: string, buildCommand: string, outputDirectory: string, $completion: any): any;
        public listLogs(apiParams: string, apiHeaders: java.util.List<string>, converter: any): any;
        public update(siteId: string, name: string, framework: io.appwrite.enums.Framework, enabled: java.lang.Boolean, logging: java.lang.Boolean, timeout: java.lang.Long, installCommand: string, buildCommand: string, outputDirectory: string, $completion: any): any;
        public update(siteId: string, name: string, framework: io.appwrite.enums.Framework, enabled: java.lang.Boolean, logging: java.lang.Boolean, timeout: java.lang.Long, installCommand: string, buildCommand: string, outputDirectory: string, buildRuntime: io.appwrite.enums.BuildRuntime, adapter: io.appwrite.enums.Adapter, $completion: any): any;
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module services {
      export class Storage extends io.appwrite.services.Service {
        public static class: java.lang.Class<io.appwrite.services.Storage>;
        public getFilePreview(bucketId: string, fileId: string, width: java.lang.Long, height: java.lang.Long, gravity: io.appwrite.enums.ImageGravity, quality: java.lang.Long, borderWidth: java.lang.Long, $completion: any): any;
        public deleteFile(apiParams: string, apiHeaders: string, this_: any): any;
        public getFileView(bucketId: string, fileId: string, $completion: any): any;
        public updateBucket(bucketId: string, name: string, permissions: java.util.List<string>, fileSecurity: java.lang.Boolean, enabled: java.lang.Boolean, maximumFileSize: java.lang.Long, $completion: any): any;
        public getFilePreview(bucketId: string, fileId: string, width: java.lang.Long, height: java.lang.Long, gravity: io.appwrite.enums.ImageGravity, quality: java.lang.Long, borderWidth: java.lang.Long, borderColor: string, borderRadius: java.lang.Long, opacity: java.lang.Double, $completion: any): any;
        public updateBucket(bucketId: string, name: string, permissions: java.util.List<string>, fileSecurity: java.lang.Boolean, enabled: java.lang.Boolean, $completion: any): any;
        public getFile(apiParams: string, apiHeaders: string, converter: any): any;
        public createFile(bucketId: string, fileId: string, file: io.appwrite.models.InputFile, $completion: any): any;
        public getFilePreview(bucketId: string, fileId: string, width: java.lang.Long, height: java.lang.Long, $completion: any): any;
        public getFilePreview(bucketId: string, fileId: string, width: java.lang.Long, height: java.lang.Long, gravity: io.appwrite.enums.ImageGravity, quality: java.lang.Long, borderWidth: java.lang.Long, borderColor: string, $completion: any): any;
        public updateBucket(bucketId: string, name: string, permissions: java.util.List<string>, fileSecurity: java.lang.Boolean, $completion: any): any;
        public getFilePreview(bucketId: string, fileId: string, width: java.lang.Long, height: java.lang.Long, gravity: io.appwrite.enums.ImageGravity, quality: java.lang.Long, borderWidth: java.lang.Long, borderColor: string, borderRadius: java.lang.Long, $completion: any): any;
        public getBucket(apiParams: string, apiHeaders: any): any;
        public updateBucket(apiParams: string, apiHeaders: string, converter: java.util.List<string>, this_: java.lang.Boolean, bucketId: java.lang.Boolean, name: java.lang.Long, permissions: java.util.List<string>, fileSecurity: io.appwrite.enums.Compression, enabled: java.lang.Boolean, maximumFileSize: java.lang.Boolean, allowedFileExtensions: any): any;
        public updateBucket(bucketId: string, name: string, permissions: java.util.List<string>, fileSecurity: java.lang.Boolean, enabled: java.lang.Boolean, maximumFileSize: java.lang.Long, allowedFileExtensions: java.util.List<string>, $completion: any): any;
        public constructor(client: io.appwrite.Client);
        public listBuckets(apiParams: java.util.List<string>, apiHeaders: string, converter: any): any;
        public updateFile(bucketId: string, fileId: string, $completion: any): any;
        public updateFile(apiParams: string, apiHeaders: string, converter: string, this_: java.util.List<string>, bucketId: any): any;
        public createBucket(bucketId: string, name: string, permissions: java.util.List<string>, $completion: any): any;
        public getFileDownload(apiParams: string, apiHeaders: string, this_: string, bucketId: any): any;
        public deleteBucket(apiParams: string, apiHeaders: any): any;
        public createBucket(bucketId: string, name: string, permissions: java.util.List<string>, fileSecurity: java.lang.Boolean, enabled: java.lang.Boolean, maximumFileSize: java.lang.Long, allowedFileExtensions: java.util.List<string>, $completion: any): any;
        public updateBucket(bucketId: string, name: string, permissions: java.util.List<string>, fileSecurity: java.lang.Boolean, enabled: java.lang.Boolean, maximumFileSize: java.lang.Long, allowedFileExtensions: java.util.List<string>, compression: io.appwrite.enums.Compression, $completion: any): any;
        public createBucket(bucketId: string, name: string, $completion: any): any;
        public getFilePreview(bucketId: string, fileId: string, width: java.lang.Long, height: java.lang.Long, gravity: io.appwrite.enums.ImageGravity, quality: java.lang.Long, borderWidth: java.lang.Long, borderColor: string, borderRadius: java.lang.Long, opacity: java.lang.Double, rotation: java.lang.Long, background: string, output: io.appwrite.enums.ImageFormat, $completion: any): any;
        public listFiles(apiParams: string, apiHeaders: java.util.List<string>, converter: string, this_: any): any;
        public createBucket(bucketId: string, name: string, permissions: java.util.List<string>, fileSecurity: java.lang.Boolean, enabled: java.lang.Boolean, maximumFileSize: java.lang.Long, $completion: any): any;
        public listBuckets(queries: java.util.List<string>, $completion: any): any;
        public createFile(bucketId: string, fileId: string, file: io.appwrite.models.InputFile, permissions: java.util.List<string>, $completion: any): any;
        public createFile(apiParams: string, apiHeaders: string, converter: io.appwrite.models.InputFile, idParamName: java.util.List<string>, paramName: any, this_: any): any;
        public createBucket(apiParams: string, apiHeaders: string, converter: java.util.List<string>, this_: java.lang.Boolean, bucketId: java.lang.Boolean, name: java.lang.Long, permissions: java.util.List<string>, fileSecurity: io.appwrite.enums.Compression, enabled: java.lang.Boolean, maximumFileSize: java.lang.Boolean, allowedFileExtensions: any): any;
        public getFilePreview(bucketId: string, fileId: string, $completion: any): any;
        public getFilePreview(bucketId: string, fileId: string, width: java.lang.Long, height: java.lang.Long, gravity: io.appwrite.enums.ImageGravity, quality: java.lang.Long, borderWidth: java.lang.Long, borderColor: string, borderRadius: java.lang.Long, opacity: java.lang.Double, rotation: java.lang.Long, $completion: any): any;
        public getFileDownload(bucketId: string, fileId: string, $completion: any): any;
        public createBucket(bucketId: string, name: string, permissions: java.util.List<string>, fileSecurity: java.lang.Boolean, enabled: java.lang.Boolean, maximumFileSize: java.lang.Long, allowedFileExtensions: java.util.List<string>, compression: io.appwrite.enums.Compression, $completion: any): any;
        public updateBucket(bucketId: string, name: string, permissions: java.util.List<string>, $completion: any): any;
        public listFiles(bucketId: string, queries: java.util.List<string>, $completion: any): any;
        public getFilePreview(bucketId: string, fileId: string, width: java.lang.Long, height: java.lang.Long, gravity: io.appwrite.enums.ImageGravity, $completion: any): any;
        public createBucket(bucketId: string, name: string, permissions: java.util.List<string>, fileSecurity: java.lang.Boolean, $completion: any): any;
        public getFilePreview(apiParams: string, apiHeaders: string, this_: java.lang.Long, bucketId: java.lang.Long, fileId: io.appwrite.enums.ImageGravity, width: java.lang.Long, height: java.lang.Long, gravity: string, quality: java.lang.Long, borderWidth: java.lang.Double, borderColor: java.lang.Long, borderRadius: string, opacity: io.appwrite.enums.ImageFormat, rotation: string, background: any): any;
        public getFileView(apiParams: string, apiHeaders: string, this_: string, bucketId: any): any;
        public getFilePreview(bucketId: string, fileId: string, width: java.lang.Long, height: java.lang.Long, gravity: io.appwrite.enums.ImageGravity, quality: java.lang.Long, borderWidth: java.lang.Long, borderColor: string, borderRadius: java.lang.Long, opacity: java.lang.Double, rotation: java.lang.Long, background: string, $completion: any): any;
        public updateFile(bucketId: string, fileId: string, name: string, $completion: any): any;
        public listBuckets($completion: any): any;
        public createBucket(bucketId: string, name: string, permissions: java.util.List<string>, fileSecurity: java.lang.Boolean, enabled: java.lang.Boolean, $completion: any): any;
        public createBucket(bucketId: string, name: string, permissions: java.util.List<string>, fileSecurity: java.lang.Boolean, enabled: java.lang.Boolean, maximumFileSize: java.lang.Long, allowedFileExtensions: java.util.List<string>, compression: io.appwrite.enums.Compression, encryption: java.lang.Boolean, $completion: any): any;
        public listFiles(bucketId: string, $completion: any): any;
        public getFilePreview(bucketId: string, fileId: string, width: java.lang.Long, height: java.lang.Long, gravity: io.appwrite.enums.ImageGravity, quality: java.lang.Long, $completion: any): any;
        public updateBucket(bucketId: string, name: string, permissions: java.util.List<string>, fileSecurity: java.lang.Boolean, enabled: java.lang.Boolean, maximumFileSize: java.lang.Long, allowedFileExtensions: java.util.List<string>, compression: io.appwrite.enums.Compression, encryption: java.lang.Boolean, $completion: any): any;
        public updateBucket(bucketId: string, name: string, $completion: any): any;
        public getFilePreview(bucketId: string, fileId: string, width: java.lang.Long, $completion: any): any;
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module services {
      export class Teams extends io.appwrite.services.Service {
        public static class: java.lang.Class<io.appwrite.services.Teams>;
        public get(this_: string, teamId: any): any;
        public getMembership(apiParams: string, apiHeaders: string, converter: any): any;
        public delete(apiParams: string, apiHeaders: any): any;
        public listMemberships(apiParams: string, apiHeaders: java.util.List<string>, converter: string, this_: any): any;
        public createMembership(apiParams: string, apiHeaders: java.util.List<string>, converter: string, this_: string, teamId: string, roles: string, email: string, userId: any): any;
        public updatePrefs(this_: string, teamId: any, prefs: any): any;
        public list(nestedType: java.lang.Class<any>, $completion: any): any;
        public createMembership(teamId: string, roles: java.util.List<string>, email: string, userId: string, phone: string, url: string, $completion: any): any;
        public get(apiPath: string, apiParams: java.lang.Class<any>, apiHeaders: any): any;
        public updateMembership(apiParams: string, apiHeaders: string, converter: java.util.List<string>, this_: any): any;
        public updateName(apiPath: string, apiParams: string, apiHeaders: java.lang.Class<any>, converter: any): any;
        public list(queries: java.util.List<any>, nestedType: java.lang.Class<any>, $completion: any): any;
        public list($completion: any): any;
        public create(this_: string, teamId: string, name: java.util.List<string>, roles: any): any;
        public deleteMembership(apiParams: string, apiHeaders: string, this_: any): any;
        public getPrefs(this_: string, teamId: any): any;
        public constructor(client: io.appwrite.Client);
        public updatePrefs(apiPath: string, apiParams: any, apiHeaders: java.lang.Class<any>, converter: any): any;
        public createMembership(teamId: string, roles: java.util.List<string>, email: string, $completion: any): any;
        public create(teamId: string, name: string, $completion: any): any;
        public list(queries: java.util.List<string>, $completion: any): any;
        public listMemberships(teamId: string, $completion: any): any;
        public list(this_: java.util.List<string>, queries: string, search: any): any;
        public createMembership(teamId: string, roles: java.util.List<string>, $completion: any): any;
        public createMembership(teamId: string, roles: java.util.List<string>, email: string, userId: string, phone: string, $completion: any): any;
        public getPrefs(apiPath: string, apiParams: java.lang.Class<any>, apiHeaders: any): any;
        public create(apiPath: string, apiParams: string, apiHeaders: java.util.List<any>, converter: java.lang.Class<any>, this_: any): any;
        public listMemberships(teamId: string, queries: java.util.List<string>, $completion: any): any;
        public create(teamId: string, name: string, nestedType: java.lang.Class<any>, $completion: any): any;
        public updateMembershipStatus(apiParams: string, apiHeaders: string, converter: string, this_: string, teamId: any): any;
        public list(apiPath: java.util.List<any>, apiParams: string, apiHeaders: java.lang.Class<any>, converter: any): any;
        public updateName(this_: string, teamId: string, name: any): any;
        public createMembership(teamId: string, roles: java.util.List<string>, email: string, userId: string, $completion: any): any;
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module services {
      export class Tokens extends io.appwrite.services.Service {
        public static class: java.lang.Class<io.appwrite.services.Tokens>;
        public constructor(client: io.appwrite.Client);
        public createFileToken(bucketId: string, fileId: string, $completion: any): any;
        public get(apiParams: string, apiHeaders: any): any;
        public update(apiParams: string, apiHeaders: string, converter: any): any;
        public list(bucketId: string, fileId: string, $completion: any): any;
        public delete(apiParams: string, apiHeaders: any): any;
        public list(apiParams: string, apiHeaders: string, converter: java.util.List<string>, this_: any): any;
        public createFileToken(apiParams: string, apiHeaders: string, converter: string, this_: any): any;
        public update(tokenId: string, $completion: any): any;
      }
    }
  }
}

declare module io {
  export module appwrite {
    export module services {
      export class Users extends io.appwrite.services.Service {
        public static class: java.lang.Class<io.appwrite.services.Users>;
        public createBcryptUser(this_: string, userId: string, email: string, password: string, name: any): any;
        public createPHPassUser(apiPath: string, apiParams: string, apiHeaders: string, converter: string, this_: java.lang.Class<any>, userId: any): any;
        public listTargets(apiParams: string, apiHeaders: java.util.List<string>, converter: any): any;
        public listMemberships(apiParams: string, apiHeaders: java.util.List<string>, converter: string, this_: any): any;
        public createToken(userId: string, $completion: any): any;
        public createSession(apiParams: string, apiHeaders: any): any;
        public list(nestedType: java.lang.Class<any>, $completion: any): any;
        public get(apiPath: string, apiParams: java.lang.Class<any>, apiHeaders: any): any;
        public updateTarget(apiParams: string, apiHeaders: string, converter: string, this_: string, userId: string, targetId: any): any;
        public createSHAUser(this_: string, userId: string, email: string, password: io.appwrite.enums.PasswordHash, passwordVersion: string, name: any): any;
        public createBcryptUser(apiPath: string, apiParams: string, apiHeaders: string, converter: string, this_: java.lang.Class<any>, userId: any): any;
        public updateEmail(apiPath: string, apiParams: string, apiHeaders: java.lang.Class<any>, converter: any): any;
        public listIdentities(apiParams: java.util.List<string>, apiHeaders: string, converter: any): any;
        public constructor(client: io.appwrite.Client);
        public createMD5User(userId: string, email: string, password: string, $completion: any): any;
        public createPHPassUser(userId: string, email: string, password: string, $completion: any): any;
        public createScryptModifiedUser(userId: string, email: string, password: string, passwordSalt: string, passwordSaltSeparator: string, passwordSignerKey: string, nestedType: java.lang.Class<any>, $completion: any): any;
        public createMD5User(this_: string, userId: string, email: string, password: string, name: any): any;
        public deleteSession(apiParams: string, apiHeaders: string, this_: any): any;
        public listIdentities(queries: java.util.List<string>, $completion: any): any;
        public get(this_: string, userId: any): any;
        public getMfaRecoveryCodes(apiParams: string, apiHeaders: any): any;
        public updatePassword(this_: string, userId: string, password: any): any;
        public updateStatus(apiPath: string, apiParams: boolean, apiHeaders: java.lang.Class<any>, converter: any): any;
        public listLogs(userId: string, $completion: any): any;
        public updateTarget(userId: string, targetId: string, identifier: string, $completion: any): any;
        public createScryptUser(this_: string, userId: string, email: string, password: string, passwordSalt: number, passwordCpu: number, passwordMemory: number, passwordParallel: number, passwordLength: string, name: any): any;
        public createSHAUser(userId: string, email: string, password: string, passwordVersion: io.appwrite.enums.PasswordHash, nestedType: java.lang.Class<any>, $completion: any): any;
        public createSHAUser(userId: string, email: string, password: string, passwordVersion: io.appwrite.enums.PasswordHash, $completion: any): any;
        public createScryptModifiedUser(apiPath: string, apiParams: string, apiHeaders: string, converter: string, this_: string, userId: string, email: string, password: java.lang.Class<any>, passwordSalt: any): any;
        public create(this_: string, userId: string, email: string, phone: string, password: string, name: any): any;
        public updateEmail(this_: string, userId: string, email: any): any;
        public listSessions(apiParams: string, apiHeaders: any): any;
        public updateMfaRecoveryCodes(apiParams: string, apiHeaders: any): any;
        public createTarget(apiParams: string, apiHeaders: string, converter: io.appwrite.enums.MessagingProviderType, this_: string, userId: string, targetId: string, providerType: any): any;
        public updateEmailVerification(this_: string, userId: boolean, emailVerification: any): any;
        public updateName(apiPath: string, apiParams: string, apiHeaders: java.lang.Class<any>, converter: any): any;
        public create(apiPath: string, apiParams: string, apiHeaders: string, converter: string, this_: string, userId: java.lang.Class<any>, email: any): any;
        public deleteSessions(apiParams: string, apiHeaders: any): any;
        public createSHAUser(apiPath: string, apiParams: string, apiHeaders: string, converter: io.appwrite.enums.PasswordHash, this_: string, userId: java.lang.Class<any>, email: any): any;
        public updateStatus(this_: string, userId: boolean, status: any): any;
        public create(userId: string, email: string, phone: string, password: string, $completion: any): any;
        public getTarget(apiParams: string, apiHeaders: string, converter: any): any;
        public getPrefs(apiPath: string, apiParams: java.lang.Class<any>, apiHeaders: any): any;
        public create(userId: string, email: string, phone: string, password: string, nestedType: java.lang.Class<any>, $completion: any): any;
        public createScryptModifiedUser(this_: string, userId: string, email: string, password: string, passwordSalt: string, passwordSaltSeparator: string, passwordSignerKey: string, name: any): any;
        public createBcryptUser(userId: string, email: string, password: string, $completion: any): any;
        public listMemberships(userId: string, $completion: any): any;
        public listMfaFactors(apiParams: string, apiHeaders: any): any;
        public createArgon2User(this_: string, userId: string, email: string, password: string, name: any): any;
        public listIdentities($completion: any): any;
        public listLogs(apiParams: string, apiHeaders: java.util.List<string>, converter: any): any;
        public create(userId: string, $completion: any): any;
        public createArgon2User(userId: string, email: string, password: string, $completion: any): any;
        public updateEmailVerification(apiPath: string, apiParams: boolean, apiHeaders: java.lang.Class<any>, converter: any): any;
        public createJWT(userId: string, $completion: any): any;
        public delete(apiParams: string, apiHeaders: any): any;
        public createArgon2User(userId: string, email: string, password: string, nestedType: java.lang.Class<any>, $completion: any): any;
        public updateName(this_: string, userId: string, name: any): any;
        public createMfaRecoveryCodes(apiParams: string, apiHeaders: any): any;
        public create(userId: string, email: string, nestedType: java.lang.Class<any>, $completion: any): any;
        public updateMfa(apiPath: string, apiParams: boolean, apiHeaders: java.lang.Class<any>, converter: any): any;
        public list($completion: any): any;
        public createArgon2User(apiPath: string, apiParams: string, apiHeaders: string, converter: string, this_: java.lang.Class<any>, userId: any): any;
        public listMemberships(userId: string, queries: java.util.List<string>, $completion: any): any;
        public createJWT(userId: string, sessionId: string, $completion: any): any;
        public updateLabels(apiPath: string, apiParams: java.util.List<any>, apiHeaders: java.lang.Class<any>, converter: any): any;
        public list(this_: java.util.List<string>, queries: string, search: any): any;
        public createTarget(userId: string, targetId: string, providerType: io.appwrite.enums.MessagingProviderType, identifier: string, $completion: any): any;
        public createScryptUser(userId: string, email: string, password: string, passwordSalt: string, passwordCpu: number, passwordMemory: number, passwordParallel: number, passwordLength: number, $completion: any): any;
        public updatePassword(apiPath: string, apiParams: string, apiHeaders: java.lang.Class<any>, converter: any): any;
        public createScryptUser(apiPath: string, apiParams: string, apiHeaders: string, converter: string, this_: number, userId: number, email: number, password: number, passwordSalt: string, passwordCpu: java.lang.Class<any>, passwordMemory: any): any;
        public create(userId: string, email: string, phone: string, nestedType: java.lang.Class<any>, $completion: any): any;
        public list(apiPath: java.util.List<any>, apiParams: string, apiHeaders: java.lang.Class<any>, converter: any): any;
        public createScryptUser(userId: string, email: string, password: string, passwordSalt: string, passwordCpu: number, passwordMemory: number, passwordParallel: number, passwordLength: number, nestedType: java.lang.Class<any>, $completion: any): any;
        public createPHPassUser(userId: string, email: string, password: string, nestedType: java.lang.Class<any>, $completion: any): any;
        public deleteTarget(apiParams: string, apiHeaders: string, this_: any): any;
        public createJWT(apiParams: string, apiHeaders: string, converter: java.lang.Long, this_: any): any;
        public createTarget(userId: string, targetId: string, providerType: io.appwrite.enums.MessagingProviderType, identifier: string, providerId: string, $completion: any): any;
        public createMD5User(apiPath: string, apiParams: string, apiHeaders: string, converter: string, this_: java.lang.Class<any>, userId: any): any;
        public createMD5User(userId: string, email: string, password: string, nestedType: java.lang.Class<any>, $completion: any): any;
        public create(userId: string, nestedType: java.lang.Class<any>, $completion: any): any;
        public updateMfa(this_: string, userId: boolean, mfa: any): any;
        public deleteIdentity(apiParams: string, apiHeaders: any): any;
        public listTargets(userId: string, $completion: any): any;
        public updateLabels(this_: string, userId: java.util.List<string>, labels: any): any;
        public deleteMfaAuthenticator(apiParams: string, apiHeaders: io.appwrite.enums.AuthenticatorType, this_: any): any;
        public list(queries: java.util.List<any>, nestedType: java.lang.Class<any>, $completion: any): any;
        public createToken(userId: string, length: java.lang.Long, $completion: any): any;
        public updatePhoneVerification(apiPath: string, apiParams: boolean, apiHeaders: java.lang.Class<any>, converter: any): any;
        public createSHAUser(userId: string, email: string, password: string, $completion: any): any;
        public updatePrefs(apiPath: string, apiParams: any, apiHeaders: java.lang.Class<any>, converter: any): any;
        public createBcryptUser(userId: string, email: string, password: string, nestedType: java.lang.Class<any>, $completion: any): any;
        public updateTarget(userId: string, targetId: string, identifier: string, providerId: string, $completion: any): any;
        public updatePrefs(this_: string, userId: any, prefs: any): any;
        public updateTarget(userId: string, targetId: string, $completion: any): any;
        public list(queries: java.util.List<string>, $completion: any): any;
        public createPHPassUser(this_: string, userId: string, email: string, password: string, name: any): any;
        public createSHAUser(userId: string, email: string, password: string, nestedType: java.lang.Class<any>, $completion: any): any;
        public updatePhone(this_: string, userId: string, number: any): any;
        public create(userId: string, email: string, phone: string, $completion: any): any;
        public updatePhone(apiPath: string, apiParams: string, apiHeaders: java.lang.Class<any>, converter: any): any;
        public getPrefs(this_: string, userId: any): any;
        public createToken(apiParams: string, apiHeaders: java.lang.Long, converter: java.lang.Long, this_: any): any;
        public create(userId: string, email: string, $completion: any): any;
        public updatePhoneVerification(this_: string, userId: boolean, phoneVerification: any): any;
        public createScryptModifiedUser(userId: string, email: string, password: string, passwordSalt: string, passwordSaltSeparator: string, passwordSignerKey: string, $completion: any): any;
      }
    }
  }
}

//Generics information:
//io.appwrite.coroutines.Callback:1
//io.appwrite.coroutines.CoroutineCallback:1
//io.appwrite.models.Document:1
//io.appwrite.models.DocumentList:1
//io.appwrite.models.Preferences:1
//io.appwrite.models.Team:1
//io.appwrite.models.TeamList:1
//io.appwrite.models.User:1
//io.appwrite.models.UserList:1
