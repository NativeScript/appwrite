//
//  NSCAppwriteHelpers.swift
//  NSCAppwrite
//
//  Created by Osei Fortune on 21/05/2025.
//

import Foundation
import JSONCodable


typealias NSCAppwriteJSONObject = [String: NSCAppwriteJSONValue]
typealias NSCAppwriteJSONArray = [NSCAppwriteJSONValue]


@objcMembers
@objc(NSCAppwriteJSONValue)
public class NSCAppwriteJSONValue: NSObject, Encodable, Decodable {
  var boolValue: Bool?
  var integerValue: Int?
  var doubleValue: Double?
  var stringValue: String?
  var dateValue: Date?
  var dataValue: Data?
  var arrayValue: NSCAppwriteJSONArray?
  var objectValue: NSCAppwriteJSONObject?
  

  class MyCodingKey : CodingKey {
    let key: String
    
    required init?(intValue: Int) {
      return nil
    }
    
    required init?(stringValue: String) {
      key = stringValue
    }
    
    var intValue: Int? {
      return nil
    }
    
    var stringValue: String {
      return key
    }
  }
  
  
  public override init() {}
  
  public init(boolean: Bool){
    self.boolValue = boolean
  }
  
  public init(integer: Int){
    self.integerValue = integer
  }
  
  public init(double: Double){
    self.doubleValue = double
  }
  
  public init(string: String){
    self.stringValue = string
  }
  
  public init(date: Date){
    self.dateValue = date
  }
  
  public init(data: Data){
    self.dataValue = data
  }
  
  public init(array: [NSCAppwriteJSONValue]){
    self.arrayValue = array
  }
  
  public init(object: [String: NSCAppwriteJSONValue]){
    self.objectValue = object
  }
  
  public var json: Any? {
    if let objectValue = objectValue {
      let encoder = JSONEncoder()
      do {
        let data = try encoder.encode(objectValue)
        return String(data: data, encoding: .utf8)
      }catch {
        return nil
      }
    }
    
    if let arrayValue = arrayValue {
      let encoder = JSONEncoder()
      do {
        let data = try encoder.encode(arrayValue)
        return String(data: data, encoding: .utf8)
      }catch {
        return nil
      }
    }
    
    return nil
  }
  
    public var value: Any? {
     if let boolValue = boolValue {
       return boolValue as Any
      }
      if let integerValue = integerValue {
        return integerValue  as Any
      }
      if let doubleValue = doubleValue {
        return doubleValue  as Any
      }
      if let stringValue = stringValue {
        return stringValue  as Any
      }
      
      if let dateValue = dateValue {
        return dateValue  as Any
      }
      if let dataValue = dataValue {
        return dataValue  as Any
      }
      if let arrayValue = arrayValue {
        return arrayValue.map({ value in
          if(value.value == nil){
           return NSNull() as Any?
          }else {
            return value.value
          }
        }) as Any
      }
      
      if let objectValue = objectValue {
        return objectValue.mapValues({ value in
          if(value.value == nil){
            return NSNull() as Any?
          }else {
            return value.value
          }
        })  as Any
      }
      
      return nil
    }
  
  
  static func decodingError(forCodingPath codingPath: [CodingKey]) -> DecodingError {
    let context = DecodingError.Context(codingPath: codingPath, debugDescription: "Cannot decode NSCAppwriteJSONValue")
    return DecodingError.typeMismatch(NSCAppwriteJSONValue.self, context)
  }
  
  
  
  required public init(from decoder: any Decoder) throws {
    let container = try decoder.singleValueContainer()
    if container.decodeNil() {
      // noop
    }else if let bool = try? container.decode(Bool.self) {
      self.boolValue = bool
    }else if let int = try? container.decode(Int.self) {
      self.integerValue = int
    }else if let double = try? container.decode(Double.self) {
      self.doubleValue = double
    }else if let string = try? container.decode(String.self) {
      self.stringValue = string
    }else if let date = try? container.decode(Date.self) {
      self.dateValue = date
    } else if let data = try? container.decode(Data.self) {
      self.dataValue = data
    }else if let array = try? container.decode(NSCAppwriteJSONArray.self) {
      self.arrayValue = array
    }else if let object = try? container.decode(NSCAppwriteJSONObject.self) {
      self.objectValue = object
    }else {
      throw NSCAppwriteJSONValue.decodingError(forCodingPath: container.codingPath)
    }
  }
  
  

  
  public func encode(to encoder: any Encoder) throws {
    var container = encoder.singleValueContainer()
    if let arr = self.arrayValue {
     try container.encode(arr)
    } else if let dict = self.objectValue {
      try container.encode(dict)
    }else if let bool = self.boolValue {
      try container.encode(bool)
    }else if let int = self.integerValue {
      try container.encode(int)
    }else if let double = self.doubleValue {
      try container.encode(double)
    }else if let string = self.stringValue {
      try container.encode(string)
    }else if let date = self.dateValue {
      try container.encode(date)
    }else if let data = self.dataValue {
      try container.encode(data)
    }else {
      try container.encodeNil()
    }
  }
}
