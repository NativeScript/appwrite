//
//  NSCAppwrite.swift
//  NativeScriptAppwrite
//
//  Created by Osei Fortune on 20/05/2025.
//

import Foundation
import Appwrite
import JSONCodable


@objcMembers
@objc(NSCAppwriteStorage)
public class NSCAppwriteStorage: NSObject {
  internal var storage: Storage!
  
  init(_ client: NSCAppwriteClient) {
    self.storage = Storage(client.client)
  }
}


@objcMembers
@objc(NSCAppwriteFunctions)
public class NSCAppwriteFunctions: NSObject {
  internal var functions: Functions!
  
  init(_ client: NSCAppwriteClient) {
    self.functions = Functions(client.client)
  }
}


@objcMembers
@objc(NSCAppwriteDocument)
public class NSCAppwriteDocument: NSObject {
  internal var document: Document<[String: AnyCodable]>!
  
  public let jsonData: NSCAppwriteJSONValue!
  
  init(document: Document<[String: AnyCodable]>, jsonData: NSCAppwriteJSONValue) {
    self.document = document
    self.jsonData = jsonData
  }
  
  public var id: String {
    return document.id
  }

  public var collectionId: String {
    return document.collectionId
  }

  public var databaseId: String {
    return document.databaseId
  }

  public var createdAt: String {
    return document.createdAt
  }

  public var updatedAt: String {
    return document.updatedAt
  }

  public var permissions: [String] {
    return document.permissions
  }

  public var data: NSDictionary {
    return jsonData.value as? NSDictionary ?? [:]
  }
  
}


@objcMembers
@objc(NSCAppwriteQuery)
public class NSCAppwriteQuery: NSObject {
  public static func equal(_ attribute: String, value: Any) -> String {
    return Query.equal(attribute, value: value)
  }

  public static func notEqual(_ attribute: String, value: Any) -> String {
    return Query.notEqual(attribute, value: value)
  }

  public static func lessThan(_ attribute: String, value: Any) -> String {
    return Query.lessThan(attribute, value: value)
  }

  public static func lessThanEqual(attribute: String, value: Any) -> String {
    return Query.lessThanEqual(attribute: attribute, value: value)
  }

  public static func greaterThan(_ attribute: String, value: Any) -> String {
    return Query.greaterThan(attribute, value: value)
  }

  public static func greaterThanEqual(_ attribute: String, value: Any) -> String {
    return Query.greaterThanEqual(attribute, value: value)
  }

  public static func isNull(_ attribute: String) -> String {
    return Query.isNull(attribute)
  }

  public static func isNotNull(_ attribute: String) -> String {
    return Query.isNotNull(attribute)
  }

  public static func between(_ attribute: String, start: Int, end: Int) -> String {
    return Query.between(attribute, start: start, end: end)
  }

  public static func between(_ attribute: String, startD: Double, endD: Double) -> String {
    return Query.between(attribute, start: startD, end: endD)
  }

  public static func between(_ attribute: String, startS: String, endS: String) -> String {
    return Query.between(attribute, start: startS, end: endS)
  }

  public static func startsWith(_ attribute: String, value: String) -> String {
    return Query.startsWith(attribute, value: value)
  }

  public static func endsWith(_ attribute: String, value: String) -> String {
    return Query.endsWith(attribute, value: value)
  }

  public static func select(_ attributes: [String]) -> String {
    return Query.select(attributes)
  }

  public static func search(_ attribute: String, value: String) -> String {
    return Query.search(attribute, value: value)
  }

  public static func orderAsc(_ attribute: String) -> String {
    return Query.orderAsc(attribute)
  }

  public static func orderDesc(_ attribute: String) -> String {
    return Query.orderDesc(attribute)
  }

  public static func cursorBefore(_ id: String) -> String {
    return Query.cursorBefore(id)
  }

  public static func cursorAfter(_ id: String) -> String {
    return Query.cursorAfter(id)
  }

