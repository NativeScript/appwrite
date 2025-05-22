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


private enum ValueType {
  case Null
  case Boolean
  case Double
  case Integer
  case String
  case Date
  case Data
  case Array
  case Object
}

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
  
  
  private static func objcValue(from anyCodable: AnyCodable, wrap: Bool = false) -> (Any, ValueType) {
    var ret: (Any, ValueType) = (NSNull(), .Null)
    switch anyCodable.value {
    case let dict as [String: AnyCodable]:
      var objcDict: [String: NSCAppwriteJSONValue] = [:]
        for (key, value) in dict {
          objcDict[key] = objcValue(from: value, wrap:  true).0 as? NSCAppwriteJSONValue
        }
      ret.0 = NSCAppwriteJSONValue(object: objcDict)
      ret.1 = .Object
      break
    case let array as [AnyCodable]:
      var objcArray: [NSCAppwriteJSONValue] = []
        for value in array {
          objcArray.append(objcValue(from: value, wrap: true).0 as! NSCAppwriteJSONValue)
        }
      
      ret.0 = NSCAppwriteJSONValue(array: objcArray)
      ret.1 = .Array
      break
    case let str as String:
      if(wrap){
        ret.0 = NSCAppwriteJSONValue(string: str)
      }else {
        ret.0 = str
      }
      ret.1 = .String
      break
    case let num as NSNumber:
      if(wrap){
        ret.0 = NSCAppwriteJSONValue(double: Double(truncating: num))
      }else {
        ret.0 = Double(truncating: num)
      }
      ret.1 = .Double
      break
    case let bool as Bool:
       if(wrap){
         ret.0 = NSCAppwriteJSONValue(boolean: bool)
      }else {
        ret.0 = bool
      }
      ret.1 = .Boolean
      break
    case let int as Int:
      if(wrap){
        ret.0 = NSCAppwriteJSONValue(integer: int)
      }else {
        ret.0 = int
      }
      ret.1 = .Integer
      break
    case let double as Double:
      if(wrap){
        ret.0 = NSCAppwriteJSONValue(double: double)
      }
        else {
          ret.0 =  double
        }
        ret.1 = .Double
        break
    case _ as NSNull:
        if(wrap){
          ret.0 =  NSCAppwriteJSONValue()
        } else {
          ret.0 = NSNull()
        }
        ret.1 = .Null
        break
    default:
        if(wrap){
          ret.0 =  NSCAppwriteJSONValue()
        } else {
          ret.0 = NSNull()
        }
        ret.1 = .Null
        break
    }
    return ret
}
  
  public init(decodable: AnyCodable) {
    let (objcValue, valueType) = NSCAppwriteJSONValue.objcValue(from: decodable)
    switch valueType {
    case .Boolean:
      self.boolValue = objcValue as? Bool
    case .Double:
      self.doubleValue = objcValue as? Double
    case .Integer:
      self.integerValue = objcValue as? Int
    case .String:
      self.stringValue = objcValue as? String
    case .Date:
      self.dateValue = objcValue as? Date
    case .Data:
      self.dataValue = objcValue as? Data
    case .Array:
      self.arrayValue = objcValue as? NSCAppwriteJSONArray
    case .Object:
      self.objectValue = objcValue as? NSCAppwriteJSONObject
    case .Null:
      // noop
      break
    }
  }
  
  
  public init(decodableObject: [String: AnyCodable]) {
    self.objectValue = decodableObject.mapValues { value  in
      NSCAppwriteJSONValue(decodable: value)
    }
  }
  
  
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
