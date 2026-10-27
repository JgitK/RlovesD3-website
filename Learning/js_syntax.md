D3
heart
React
Lessons
Gallery
discord logo

jk@
d3-shape
d3-scale
d3-axis
d3-hierarchy
d3-force
d3-geo
d3-brush
d3-transition
d3-time
d3-zoom
d3-selection
d3-time-format
d3-format
d3-interpolate
d3-color
d3-scale-chromatic
Course
WebDev Foundation
JavaScript Syntax
JavaScript Syntax
Now that you know what JavaScript is and how to include it in a webpage, it's time to learn how to write it.

This lesson covers variables, data types, arrays, objects, and functions — the core building blocks you'll use in every D3 chart. Packed with interactive examples and exercises.

Members only
5 minutes read
📦 Variables: const and let
Like most programming languages, JavaScript stores values in variables. You'll use two keywords to create them:

const — creates a variable that cannot be reassigned. Use this by default.
let — creates a variable that can be reassigned. Use it only when you need to change the value later.
You might see var in older code. It's the legacy way of declaring variables — don't use it.
1
2
3
4
5
6
7
8
9
10
11
12
13
// const = constant, cannot be reassigned
const name = "Alice";
console.log(name);

// let = can be reassigned
let score = 10;
console.log(score);

score = 20; // ✅ This works
console.log(score);

// name = "Bob"; // ❌ This would throw an error!

"Alice"
10
20

Note: the sandbox above shows code on the left and output on the right. The output panel is called the console — we cover it in the Developer Tools lesson.

🧱 Primitive Types
JavaScript has a few basic data types called primitives. These are the simplest building blocks of the language.

Strings
Strings are pieces of text. You can create them with single quotes, double quotes, or backticks:

1
2
3
4
5
6
7
const single = 'Hello';
const double = "World";
const backticks = `Hello World`;

console.log(single, double);
console.log(backticks);

"Hello"
"World"
"Hello World"

Single and double quotes work the same way — pick one style and stick with it. Backticks are special: they allow template literals, which we'll cover in the next section.

Numbers
Booleans
Booleans represent true or false. They're essential for conditional logic:

1
2
3
4
5
6
const isActive = true;
const isComplete = false;

console.log(isActive);
console.log(10 > 5); // comparisons return booleans

true
true

null and undefined
JavaScript has two ways to represent "nothing":

undefined — a variable that hasn't been assigned a value
null — an intentional absence of value (you set it explicitly)
1
2
3
4
5
6
7
8
let notAssigned;
console.log(notAssigned); // undefined

const empty = null;
console.log(empty); // null

console.log(notAssigned === undefined); // true

undefined
null
true

In practice, you'll mostly encounter undefined when accessing missing properties or forgetting to return a value from a function. You'll use null when you want to explicitly say "no value here."

Note: You can check the type of any value using typeof:

1
2
3
4
5
6
console.log(typeof "hello"); // string
console.log(typeof 42); // number
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined
console.log(typeof null); // object (a famous JS quirk!)

"string"
"number"
"boolean"
"undefined"
"object"

📚 Arrays
An array is an ordered list of values. In D3, your data will almost always be an array. Think of it like a list where values can have mixed types.

Creating and accessing
An array is created using square brackets ([]). Once it's there you can access its elements by their index using array[index]:

1
2
3
4
5
6
7
8
const numbers = [10, 20, 30, 40];
const fruits = ["apple", "banana", "cherry"];

// Access by index (starts at 0!)
console.log(numbers[0]); // 10
console.log(numbers[2]); // 30
console.log(fruits[1]); // banana

10
30
"banana"

Arrays are zero-indexed — the first element is at position 0, not 1. This trips up everyone at first!

Useful properties and methods
Every array comes with built-in properties and methods. Properties are values you can read (like .length), while methods are functions you can call (like .includes()).

You access them with a dot: myArray.length gives you the number of items, myArray.includes("apple") checks if "apple" is in the array.

Here are a few you'll use often. We'll cover the most powerful ones (map, filter) in detail later.

1
2
3
4
5
6
7
8
9
10
11
12
13
14
const numbers = [5, 2, 8, 1, 9];

// Get the length
console.log(numbers.length); // 5

// Check if element exists
console.log(numbers.includes(8)); // true

// Find index of element
console.log(numbers.indexOf(8)); // 2

// Join into a string
console.log(numbers.join(" - "));

5
true
2
"5 - 2 - 8 - 1 - 9"

🗂️ Objects
An object is a collection of properties. You recognize them by their curly braces ({}). Each property is a key-value pair.

