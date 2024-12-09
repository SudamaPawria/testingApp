import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const StringMethods = () => {

//     Sure! Here are some commonly used JavaScript string methods along with examples:

// 1. **`charAt(index)`**
//    - Returns the character at the specified index.
//    ```javascript
//    let str = "Hello, World!";
//    console.log(str.charAt(0)); // Output: "H"
//    ```

// 2. **`charCodeAt(index)`**
//    - Returns the Unicode of the character at the specified index.
//    ```javascript
//    let str = "Hello, World!";
//    console.log(str.charCodeAt(0)); // Output: 72
//    ```

// 3. **`concat(string2, string3, ..., stringN)`**
//    - Joins two or more strings.
//    ```javascript
//    let str1 = "Hello";
//    let str2 = "World";
//    console.log(str1.concat(", ", str2)); // Output: "Hello, World"
//    ```

// 4. **`includes(searchString, position)`**
//    - Checks if a string contains another string.
//    ```javascript
//    let str = "Hello, World!";
//    console.log(str.includes("World")); // Output: true
//    ```

// 5. **`indexOf(searchValue, fromIndex)`**
//    - Returns the index of the first occurrence of a specified value.
//    ```javascript
//    let str = "Hello, World!";
//    console.log(str.indexOf("World")); // Output: 7
//    ```

// 6. **`lastIndexOf(searchValue, fromIndex)`**
//    - Returns the index of the last occurrence of a specified value.
//    ```javascript
//    let str = "Hello, World! World!";
//    console.log(str.lastIndexOf("World")); // Output: 14
//    ```

// 7. **`match(regex)`**
//    - Searches a string for a match against a regular expression.
//    ```javascript
//    let str = "Hello, World!";
//    console.log(str.match(/World/)); // Output: ["World"]
//    ```

// 8. **`repeat(count)`**
//    - Returns a new string with a specified number of copies of the original string.
//    ```javascript
//    let str = "Hello";
//    console.log(str.repeat(3)); // Output: "HelloHelloHello"
//    ```

// 9. **`replace(searchValue, newValue)`**
//    - Replaces a specified value with another value in a string.
//    ```javascript
//    let str = "Hello, World!";
//    console.log(str.replace("World", "Everyone")); // Output: "Hello, Everyone"
//    ```

// 10. **`slice(beginIndex, endIndex)`**
//     - Extracts a part of a string and returns it as a new string.
//     ```javascript
//     let str = "Hello, World!";
//     console.log(str.slice(0, 5)); // Output: "Hello"
//     ```

// 11. **`split(separator, limit)`**
//     - Splits a string into an array of substrings.
//     ```javascript
//     let str = "Hello, World!";
//     console.log(str.split(", ")); // Output: ["Hello", "World!"]
//     ```

// 12. **`startsWith(searchString, position)`**
//     - Checks if a string starts with a specified string.
//     ```javascript
//     let str = "Hello, World!";
//     console.log(str.startsWith("Hello")); // Output: true
//     ```

// 13. **`substring(start, end)`**
//     - Extracts characters from a string between two specified indices.
//     ```javascript
//     let str = "Hello, World!";
//     console.log(str.substring(0, 5)); // Output: "Hello"
//     ```

// 14. **`toLowerCase()`**
//     - Converts a string to lowercase letters.
//     ```javascript
//     let str = "Hello, World!";
//     console.log(str.toLowerCase()); // Output: "hello, world!"
//     ```

// 15. **`toUpperCase()`**
//     - Converts a string to uppercase letters.
//     ```javascript
//     let str = "Hello, World!";
//     console.log(str.toUpperCase()); // Output: "HELLO, WORLD!"
//     ```

// 16. **`trim()`**
//     - Removes whitespace from both ends of a string.
//     ```javascript
//     let str = "   Hello, World!   ";
//     console.log(str.trim()); // Output: "Hello, World!"
//     ```

// You're right! Let's include those methods as well:

// 1. **`substr(start, length)`**
//    - Extracts a part of a string, starting at the specified index and extending for a given number of characters.
//    ```javascript
//    let str = "Hello, World!";
//    console.log(str.substr(7, 5)); // Output: "World"
//    ```

// 2. **`search(regex)`**
//    - Searches a string for a match against a regular expression and returns the index of the match.
//    ```javascript
//    let str = "Hello, World!";
//    console.log(str.search(/World/)); // Output: 7
//    ```

// 3. **`valueOf()`**
//    - Returns the primitive value of a String object.
//    ```javascript
//    let str = new String("Hello, World!");
//    console.log(str.valueOf()); // Output: "Hello, World!"
//    ```

// 4. **`toString()`**
//    - Returns a string representing the specified object.
//    ```javascript
//    let str = new String("Hello, World!");
//    console.log(str.toString()); // Output: "Hello, World!"
//    ```

  return (
    <View>
      <Text>StringMethods</Text>
    </View>
  )
}

export default StringMethods

const styles = StyleSheet.create({})