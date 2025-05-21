package org.nativescript.plugins.appwrite

import io.appwrite.models.Session
import io.appwrite.models.User
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.Job
import kotlinx.coroutines.launch


class Account {
  companion object {
    private val scope = CoroutineScope(Dispatchers.Default + Job())

    @JvmStatic
    @JvmOverloads
    fun create(
      account: io.appwrite.services.Account,
      userId: String,
      email: String,
      password: String,
      name: String? = null,
      callback: (User<Map<String, Any>>?, Exception?) -> Void
    ) {
      scope.launch {
        try {
          val user = account.create(userId, email, password, name)
          callback(user, null)
        } catch (e: Exception) {
          callback(null, e)
        }
      }
    }

    @JvmStatic
    fun createEmailPasswordSession(
      account: io.appwrite.services.Account,
      email: String,
      password: String,
      callback: (Session?, Exception?) -> Void
    ) {
      scope.launch {
        try {
          val session = account.createEmailPasswordSession(email, password)
          callback(session, null)
        } catch (e: Exception) {
          callback(null, e)
        }
      }
    }

    @JvmStatic
    fun createSession(
      account: io.appwrite.services.Account,
      userId: String,
      secret: String,
      callback: (Session?, Exception?) -> Void
    ) {
      scope.launch {
        try {
          val session = account.createSession(userId, secret)
          callback(session, null)
        } catch (e: Exception) {
          callback(null, e)
        }
      }
    }

    @JvmStatic
    fun createAnonymousSession(
      account: io.appwrite.services.Account,
      callback: (Session?, Exception?) -> Void
    ) {
      scope.launch {
        try {
          val session = account.createAnonymousSession()
          callback(session, null)
        } catch (e: Exception) {
          callback(null, e)
        }
      }
    }


    @JvmStatic
    fun deleteSession(
      account: io.appwrite.services.Account,
      sessionId: String,
      callback: (Exception?) -> Void
    ) {
      scope.launch {
        try {
          account.deleteSession(sessionId)
          callback(null)
        } catch (e: Exception) {
          callback(e)
        }
      }
    }

  }
}