  public static func limit(_ limit: Int) -> String {
    return Query.limit(limit)
  }

  public static func offset(_ offset: Int) -> String {
    return Query.limit(offset)
  }

  public static func contains(_ attribute: String, value: Any) -> String {
    return Query.contains(attribute, value: value)
  }

  public static func or(_ queries: [String]) -> String {
    return Query.or(queries)
  }

  public static func and(_ queries: [String]) -> String {
    return Query.and(queries)
  }
}

@objcMembers
@objc(NSCAppwriteDatabases)
public class NSCAppwriteDatabases: NSObject {
  internal var databases: Databases!
  
  init(_ client: NSCAppwriteClient) {
    self.databases = Databases(client.client)
  }
  
  public func createDocument(_ databaseId: String, _ collectionId: String, _ documentId: String, _ data: [String: Any], _ permissions: [String]? = nil, _ callback: @escaping (NSCAppwriteDocument?, Error?) -> Void){
    Task {
      do {
        let document = try await databases.createDocument(databaseId: databaseId, collectionId: collectionId, documentId: documentId, data: data, permissions: permissions)
        let json = NSCAppwriteJSONValue(decodableObject: document.data)
        callback(NSCAppwriteDocument(document: document, jsonData: json), nil)
      }catch {
        callback(nil, error)
      }
    }
  }
  
  public func getDocument(_ databaseId: String, _ collectionId: String, _ documentId: String, _ queries: [String]? = nil, _ callback: @escaping (NSCAppwriteDocument?, Error?) -> Void){
    Task {
      
      do {
        let document = try await databases.getDocument(databaseId: databaseId, collectionId: collectionId, documentId: documentId, queries: queries)
        let json = NSCAppwriteJSONValue(decodableObject: document.data)
        callback(NSCAppwriteDocument(document: document, jsonData: json), nil)
      }catch {
        callback(nil, error)
      }
    }
  }
  
  
  public func listDocuments(_ databaseId: String, _ collectionId: String, _ queries: [String]? = nil, _ callback: @escaping ([NSCAppwriteDocument]?, Error?) -> Void){
    Task {
      
      do {
        let list = try await databases.listDocuments(databaseId: databaseId, collectionId: collectionId, queries: queries)
        callback(list.documents.map {
          let json = NSCAppwriteJSONValue(decodableObject: $0.data)
          return NSCAppwriteDocument(document: $0, jsonData: json)
        }, nil)
      }catch {
        callback(nil, error)
      }
    }
  }
  
  
  
  public func updateDocument(_ databaseId: String, _ collectionId: String, _ documentId: String, _ data: [String: AnyHashable], _ permissions: [String]? = nil, _ callback: @escaping (NSCAppwriteDocument?, Error?) -> Void){
    Task {
      do {
        let document = try await databases.updateDocument(databaseId: databaseId, collectionId: collectionId, documentId: documentId, data: data, permissions: permissions)
        let json = NSCAppwriteJSONValue(decodableObject: document.data)
        callback(NSCAppwriteDocument(document: document, jsonData: json), nil)
      }catch {
        callback(nil, error)
      }
    }
  }
  
  
  public func deleteDocument(_ databaseId: String, _ collectionId: String, _ documentId: String, _ callback: @escaping (Error?) -> Void){
    Task {
      
      do {
        let _ = try await databases.deleteDocument(databaseId: databaseId, collectionId: collectionId, documentId: documentId)
        callback(nil)
      }catch {
        callback(error)
      }
    }
  }
  
  
}


@objcMembers
@objc(NSCAppwriteClient)
public class NSCAppwriteClient: NSObject {
  
  internal var client: Client!
  
  public override init() {
    super.init()
    self.client = Client()
  }
  
