package org.nativescript.plugins.appwrite


class ID {
  companion object {
    @JvmStatic
    fun custom(value: String): String {
      return io.appwrite.ID.custom(value)
    }

    @JvmStatic
    @JvmOverloads
    fun unique(padding: Int = 7): String {
      return io.appwrite.ID.unique(padding)
    }
  }
}
