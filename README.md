# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @anchenqq/lotide`

**Require it:**

`const _ = require('@anchenqq/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: returns  the first element of an input from array
* `tail(array)`: return every item from the input array except for the first item
* `middle(array)`: returns the middle index from the input array, if there are an even number of items in the array, it will return the middle two items
* `assertArraysEqual(array1, array2)`: determines if arrays are equal
* `assertEqual(actual, expected)`: determines if strings are equal
* `assertObjectsEqual(obj1, obj2)`: determines if objects are equal
* `countLetters(array)`: determines letter count of an object
* `eqArrays(array1, array2)`: determines if arrays are equal, returns boolean
* `eqObjects(obj1, obj2)`: determines if objects are equal, returns boolean
* `findKey(obj, callback)`: returns object key that matches the callback functions key finding function
* `findKeyByValue(obj, value)`: returns key given a value
* `flatten(array)`: returns a flattened 1-dimensional array
* `letterPositions(array)`: takes in a sentence and returns an object with the indexes of every letter in the sentence
* `map(array, callback)`: takes in an array, goes through every index of the array with the callback function, and returns a new array with the items filtered by the callback
* `takeUntil(array, callback)`:  takes in an array and return new array filtered by the callback
* `without(source, itemsToRemove)`:  takes in source and output the array without the items indicated on the itemsToRemove.