While arrays store items in order, objects store items by name. This is how most real-world data is structured.

anatomy of a javascript Object
Accessing properties
You can access properties two ways: dot notation (person.name) or bracket notation (person["name"]). Dot notation is cleaner; use brackets when the key is stored in a variable.

1
2
3
4
5
6
7
8
9
10
11
12
13
const person = {
name: "Alice",
age: 28,
city: "Paris"
};

// Access with dot notation
console.log(person.name);
console.log(person.age);

// Access with bracket notation
console.log(person["city"]);

"Alice"
28
"Paris"

Nested objects
Objects can contain other objects — or even arrays. To access nested values, chain the dots. This structure is exactly how datasets look in D3, so get comfortable with it!

1
2
3
4
5
6
7
8
9
10
11
12
const person = {
name: "Alice",
address: {
city: "Paris",
country: "France",
values: [1,2,3,4,5]
}
};

console.log(person.address.city);
console.log(person.address.country);

"Paris"
"France"

Arrays of objects
This is the most important pattern for D3. Your data will almost always be an array of objects — each object representing one data point.

If you're used to tables or .csv files, this is the same idea: the example below is a table with 2 columns (country, population) and 3 rows (3 objects in the array).

1
2
3
4
5
6
7
8
9
10
11
12
13
14
// Typical D3 data structure
const data = [
{ country: "France", population: 67 },
{ country: "Germany", population: 83 },
{ country: "Spain", population: 47 }
];

// Access the first item
console.log(data[0]);

// Access a property of the second item
console.log(data[1].country);
console.log(data[1].population);

{ country: "France", population: 67 }
"Germany"
83

⚡ Functions
A function is a reusable block of code. You define it once, then call it whenever you need it. Functions can take inputs (parameters) and return an output.

Arrow functions
Modern JavaScript uses arrow functions. You'll see them everywhere in React and D3. Here's the basic syntax:

anatomy of a javascript function
The => arrow separates the parameters from the function body.

Inside the curly braces, you write your logic and use return to send back a value. If you forget return, the function returns undefined.

1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
// Arrow function with explicit return
const double = (x) => {
return x \* 2;
};

console.log(double(5)); // 10
console.log(double(12)); // 24

// With two parameters
const add = (a, b) => {
return a + b;
};
console.log(add(3, 7)); // 10

// Note: you can use a shorthand if your function has a single expression like this:
const doubleShorter = (x) => x \* 2;

10
24
10

Traditional function syntax
Before arrow functions, JavaScript used the function keyword. You'll still see this syntax in older code and documentation:

1
2
3
4
5
6
7
8
9
10
11
12
13
// Traditional function syntax
function double(x) {
return x \* 2;
}

console.log(double(5)); // 10

// With two parameters
function add(a, b) {
return a + b;
}
console.log(add(3, 7)); // 10

10
10

Both syntaxes work similarly for most cases. Arrow functions are preferred in modern code because they're shorter and have clearer scoping behavior. But it's useful to recognize the traditional syntax when you encounter it.

🔀 Conditional Logic
Conditionals let your code make decisions. They're essential for filtering data, handling edge cases, and controlling what gets rendered.

Comparison operators
Before writing conditions, you need to know how to compare values. JavaScript has several comparison operators that return true or false:

1
2
3
4
5
6
7
8
9
10
11
12
const x = 10;

console.log(x === 10); // equal to
console.log(x !== 5); // not equal to
console.log(x > 5); // greater than
console.log(x >= 10); // greater than or equal
console.log(x < 20); // less than
console.log(x <= 10); // less than or equal

// Works with strings too
console.log("apple" === "apple"); // true

true
true
true
true
true
true
true

Note: always use === (strict equality) instead of ==. The double equals does type coercion, which can lead to unexpected results like "5" == 5 being true.
If / else
The if statement runs code only when a condition is true. Add else to handle the opposite case:

1
2
3
4
5
6
7
8
9
10
11
12
const temperature = 25;

if (temperature > 30) {
console.log("It's hot!");
} else if (temperature > 20) {
console.log("It's nice outside");
} else {
console.log("It's cold!");
}

// Try changing the temperature value!

"It's nice outside"

Logical operators
Combine multiple conditions with && (and) and || (or). Use ! to negate a value:

const age = 25;
const hasTicket = true;

// AND: both conditions must be true
console.log(age >= 18 && hasTicket); // true

// OR: at least one must be true
console.log(age < 18 || hasTicket); // true

// NOT: flips true to false
console.log(!hasTicket); // false

true
true
false

Ternary operator
For simple if/else cases, the ternary operator is a compact one-liner. It's widely used in React and D3:

const value = 75;

// condition ? ifTrue : ifFalse
const status = value > 50 ? "high" : "low";
console.log(status); // "high"

// Common in D3: set color based on value
const color = value > 50 ? "green" : "red";
console.log(color); // "green"

The syntax is condition ? valueIfTrue : valueIfFalse. You'll use this constantly when setting colors, sizes, or visibility based on data values.

🔁 Array Methods: map and filter
These two methods are the workhorses of data transformation in JavaScript. You'll use them constantly in D3 and React.

They're both methods: they're always chained after an array. They also both accept a function as an argument and return a new array (they don't modify the original).

Example 1: map to transform every item
map calls a function on each element of the array. At each iteration, the function returns a new value. All the new values make the final new array.

The function can be defined first and passed to map. Or it can be defined directly inside the map call.

Both options work the same way: map receives each item one at a time and whatever you return becomes the new value. Defining the function separately can make your code easier to read when the logic is complex.

const numbers = [1, 2, 3, 4, 5];

// Option 1: write the function directly inside map
const doubled = numbers.map((n) => {
return n \* 2;
});
console.log(doubled); // [2, 4, 6, 8, 10]

// Option 2: define the function first, then pass it
const triple = (n) => {
return n \* 3;
};
const tripled = numbers.map(triple);
console.log(tripled); // [3, 6, 9, 12, 15]

Example 2: map with objects
In D3, the dataset is often an array of objects. For each data point, we'll need to do something — like draw a marker on the graph.

map is perfect for this. At each iteration, the function receives one object from the array and can extract or transform its values:

const data = [
{ country: "France", population: 67 },
{ country: "Germany", population: 83 },
{ country: "Spain", population: 47 }
];

// Extract just the country names
const countries = data.map((d) => {
return d.country;
});
console.log(countries); // ["France", "Germany", "Spain"]

// Convert population to millions string
const labels = data.map((d) => {
return d.country + ": " + d.population + "M";
});
console.log(labels);

Example 3: filter to keep matching items
filter works the same way as map: you pass it a function that runs on each item of the array.

The difference is that the function must return a boolean. filter keeps only the items where the function returns true.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// Keep only numbers greater than 4
const big = numbers.filter((n) => {
return n > 4;
});

console.log(big); // [5, 6, 7, 8]

filter is perfect for narrowing down datasets — for instance, showing only one group on your chart:

const data = [
{ country: "France", population: 67 },
{ country: "Germany", population: 83 },
{ country: "Spain", population: 47 },
{ country: "Poland", population: 38 }
];

// Keep only countries with population > 50
const large = data.filter((d) => {
return d.population > 50;
});

console.log(large);
// [{ country: "France", ... }, { country: "Germany", ... }]

Example 4: Chaining map and filter
Since both methods return arrays, you can chain them together. This is a very common pattern:

const data = [
{ country: "France", population: 67 },
{ country: "Germany", population: 83 },
{ country: "Spain", population: 47 },
{ country: "Poland", population: 38 }
];

// Filter large countries, then extract names
const largeCountryNames = data
.filter((d) => {
return d.population > 50;
})
.map((d) => {
return d.country;
});

console.log(largeCountryNames); // ["France", "Germany"]

The order matters: filtering first (to reduce the dataset) then mapping (to transform) is usually more efficient.

Note: Notice how variables are written? alwaysLikeThis? We call it camelCase, and it's good practice to use this format in frontend development.
Practice time!
The best way to learn JavaScript is to write JavaScript. Try these exercises to reinforce what you've learned.

1
Create variables

2
Fix the error

3
Basic math

4
Pythagorean theorem

5
Template literal

6
Count array items
ToDo

7
Access first and last
ToDo

8
Check with .includes()
ToDo

9
Join into a string
ToDo

10
Navigate nested object
ToDo

11
Build a dataset
ToDo

12
Access from array of objects
ToDo

13
Count data points
ToDo

14
Create an arrow function
ToDo

15
Function with two parameters
ToDo

16
Return an object
ToDo

17
Fix the missing return
ToDo

18
Comparison operators
ToDo

19
If/else statement
ToDo

20
Logical AND operator
ToDo

21
Ternary operator
ToDo

22
Chained ternary
ToDo

23
map: triple numbers
ToDo

24
map: extract property
ToDo

25
filter: even numbers
ToDo

26
filter: by property
ToDo

27
Chain filter and map
ToDo
← Previous
JavaScript fundamentals

Next →
Version control: Git + GitHub

JavaScript Syntax | React Graph Gallery
