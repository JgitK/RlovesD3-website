# JavaScript / D3 Glossary

The canonical terms for this workspace. All lessons and records use this language.

## Terms

**Variable**:
A named container that holds a value. Created with `const` or `let`.
_Avoid_: box, slot, bucket

**const**:
A variable declaration that prevents the name from being reassigned after creation. Use by default.
_Avoid_: constant (implies the value itself can't change — objects and arrays declared with `const` can still be mutated)

**let**:
A variable declaration that allows the name to be reassigned later. Use only when reassignment is needed.

**Data type**:
The category of a value — determines what operations are valid on it. JavaScript's primitive types are: string, number, boolean, null, undefined.

**String**:
A value representing text. Written inside single quotes, double quotes, or backticks.

**Number**:
A value representing a numeric quantity. In D3, numbers are the data points you visualize.

**Boolean**:
A value that is either `true` or `false`. Used for conditional logic and filtering data.

**Array**:
An ordered list of values, accessed by position (index). In D3, datasets are almost always arrays.

**Object**:
A collection of named properties (key-value pairs). In D3, each data point is typically an object inside an array.

**Function**:
A reusable block of code that takes inputs (parameters) and optionally returns a value.

**Arrow function**:
Modern JavaScript syntax for writing a function: `(param) => { return value; }`. Preferred in D3 code.

**Index**:
The numeric position of an item in an array. Zero-indexed: the first item is at index 0.

**console.log**:
A built-in function that prints a value to the browser's developer console. The primary tool for checking your work.
