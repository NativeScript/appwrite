package org.nativescript.plugins.appwrite


class Query {
  companion object {
    @JvmStatic
    fun equal(attribute: String, value: Any): String {
      return io.appwrite.Query.equal(attribute, value)
    }

    @JvmStatic
    fun notEqual(attribute: String, value: Any): String {
      return io.appwrite.Query.notEqual(attribute, value)
    }

    @JvmStatic
    fun lessThan(attribute: String, value: Any): String {
      return io.appwrite.Query.lessThan(attribute, value)
    }

    @JvmStatic
    fun lessThanEqual(attribute: String, value: Any): String {
      return io.appwrite.Query.lessThanEqual(attribute, value)
    }

    @JvmStatic
    fun greaterThan(attribute: String, value: Any): String {
      return io.appwrite.Query.greaterThan(attribute, value)
    }

    @JvmStatic
    fun greaterThanEqual(attribute: String, value: Any): String {
      return io.appwrite.Query.greaterThanEqual(attribute, value)
    }

    @JvmStatic
    fun isNull(attribute: String): String {
      return io.appwrite.Query.isNull(attribute)
    }

    @JvmStatic
    fun isNotNull(attribute: String): String {
      return io.appwrite.Query.isNotNull(attribute)
    }

    @JvmStatic
    fun between(attribute: String, start: Int, end: Int): String {
      return io.appwrite.Query.between(attribute, start, end)
    }

    @JvmStatic
    fun between(attribute: String, start: Double, end: Double): String {
      return io.appwrite.Query.between(attribute, start, end)
    }

    @JvmStatic
    fun between(attribute: String, start: String, end: String): String {
      return io.appwrite.Query.between(attribute, start, end)
    }

    @JvmStatic
    fun startsWith(attribute: String, value: String): String {
      return io.appwrite.Query.startsWith(attribute, value)
    }

    @JvmStatic
    fun endsWith(attribute: String, value: String): String {
      return io.appwrite.Query.endsWith(attribute, value)
    }

    @JvmStatic
    fun select(attributes: List<String>): String {
      return io.appwrite.Query.select(attributes)
    }

    @JvmStatic
    fun search(attribute: String, value: String): String {
      return io.appwrite.Query.search(attribute, value)
    }

    @JvmStatic
    fun orderAsc(attribute: String): String {
      return io.appwrite.Query.orderAsc(attribute)
    }

    @JvmStatic
    fun orderDesc(attribute: String): String {
      return io.appwrite.Query.orderDesc(attribute)
    }

    @JvmStatic
    fun cursorBefore(id: String): String {
      return io.appwrite.Query.cursorBefore(id)
    }

    @JvmStatic
    fun cursorAfter(id: String): String {
      return io.appwrite.Query.cursorAfter(id)
    }

    @JvmStatic
    fun limit(limit: Int): String {
      return io.appwrite.Query.limit(limit)
    }

    @JvmStatic
    fun offset(offset: Int): String {
      return io.appwrite.Query.limit(offset)
    }

    @JvmStatic
    fun contains(attribute: String, value: Any): String {
      return io.appwrite.Query.contains(attribute, value)
    }

    @JvmStatic
    fun or(queries: List<String>): String {
      return io.appwrite.Query.or(queries)
    }

    @JvmStatic
    fun and(queries: List<String>): String {
      return io.appwrite.Query.and(queries)
    }
  }
}