  public func setEndpoint(_ value: String) -> NSCAppwriteClient {
    let _ = client.setEndpoint(value)
    return self
  }
  
  
  public func setProject(_ value: String) -> NSCAppwriteClient {
    let _ = client.setProject(value)
    return self
  }
  
  public func setKey(_ value: String) -> NSCAppwriteClient {
    let _ = client.setKey(value)
    return self
  }
  
  public func setJWT(_ value: String) -> NSCAppwriteClient {
    let _ = client.setJWT(value)
    return self
  }
  
  public func setLocale(_ value: String) -> NSCAppwriteClient {
    let _ = client.setLocale(value)
    return self
  }
  
  public func setSession(_ value: String) -> NSCAppwriteClient {
    let _ =  client.setSession(value)
    return self
  }
  
  public func setForwardedUserAgent(_ value: String) -> NSCAppwriteClient {
    let _ = client.setForwardedUserAgent(value)
    return self
  }
  
  
  public func setSelfSigned(_ status: Bool = true) -> NSCAppwriteClient {
    let _ = client.setSelfSigned(status)
    return self
  }
  
  public func addHeader(_ key: String, _ value: String) -> NSCAppwriteClient {
    let _ = client.addHeader(key: key, value: value)
    return self
  }

  public func parametersToQueryString(params: [String: Any?]) -> String {
    return client.parametersToQueryString(params: params)
  }
}


@objcMembers
@objc(NSCAppwriteID)
public class NSCAppwriteID: NSObject {
  public static func unique() -> String {
    return ID.unique()
  }
  
  public static func unique(padding: Int) -> String {
    return ID.unique(padding: padding)
  }
  
  public static func custom(_ id: String) -> String {
    return ID.custom(id)
  }
}



@objcMembers
@objc(NSCAppwriteTarget)
public class NSCAppwriteTarget: NSObject {
  internal var target: Target!
  
  init(target: Target) {
    self.target = target
  }
  
  public var id: String{
    return target.id
  }


  public var createdAt: String{
    return target.createdAt
  }


  public var updatedAt: String{
    return target.updatedAt
  }


  public var name: String{
    return target.name
  }


  public var userId: String{
    return target.userId
  }


  public var providerId: String? {
    return target.providerId
  }


  public var providerType: String {
    return target.providerType
  }


  public var identifier: String{
    return target.identifier
  }


  public var expired: Bool{
    return target.expired
  }
}


@objcMembers
@objc(NSCAppwriteUser)
public class NSCAppwriteUser: NSObject {
  internal var user: User<[String: AnyCodable]>!
  init(user: User<[String : AnyCodable]>) {
    self.user = user
  }
  
  public var id: String {
    return user.id
  }

  public var createdAt: String{
    return user.createdAt
  }

  public var updatedAt: String {
    return user.updatedAt
  }

  public var name: String {
    return user.name
  }


  public var password: String? {
    return user.password
  }

  public var userHash: String? {
    return user.hash
  }

  public var hashOptions: [String: AnyCodable]? {
    return user.hashOptions
  }


  public var registration: String {
    return user.registration
  }


  public var status: Bool {
    return user.status
  }


  public var labels: [String] {
    return user.labels
  }


  public var passwordUpdate: String {
    return user.passwordUpdate
  }


  public var email: String {
    return user.email
  }


  public var phone: String {
    return user.phone
  }


  public var emailVerification: Bool {
    return user.emailVerification
  }

  public var phoneVerification: Bool {
    return user.phoneVerification
  }

  public var mfa: Bool{
    return user.mfa
  }

  public var prefs: [String: Any] {
    return user.prefs.toMap()
  }


  public var targets: [NSCAppwriteTarget] {
    return user.targets.map { target in
      NSCAppwriteTarget(target: target)
    }
  }

  /// Most recent access date in ISO 8601 format. This attribute is only updated again after 24 hours.
  public var accessedAt: String {
    return user.accessedAt
  }
  
  public func toJson() -> String?{
    do {
      return try user.toJson()
    }catch {
      return nil
    }
  }
}

