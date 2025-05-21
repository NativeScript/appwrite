package org.nativescript.plugins.appwrite

import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.Job
import kotlinx.coroutines.launch
import io.appwrite.models.Document

class Databases {
  companion object {
    private val scope = CoroutineScope(Dispatchers.Default + Job())

    @JvmStatic
    fun createDocument(
      databases: io.appwrite.services.Databases,
      databaseId: String,
      collectionId: String,
      documentId: String,
      data: Map<String, Any>,
      permissions: List<String>? = null,
      callback: (Document<Map<String, Any>>?, Exception?) -> Void
    ) {
      scope.launch {
        try {
          val document =
            databases.createDocument(databaseId, documentId, collectionId, data, permissions)
          callback(document, null)
        } catch (e: Exception) {
          callback(null, e)
        }
      }
    }

    @JvmStatic
    fun getDocument(
      databases: io.appwrite.services.Databases,
      databaseId: String,
      collectionId: String,
      documentId: String,
      queries: List<String>? = null,
      callback: (Document<Map<String, Any>>?, Exception?) -> Void
    ) {
      scope.launch {
        try {
          val document = databases.getDocument(databaseId, collectionId, documentId, queries)
          callback(document, null)
        } catch (e: Exception) {
          callback(null, e)
        }
      }
    }


    @JvmStatic
    fun listDocuments(
      databases: io.appwrite.services.Databases,
      databaseId: String,
      collectionId: String,
      queries: List<String>? = null,
      callback: (List<Document<Map<String, Any>>>?, Exception?) -> Void
    ) {
      scope.launch {
        try {
          val list = databases.listDocuments(databaseId, collectionId, queries)
          callback(list.documents, null)
        } catch (e: Exception) {
          callback(null, e)
        }
      }
    }


    @JvmStatic
    fun updateDocument(
      databases: io.appwrite.services.Databases,
      databaseId: String,
      collectionId: String,
      documentId: String,
      data: Map<String, Any>,
      permissions: List<String>? = null,
      callback: (Document<Map<String, Any>>?, Exception?) -> Void
    ) {
      scope.launch {
        try {
          val document =
            databases.updateDocument(databaseId, collectionId, documentId, data, permissions)
          callback(document, null)
        } catch (e: Exception) {
          callback(null, e)
        }
      }
    }


    @JvmStatic
    fun deleteDocument(
      databases: io.appwrite.services.Databases,
      databaseId: String,
      collectionId: String,
      documentId: String,
      callback: (Exception?) -> Void
    ) {
      scope.launch {
        try {
          databases.deleteDocument(databaseId, collectionId, documentId)
          callback(null)
        } catch (e: Exception) {
          callback(e)
        }
      }
    }
  }
}