@objcMembers
@objc(NSCAppwriteSession)
public class NSCAppwriteSession: NSObject {
  internal var session: Session!
  init(session: Session) {
    self.session = session
  }
  
  public var id: String {
    return session.id
  }

  public var createdAt: String{
    return session.createdAt
  }

  public var updatedAt: String{
    return session.updatedAt
  }

  public var userId: String {
    return session.userId
  }

  public var expire: String {
    return session.expire
  }

  public var provider: String {
    return session.provider
  }

  public var providerUid: String {
    return session.providerUid
  }

  public var providerAccessToken: String {
    return session.providerAccessToken
  }

  public var providerAccessTokenExpiry: String {
    return session.providerAccessTokenExpiry
  }

  public var providerRefreshToken: String {
    return session.providerRefreshToken
  }

  public var ip: String {
    return session.ip
  }

  public var osCode: String {
    return session.osCode
  }

  public var osName: String {
    return session.osName
  }

  public var osVersion: String {
    return session.osVersion
  }

  public var clientType: String {
    return session.clientType
  }

  public var clientCode: String {
    return session.clientCode
  }

  public var clientName: String {
    return session.clientName
  }

  public var clientVersion: String {
    return session.clientVersion
  }

  public var clientEngine: String {
    return session.clientEngine
  }


  public var clientEngineVersion: String {
    return session.clientEngineVersion
  }

  public var deviceName: String {
    return session.deviceName
  }

  public var deviceBrand: String {
    return session.deviceBrand
  }

  public var deviceModel: String {
    return session.deviceModel
  }

  public var countryCode: String {
    return session.countryCode
  }

  public var countryName: String {
    return session.countryName
  }

  public var current: Bool {
    return session.current
  }

  public var factors: [String] {
    return session.factors
  }

  public var secret: String {
    return session.secret
  }

  public var mfaUpdatedAt: String {
    return session.mfaUpdatedAt
  }
}


@objcMembers
@objc(NSCAppwriteAccount)
public class NSCAppwriteAccount: NSObject {

  internal var account: Account!
    
  public init(client: NSCAppwriteClient!) {
    self.account = Account(client.client)
  }
  
  public func create(_ userId: String, _ email: String, _ password: String,_  name: String? = nil ,_ callback: @escaping (NSCAppwriteUser?, Error?)-> Void){
    Task {
      do {
        let user = try await account.create(userId: userId, email: email, password: password, name: name)
        callback(NSCAppwriteUser(user: user), nil)
      }catch {
        callback(nil, error)
      }
    }
  }
  
  public func createEmailPasswordSession(_ email: String, _ password: String, _ callback: @escaping (NSCAppwriteSession?, Error?)-> Void){
    Task {
      do {
        let session = try await account.createEmailPasswordSession(email: email, password: password)
        callback(NSCAppwriteSession(session: session), nil)
      }catch {
        callback(nil, error)
      }
    }
  }
  
  public func createSession(_ userId: String, _ secret: String, _ callback: @escaping (NSCAppwriteSession?, Error?)-> Void){
    Task {
      do {
        let session = try await account.createSession(userId: userId, secret: secret)
        callback(NSCAppwriteSession(session: session), nil)
      }catch {
        callback(nil, error)
      }
    }
  }
  
  
  public func deleteSession(_ sessionId: String, _ callback: @escaping (Error?)-> Void){
    Task {
      do {
        let _ = try await account.deleteSession(sessionId: sessionId)
        callback(nil)
      }catch {
        callback(error)
      }
    }
  }
  
  public func createAnonymousSession(_ callback: @escaping (NSCAppwriteSession?, Error?)-> Void){
    Task {
      do {
        let session = try await account.createAnonymousSession()
        callback(NSCAppwriteSession(session: session), nil)
      }catch {
        callback(nil, error)
      }
    }
  }
  
}
