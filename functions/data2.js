var code_base_questions = [
    {
      serialno: 1,
      question:
        "In Java, what does the `final` keyword indicate when applied to a variable?",
      answer: "The variable value cannot be modified once initialized.",
    },
    {
      serialno: 2,
      question:
        "Which of the following methods can be used to add an item to the end of a list in Python? \n a) append() \n b) insert() \n c) add() \n d) extend()",
      answer: "a) append()",
    },
    {
      serialno: 3,
      question:
        "What is the difference between `id` and `class` attributes in HTML?",
      answer:
        "The `id` is unique to a single element, while `class` can be shared by multiple elements.",
    },
    {
      serialno: 4,
      question: "How do you center an element horizontally using CSS?",
      answer: "Use `margin: 0 auto;`.",
    },
    {
      serialno: 5,
      question:
        "Which of the following is used to create a function in JavaScript? \n a) func \n b) function \n c) define \n d) fn",
      answer: "b) function",
    },
    {
      serialno: 6,
      question:
        "In MySQL, how would you retrieve the first 10 records from a table named `employees`?",
      answer: "SELECT * FROM employees LIMIT 10;",
    },
    {
      serialno: 7,
      question: "What is the difference between `==` and `===` in JavaScript?",
      answer: "`==` compares values while `===` compares both values and types.",
    },
    {
      serialno: 8,
      question:
        "Which command is used in Git to merge the current branch with another branch?",
      answer: "git merge",
    },
    {
      serialno: 9,
      question: "What is a `JOIN` clause in SQL?",
      answer:
        "A JOIN clause is used to combine rows from two or more tables based on a related column.",
    },
    {
      serialno: 10,
      question: "In MongoDB, what is a `collection`?",
      answer:
        "A collection is a grouping of MongoDB documents, similar to a table in a relational database.",
    },
    {
      serialno: 11,
      question: "How do you start a React app development server?",
      answer: "Run `npm start` after creating a React project.",
    },
    {
      serialno: 12,
      question:
        "In RESTful API design, what HTTP method is typically used for retrieving data?",
      answer: "GET",
    },
    {
      serialno: 13,
      question: "How would you handle a `404 Not Found` error in a RESTful API?",
      answer: "Return a `404` status code when a resource is not found.",
    },
    {
      serialno: 14,
      question: "What is the purpose of the `useState` hook in React?",
      answer: "It allows you to add state to a functional component.",
    },
    {
      serialno: 15,
      question:
        "Which of the following is a method to close a MongoDB connection? \n a) disconnect() \n b) close() \n c) terminate() \n d) stop()",
      answer: "b) close()",
    },
    {
      serialno: 16,
      question: "In Java, how do you declare an abstract method?",
      answer: "By using the `abstract` keyword without providing a method body.",
    },
    {
      serialno: 17,
      question: "What does CSS `display: flex;` do?",
      answer:
        "It makes the container a flex container and its children flex items, allowing for flexible layouts.",
    },
    {
      serialno: 18,
      question: "Which Git command would you use to create a new branch?",
      answer: "git branch <branch-name>",
    },
    {
      serialno: 19,
      question: "In SQL, what is the purpose of the `GROUP BY` clause?",
      answer:
        "It groups rows that have the same values into summary rows, typically used with aggregate functions like COUNT or SUM.",
    },
    {
      serialno: 20,
      question: "In Python, what will `print(list(range(5)))` output?",
      answer: "[0, 1, 2, 3, 4]",
    },
    {
      serialno: 21,
      question:
        "Which HTTP method is used to update a resource in a RESTful API?",
      answer: "PUT or PATCH",
    },
    {
      serialno: 22,
      question: "What is a `promise` in JavaScript?",
      answer:
        "A promise is an object representing the eventual completion or failure of an asynchronous operation.",
    },
    {
      serialno: 23,
      question:
        "In MongoDB, what is the difference between `findOne` and `find`?",
      answer:
        "`findOne` retrieves the first matching document, while `find` retrieves all matching documents.",
    },
    {
      serialno: 24,
      question:
        "Which of the following is used to style components in React? \n a) Inline Styles \n b) CSS Modules \n c) Styled-components \n d) All of the above",
      answer: "d) All of the above",
    },
    {
      serialno: 25,
      question: "In Git, what is the purpose of the `.gitignore` file?",
      answer:
        "To specify files and directories that should not be tracked by Git.",
    },
    {
      serialno: 26,
      question: "How do you declare a string in Python?",
      answer: "By using single or double quotes: 'hello' or \"hello\".",
    },
    {
      serialno: 27,
      question:
        "Which of the following CSS properties is used to set the spacing between lines of text? \n a) padding \n b) margin \n c) line-height \n d) text-spacing",
      answer: "c) line-height",
    },
    {
      serialno: 28,
      question: "In MySQL, what does the `WHERE` clause do?",
      answer:
        "It filters records to retrieve only those that meet specified conditions.",
    },
    {
      serialno: 29,
      question:
        "What is the purpose of the `componentDidMount` lifecycle method in React?",
      answer:
        "It runs after the component is mounted, often used for initializing state or making API calls.",
    },
    {
      serialno: 30,
      question:
        "In Java, what will the following code output?\n```java\nint[] arr = {1, 2, 3};\nSystem.out.println(arr[3]);\n```",
      answer: "ArrayIndexOutOfBoundsException",
    },
    {
      serialno: 31,
      question:
        "Which HTTP method is used to delete a resource in a RESTful API?",
      answer: "DELETE",
    },
    {
      serialno: 32,
      question: "What is the difference between `var` and `let` in JavaScript?",
      answer: "`var` has function scope, while `let` has block scope.",
    },
    {
      serialno: 33,
      question:
        "How do you find documents in MongoDB that match a specific field value?",
      answer: "Use `db.collection.find({field: value})`.",
    },
    {
      serialno: 34,
      question: "What does `npm install` do in a React project?",
      answer:
        "It installs all the dependencies listed in the `package.json` file.",
    },
    {
      serialno: 35,
      question:
        "What will the following Python code print?\n```python\nx = [1, 2, 3]\ny = x\nx.append(4)\nprint(y)\n```",
      answer: "[1, 2, 3, 4]",
    },
    {
      serialno: 36,
      question: "What is an `aggregate` function in SQL?",
      answer:
        "A function that performs a calculation on a set of values, returning a single value (e.g., SUM, COUNT, AVG).",
    },
    {
      serialno: 37,
      question: "What does the `POST` method do in a RESTful API?",
      answer: "It creates a new resource on the server.",
    },
    {
      serialno: 38,
      question:
        "Which lifecycle method in React is used to update the component after a state change?",
      answer: "`componentDidUpdate`",
    },
    {
      serialno: 39,
      question:
        "In JavaScript, what will the following code output?\n```javascript\nconsole.log(typeof null);\n```",
      answer: "object",
    },
    {
      serialno: 40,
      question: "In MySQL, how do you add a new column to an existing table?",
      answer: "ALTER TABLE table_name ADD column_name datatype;",
    },
    {
      serialno: 41,
      question:
        "In Python, what does `*args` and `**kwargs` do in function definitions?",
      answer:
        "`*args` allows a function to accept any number of positional arguments, while `**kwargs` accepts any number of keyword arguments.",
    },
    {
      serialno: 42,
      question:
        "What will the following Java code print?\n```java\nString s = null;\nSystem.out.println(s.length());\n```",
      answer: "NullPointerException",
    },
    {
      serialno: 43,
      question:
        "In CSS, how can you make an element invisible but still occupy space in the layout?",
      answer: "Use `visibility: hidden;`.",
    },
    {
      serialno: 44,
      question: "In JavaScript, how would you convert a string to a number?",
      answer: "Use `parseInt()`, `parseFloat()`, or the unary `+` operator.",
    },
    {
      serialno: 45,
      question: "In MySQL, what does the `UNION` operator do?",
      answer: "It combines the result sets of two or more SELECT queries.",
    },
    {
      serialno: 46,
      question: "How would you check for null values in MongoDB?",
      answer: "Use `{ field: null }` in the query.",
    },
    {
      serialno: 47,
      question: "What is a `stateful` component in React?",
      answer: "A component that holds and manages its own internal state.",
    },
    {
      serialno: 48,
      question: "Which command is used to clone a Git repository?",
      answer: "git clone <repository-url>",
    },
    {
      serialno: 49,
      question: "In Python, how do you reverse a list?",
      answer: "Use `list.reverse()` or `list[::-1]`.",
    },
    {
      serialno: 50,
      question: "What does the `HAVING` clause do in SQL?",
      answer:
        "It filters records after the `GROUP BY` clause, often used with aggregate functions.",
    },
    {
      serialno: 51,
      question: "What is the purpose of the `useEffect` hook in React?",
      answer:
        "It performs side effects in function components, such as data fetching or updating the DOM.",
    },
    {
      serialno: 52,
      question: "Which JavaScript function is used to delay code execution?",
      answer: "`setTimeout()`",
    },
    {
      serialno: 53,
      question: "How do you enforce unique values in a MongoDB collection?",
      answer: "Create a unique index on the field.",
    },
    {
      serialno: 54,
      question: "What is the difference between `SQL` and `NoSQL` databases?",
      answer:
        "SQL databases are relational and use structured query language, while NoSQL databases are non-relational and use dynamic schemas.",
    },
    {
      serialno: 55,
      question: "In Java, what is the `super` keyword used for?",
      answer:
        "To refer to the parent class's members (methods, constructors, or variables).",
    },
    {
      serialno: 56,
      question: "In CSS, what does the `z-index` property do?",
      answer: "It controls the vertical stacking order of elements.",
    },
    {
      serialno: 57,
      question: "In JavaScript, what does the `this` keyword refer to?",
      answer: "It refers to the current execution context or object.",
    },
    {
      serialno: 58,
      question: "In SQL, how do you delete duplicate records from a table?",
      answer:
        "Use a combination of `DELETE` and `ROW_NUMBER()` or `GROUP BY` clauses.",
    },
    {
      serialno: 59,
      question:
        "In Python, what will the following code print?\n```python\nprint('abc' * 3)\n```",
      answer: "abcabcabc",
    },
    {
      serialno: 60,
      question: "What is the `fetch()` API in JavaScript?",
      answer:
        "It's a modern way to make HTTP requests to servers and handle responses asynchronously.",
    },
    {
      serialno: 61,
      question: "In MongoDB, how do you create a new database?",
      answer:
        "Use `use <database-name>` to switch to a database or create it if it doesn't exist.",
    },
    {
      serialno: 62,
      question: "In React, what is the purpose of `prop-types`?",
      answer: "To validate and type-check props passed to components.",
    },
    {
      serialno: 63,
      question: "What does the `push` method do in Git?",
      answer:
        "It updates the remote repository with changes from the local repository.",
    },
    {
      serialno: 64,
      question: "In Python, what does the `continue` statement do in a loop?",
      answer: "It skips the current iteration and proceeds to the next one.",
    },
    {
      serialno: 65,
      question: "What does the `INNER JOIN` do in SQL?",
      answer:
        "It returns only the rows where there is a match in both tables being joined.",
    },
    {
      serialno: 66,
      question:
        "In RESTful APIs, what is the purpose of the `OPTIONS` HTTP method?",
      answer:
        "It is used to describe the communication options for the target resource.",
    },
    {
      serialno: 67,
      question: "In Java, what is polymorphism?",
      answer:
        "It is the ability of an object to take on many forms, typically referring to method overriding or method overloading.",
    },
    {
      serialno: 68,
      question: "In CSS, what does the `box-sizing` property control?",
      answer:
        "It determines how the total width and height of an element are calculated (including or excluding padding and borders).",
    },
    {
      serialno: 69,
      question: "What is a `closure` in JavaScript?",
      answer:
        "A closure is a function that remembers its lexical scope even when executed outside of that scope.",
    },
    {
      serialno: 70,
      question: "In SQL, how do you find records where a field is not null?",
      answer: "Use `WHERE field IS NOT NULL`.",
    },
    {
      serialno: 71,
      question: "In MongoDB, what is a `shard`?",
      answer:
        "A shard is a horizontal partition of data in a MongoDB database, used in a sharding architecture.",
    },
    {
      serialno: 72,
      question: "In React, what is JSX?",
      answer:
        "JSX is a syntax extension that allows writing HTML within JavaScript.",
    },
    {
      serialno: 73,
      question: "What does the `pull` method do in Git?",
      answer:
        "It fetches and merges changes from the remote repository to the local repository.",
    },
    {
      serialno: 74,
      question: "In Python, what does the `break` statement do in a loop?",
      answer: "It terminates the loop prematurely.",
    },
    {
      serialno: 75,
      question:
        "In MySQL, what is the difference between `CHAR` and `VARCHAR` data types?",
      answer:
        "`CHAR` is a fixed-length string, while `VARCHAR` is a variable-length string.",
    },
    {
      serialno: 76,
      question: "What is `CORS` in the context of RESTful APIs?",
      answer:
        "CORS stands for Cross-Origin Resource Sharing and is a mechanism that allows restricted resources to be requested from another domain.",
    },
    {
      serialno: 77,
      question: "In Java, how do you create an object of a class?",
      answer:
        "Use the `new` keyword followed by the class name, e.g., `new ClassName()`.",
    },
    {
      serialno: 78,
      question: "In CSS, how do you create a 3-column grid layout?",
      answer:
        "Use `display: grid;` and `grid-template-columns: repeat(3, 1fr);`.",
    },
    {
      serialno: 79,
      question: "In JavaScript, what does the `reduce` method do?",
      answer:
        "It applies a function to an accumulator and each element of the array (from left to right), reducing it to a single value.",
    },
    {
      serialno: 80,
      question: "In SQL, how do you add a foreign key to an existing table?",
      answer:
        "Use `ALTER TABLE table_name ADD CONSTRAINT constraint_name FOREIGN KEY (column_name) REFERENCES other_table (column_name);`",
    },
    {
      serialno: 81,
      question: "In Python, how do you create a virtual environment?",
      answer: "Use `python -m venv env_name` to create a virtual environment.",
    },
    {
      serialno: 82,
      question: "What does the `JOIN` operation do in SQL?",
      answer:
        "It combines rows from two or more tables based on a related column between them.",
    },
    {
      serialno: 83,
      question: "In Java, what is a constructor?",
      answer:
        "A constructor is a special method used to initialize objects in a class.",
    },
    {
      serialno: 84,
      question: "In CSS, how do you center an element horizontally?",
      answer:
        "Use `margin: 0 auto;` on a block-level element with a specified width.",
    },
    {
      serialno: 85,
      question: "In JavaScript, what is `async` and `await`?",
      answer:
        "`async` allows a function to return a promise, and `await` pauses the execution of the function until the promise resolves.",
    },
    {
      serialno: 86,
      question: "In SQL, what is the difference between `HAVING` and `WHERE`?",
      answer:
        "`WHERE` is used to filter records before grouping, while `HAVING` is used to filter groups after aggregation.",
    },
    {
      serialno: 87,
      question: "What is a `singleton` design pattern in software development?",
      answer:
        "A `singleton` ensures that a class has only one instance and provides a global point of access to it.",
    },
    {
      serialno: 88,
      question: "In Java, what is an interface?",
      answer:
        "An interface is a reference type in Java, similar to a class, that can contain only constants, method signatures, default methods, and static methods.",
    },
    {
      serialno: 89,
      question: "What does the `PUT` HTTP method do in RESTful APIs?",
      answer: "It is used to update or create a resource at a specific URL.",
    },
    {
      serialno: 90,
      question: "In Python, how do you handle exceptions?",
      answer: "Use a `try-except` block to catch and handle exceptions.",
    },
    {
      serialno: 91,
      question:
        "In CSS, what is the difference between `absolute` and `relative` positioning?",
      answer:
        "`relative` positions an element relative to its normal position, while `absolute` positions it relative to the nearest positioned ancestor.",
    },
    {
      serialno: 92,
      question: "In JavaScript, what is the difference between `==` and `===`?",
      answer:
        "`==` checks for equality after type coercion, while `===` checks for strict equality without type coercion.",
    },
    {
      serialno: 93,
      question: "In SQL, what does the `DISTINCT` keyword do?",
      answer: "It is used to return only distinct (different) values.",
    },
    {
      serialno: 94,
      question: "In Java, how do you create an immutable object?",
      answer:
        "Declare the class as `final`, make all fields `private final`, and provide no setter methods.",
    },
    {
      serialno: 95,
      question: "What is `localStorage` in JavaScript?",
      answer:
        "It's a web storage object that stores data with no expiration date, available even after the browser is closed.",
    },
    {
      serialno: 96,
      question: "In MySQL, how do you retrieve the current date and time?",
      answer: "Use the `NOW()` function.",
    },
    {
      serialno: 97,
      question: "In MongoDB, what is an `embedded document`?",
      answer:
        "An embedded document is a document stored inside another document.",
    },
    {
      serialno: 98,
      question: "In React, what is the `state` object?",
      answer:
        "`state` is an object that holds information about a component's current situation and can be changed over time.",
    },
    {
      serialno: 99,
      question: "In Git, how do you create a new branch?",
      answer: "Use `git branch <branch_name>`.",
    },
    {
      serialno: 100,
      question: "In Python, what is the difference between `list` and `tuple`?",
      answer:
        "`list` is mutable, meaning its elements can be changed, while `tuple` is immutable.",
    },
    {
      serialno: 101,
      question: "In SQL, what is a `primary key`?",
      answer: "A primary key is a unique identifier for each record in a table.",
    },
    {
      serialno: 102,
      question: "In Java, what is the `finally` block used for?",
      answer:
        "The `finally` block is executed after a `try` block, regardless of whether an exception was thrown or not.",
    },
    {
      serialno: 103,
      question: "In JavaScript, what does `JSON.stringify()` do?",
      answer: "It converts a JavaScript object or value into a JSON string.",
    },
    {
      serialno: 104,
      question: "In MySQL, what is the `AUTO_INCREMENT` attribute used for?",
      answer:
        "It automatically generates a unique number for new rows in a table.",
    },
    {
      serialno: 105,
      question: "In MongoDB, what is a `replica set`?",
      answer:
        "A replica set is a group of MongoDB servers that maintain the same data set, providing redundancy and high availability.",
    },
    {
      serialno: 106,
      question: "What is `componentDidMount()` in React?",
      answer:
        "It is a lifecycle method that gets called once, immediately after the component is inserted into the DOM.",
    },
    {
      serialno: 107,
      question: "In Git, what does `git stash` do?",
      answer:
        "It temporarily saves your local modifications so you can switch branches without committing changes.",
    },
    {
      serialno: 108,
      question: "In Python, how do you open a file for reading?",
      answer: "Use `open('filename', 'r')`.",
    },
    {
      serialno: 109,
      question: "In SQL, what does the `LIMIT` clause do?",
      answer: "It is used to specify the number of records to return.",
    },
    {
      serialno: 110,
      question: "In Java, what is a `static` method?",
      answer:
        "A `static` method belongs to the class rather than instances of the class and can be called without creating an object.",
    },
    {
      serialno: 111,
      question: "What is the purpose of `let` and `const` in JavaScript?",
      answer:
        "`let` allows you to declare variables that can be reassigned, while `const` declares variables that cannot be reassigned.",
    },
    {
      serialno: 112,
      question: "In MySQL, how do you create a new database?",
      answer: "Use `CREATE DATABASE database_name;`.",
    },
    {
      serialno: 113,
      question: "In MongoDB, what does the `$inc` operator do?",
      answer: "It increments a field by a specified value.",
    },
    {
      serialno: 114,
      question: "In React, what is a `functional component`?",
      answer:
        "A functional component is a JavaScript function that returns a React element and does not use `this` or manage state.",
    },
    {
      serialno: 115,
      question: "In Git, how do you undo the last commit?",
      answer: "Use `git reset --soft HEAD~1`.",
    },
    {
      serialno: 116,
      question: "In Python, what does the `is` operator do?",
      answer: "It checks if two variables point to the same object in memory.",
    },
    {
      serialno: 117,
      question: "In SQL, what is the `FOREIGN KEY` constraint?",
      answer: "It is a key used to link two tables together.",
    },
    {
      serialno: 118,
      question: "In Java, what is method overloading?",
      answer:
        "Method overloading is defining multiple methods with the same name but different parameters.",
    },
    {
      serialno: 119,
      question: "In CSS, what does the `float` property do?",
      answer:
        "It specifies whether an element should float to the left, right, or not at all.",
    },
    {
      serialno: 120,
      question: "In JavaScript, how do you create an object?",
      answer:
        "Use object literal syntax like `{ key: value }` or the `new Object()` constructor.",
    },
    {
      serialno: 121,
      question: "In SQL, what is a `JOIN` operation?",
      answer:
        "It is used to combine rows from two or more tables based on a related column between them.",
    },
    {
      serialno: 122,
      question: "In Java, what is an `abstract` class?",
      answer:
        "An `abstract` class is a class that cannot be instantiated and must be subclassed.",
    },
    {
      serialno: 123,
      question: "In MySQL, how do you select the top N rows?",
      answer: "Use `SELECT * FROM table_name LIMIT N;`.",
    },
    {
      serialno: 124,
      question: "In Python, what is a `decorator`?",
      answer:
        "A decorator is a function that takes another function and extends its behavior without modifying it.",
    },
    {
      serialno: 125,
      question: "In Git, how do you stage all changes in the current directory?",
      answer: "Use `git add .`.",
    },
    {
      serialno: 126,
      question: "In React, what is `state`?",
      answer:
        "`state` is an object that holds dynamic data and determines how a component behaves.",
    },
    {
      serialno: 127,
      question: "In JavaScript, what is the difference between `var` and `let`?",
      answer:
        "`var` is function-scoped and can be redeclared, while `let` is block-scoped and cannot be redeclared in the same scope.",
    },
    {
      serialno: 128,
      question: "In SQL, what does the `GROUP BY` clause do?",
      answer:
        "It groups rows that have the same values in specified columns into aggregate functions.",
    },
    {
      serialno: 129,
      question: "In Java, how do you implement inheritance?",
      answer:
        "By using the `extends` keyword, where one class inherits the properties and methods of another class.",
    },
    {
      serialno: 130,
      question:
        "In CSS, how do you apply styles to all child elements of a parent?",
      answer: "Use the child selector `parent > * { }`.",
    },
    {
      serialno: 131,
      question: "In Python, what does `len()` do?",
      answer: "It returns the length (number of items) of an object.",
    },
    {
      serialno: 132,
      question: "In MongoDB, what does the `$set` operator do?",
      answer: "It updates the value of a field in a document.",
    },
    {
      serialno: 133,
      question: "In JavaScript, what is `event bubbling`?",
      answer:
        "It is the process where an event starts from the target element and propagates upward to the ancestor elements.",
    },
    {
      serialno: 134,
      question: "In MySQL, how do you update data in a table?",
      answer:
        "Use `UPDATE table_name SET column_name = new_value WHERE condition;`.",
    },
    {
      serialno: 135,
      question: "In Git, how do you clone a repository?",
      answer: "Use `git clone <repository_url>`.",
    },
    {
      serialno: 136,
      question: "In Java, what is a `thread`?",
      answer:
        "A thread is a lightweight process and the smallest unit of processing in a Java program.",
    },
    {
      serialno: 137,
      question: "In MongoDB, what does the `$push` operator do?",
      answer: "It appends a value to an array field.",
    },
    {
      serialno: 138,
      question: "In Python, how do you create a dictionary?",
      answer: "Use the syntax `{key: value}` to create a dictionary.",
    },
    {
      serialno: 139,
      question: "In SQL, how do you delete data from a table?",
      answer: "Use `DELETE FROM table_name WHERE condition;`.",
    },
    {
      serialno: 140,
      question: "In React, what is a `prop`?",
      answer:
        "A `prop` (short for property) is a read-only object that is passed from a parent component to a child component.",
    },
    {
      serialno: 141,
      question: "In JavaScript, what is the purpose of `Promise.all()`?",
      answer:
        "`Promise.all()` takes an array of promises and returns a single promise that resolves when all promises in the array have resolved, or rejects if any promise in the array rejects.",
    },
    {
      serialno: 142,
      question: "In MySQL, how do you retrieve unique values from a column?",
      answer: "Use the `SELECT DISTINCT column_name FROM table_name;` query.",
    },
    {
      serialno: 143,
      question: "In Python, what does the `try...except` block do?",
      answer:
        "It handles exceptions by running the code inside the `try` block and executing the `except` block if an exception occurs.",
    },
    {
      serialno: 144,
      question: "In MongoDB, what does the `$pull` operator do?",
      answer:
        "It removes all instances of a value or values that match a condition from an array.",
    },
    {
      serialno: 145,
      question: "In React, what is a `controlled component`?",
      answer:
        "A controlled component is a component that gets its current value from `state` and updates it via `setState`.",
    },
    {
      serialno: 146,
      question: "In Git, how do you view the commit history?",
      answer: "Use the `git log` command.",
    },
    {
      serialno: 147,
      question: "In Java, what is the purpose of the `this` keyword?",
      answer: "The `this` keyword refers to the current instance of a class.",
    },
    {
      serialno: 148,
      question: "In HTML, what does the `alt` attribute of an `<img>` tag do?",
      answer:
        "The `alt` attribute specifies alternative text to display if the image cannot be loaded.",
    },
    {
      serialno: 149,
      question: "In MySQL, what is the purpose of the `JOIN` clause?",
      answer:
        "The `JOIN` clause is used to combine rows from two or more tables based on a related column between them.",
    },
    {
      serialno: 150,
      question: "In Python, what does `*args` do in a function definition?",
      answer:
        "`*args` allows a function to accept any number of positional arguments as a tuple.",
    },
    {
      serialno: 151,
      question: "In MongoDB, what does the `findOne()` method do?",
      answer:
        "The `findOne()` method returns the first document that matches the query criteria.",
    },
    {
      serialno: 152,
      question: "In React, what is `useEffect()`?",
      answer:
        "`useEffect()` is a Hook that lets you perform side effects in functional components, such as data fetching, subscriptions, or manually changing the DOM.",
    },
    {
      serialno: 153,
      question:
        "In Git, how do you push your local changes to a remote repository?",
      answer: "Use `git push origin <branch_name>`.",
    },
    {
      serialno: 154,
      question: "In Java, what is polymorphism?",
      answer:
        "Polymorphism allows objects of different types to be treated as instances of the same class, typically via inheritance.",
    },
    {
      serialno: 155,
      question: "In JavaScript, what is an `arrow function`?",
      answer:
        "An `arrow function` is a concise syntax for writing functions, using the `=>` symbol, with no binding to the `this` keyword.",
    },
    {
      serialno: 156,
      question: "In MySQL, what does the `ORDER BY` clause do?",
      answer:
        "The `ORDER BY` clause sorts the result set of a query by one or more columns.",
    },
    {
      serialno: 157,
      question: "In Python, what is a `lambda` function?",
      answer:
        "A `lambda` function is an anonymous function defined with the `lambda` keyword and is typically used for short, throwaway functions.",
    },
    {
      serialno: 158,
      question: "In MongoDB, what does the `updateMany()` method do?",
      answer:
        "The `updateMany()` method updates all documents that match the query criteria.",
    },
    {
      serialno: 159,
      question: "In React, what is a `key` prop and why is it important?",
      answer:
        "The `key` prop is used to uniquely identify elements in a list, helping React optimize rendering by keeping track of elements efficiently.",
    },
    {
      serialno: 160,
      question: "In Git, how do you create a tag?",
      answer: "Use `git tag <tag_name>` to create a new tag.",
    },
    {
      serialno: 161,
      question: "In Java, what is a `constructor`?",
      answer:
        "A constructor is a special method that is called when an object is instantiated. It initializes the object.",
    },
    {
      serialno: 162,
      question: "In JavaScript, what is the `DOM`?",
      answer:
        "The `DOM` (Document Object Model) is a programming interface for web documents, representing the page so that programs can manipulate its structure, style, and content.",
    },
    {
      serialno: 163,
      question: "In MySQL, what is a `primary key`?",
      answer:
        "A `primary key` is a field or combination of fields that uniquely identifies a row in a table.",
    },
    {
      serialno: 164,
      question: "In Python, what is `self` in class methods?",
      answer:
        "`self` represents the instance of the class and is used to access variables that belong to the class.",
    },
    {
      serialno: 165,
      question: "In MongoDB, what does the `aggregate()` function do?",
      answer:
        "The `aggregate()` function is used to process data records and return computed results based on a pipeline of operations.",
    },
    {
      serialno: 166,
      question: "In React, what is the difference between `state` and `props`?",
      answer:
        "`props` are read-only and passed from a parent component, while `state` is a local, mutable object managed within a component.",
    },
    {
      serialno: 167,
      question:
        "In Git, how do you remove a file from the staging area without deleting it from the working directory?",
      answer: "Use `git reset HEAD <file>`.",
    },
    {
      serialno: 168,
      question: "In Java, what is the purpose of an `interface`?",
      answer:
        "An `interface` is a reference type that contains abstract methods, which must be implemented by any class that implements the interface.",
    },
    {
      serialno: 169,
      question: "In HTML, what is the `meta` tag used for?",
      answer:
        "The `meta` tag provides metadata about the HTML document, such as character set, description, and keywords.",
    },
    {
      serialno: 170,
      question: "In MySQL, how do you delete a table?",
      answer: "Use the `DROP TABLE table_name;` query.",
    },
    {
      serialno: 171,
      question: "In Python, what is a `set`?",
      answer: "A `set` is an unordered collection of unique elements in Python.",
    },
    {
      serialno: 172,
      question: "In MongoDB, what is a `collection`?",
      answer:
        "A `collection` is a group of documents, similar to a table in relational databases.",
    },
    {
      serialno: 173,
      question: "In React, what is the `ref` attribute used for?",
      answer:
        "`ref` is used to access DOM nodes or React elements created in the render method.",
    },
    {
      serialno: 174,
      question: "In Git, how do you check the status of your repository?",
      answer: "Use the `git status` command.",
    },
    {
      serialno: 175,
      question: "In Java, what is the `default` keyword used for in interfaces?",
      answer:
        "The `default` keyword allows an interface to have methods with a default implementation.",
    },
    {
      serialno: 176,
      question: "In JavaScript, how do you convert a string to an integer?",
      answer: "Use `parseInt()` or the unary `+` operator.",
    },
    {
      serialno: 177,
      question: "In MySQL, what does the `COUNT()` function do?",
      answer: "It returns the number of rows that match a specified condition.",
    },
    {
      serialno: 178,
      question:
        "In Python, how do you handle file operations to ensure that a file is properly closed?",
      answer:
        "Use the `with` statement to open the file, which ensures it is closed automatically after the block of code is executed.",
    },
    {
      serialno: 179,
      question: "In MongoDB, what is `sharding`?",
      answer:
        "Sharding is a method for distributing data across multiple machines in MongoDB to support large-scale applications.",
    },
    {
      serialno: 180,
      question: "In React, what is `context`?",
      answer:
        "`context` is a way to pass data through the component tree without having to pass props down manually at every level.",
    },
    {
      serialno: 181,
      question: "In Git, how do you create a new branch?",
      answer: "Use `git checkout -b <branch_name>` to create a new branch.",
    },
    {
      serialno: 182,
      question: "In Java, what is the `final` keyword used for?",
      answer:
        "The `final` keyword is used to create constants or prevent method overriding and inheritance.",
    },
    {
      serialno: 183,
      question:
        "In HTML, what is the `href` attribute used for in an anchor (`<a>`) tag?",
      answer:
        "The `href` attribute specifies the URL of the page the link goes to.",
    },
    {
      serialno: 184,
      question: "In MySQL, what does the `GROUP BY` clause do?",
      answer:
        "The `GROUP BY` clause groups rows that have the same values in specified columns into summary rows.",
    },
    {
      serialno: 185,
      question: "In Python, what does the `enumerate()` function do?",
      answer:
        "The `enumerate()` function adds a counter to an iterable and returns it in the form of an enumerating object.",
    },
    {
      serialno: 186,
      question: "In MongoDB, what is the `replica set`?",
      answer:
        "A `replica set` is a group of MongoDB servers that maintain the same data set, providing redundancy and failover.",
    },
    {
      serialno: 187,
      question:
        "In React, how can you optimize performance for a large list of items?",
      answer:
        "By using techniques such as `lazy loading`, `windowing` with libraries like `react-window`, and ensuring proper `key` props for list items.",
    },
    {
      serialno: 188,
      question: "In Git, how do you revert to a previous commit?",
      answer:
        "Use `git reset --hard <commit_id>` to revert the repository to a specific commit.",
    },
    {
      serialno: 189,
      question: "In Java, what is the difference between `==` and `equals()`?",
      answer:
        "`==` compares object references, while `equals()` compares the content of the objects.",
    },
    {
      serialno: 190,
      question: "In HTML, what does the `<form>` element represent?",
      answer:
        "The `<form>` element represents a section of a document that contains interactive controls for submitting information.",
    },
    {
      serialno: 191,
      question: "In MySQL, how do you add a new column to an existing table?",
      answer: "Use the `ALTER TABLE table_name ADD column_name datatype;` query.",
    },
    {
      serialno: 192,
      question: "In Python, what is a `list comprehension`?",
      answer:
        "A `list comprehension` is a concise way to create lists by iterating over an iterable and applying a condition or operation.",
    },
    {
      serialno: 193,
      question:
        "In MongoDB, what does the `upsert` option do in an update operation?",
      answer:
        "If `upsert` is set to `true`, it will insert a new document if no document matches the query criteria.",
    },
    {
      serialno: 194,
      question: "In React, what is `memo`?",
      answer:
        "`memo` is a higher-order component that prevents a component from re-rendering if its props have not changed.",
    },
    {
      serialno: 195,
      question: "In Git, what does `git stash` do?",
      answer:
        "It temporarily saves changes that are not yet ready to be committed, allowing you to work on something else without losing the changes.",
    },
    {
      serialno: 196,
      question: "In Java, what is an `enum`?",
      answer:
        "An `enum` is a special Java type used to define collections of constants.",
    },
    {
      serialno: 197,
      question: "In JavaScript, what is the `spread` operator?",
      answer:
        "The `spread` operator (`...`) expands an array or object into its individual elements or properties.",
    },
    {
      serialno: 198,
      question: "In MySQL, what does the `HAVING` clause do?",
      answer:
        "The `HAVING` clause is used to filter records after the `GROUP BY` clause has been applied.",
    },
    {
      serialno: 199,
      question: "In Python, what does the `zip()` function do?",
      answer:
        "The `zip()` function takes two or more iterables and returns an iterator of tuples, where each tuple contains one element from each iterable.",
    },
    {
      serialno: 200,
      question: "In MongoDB, what does the `mapReduce` function do?",
      answer:
        "The `mapReduce` function performs aggregation by applying map and reduce functions to the data.",
    },
    {
      serialno: 201,
      question: "In React, what is a `higher-order component`?",
      answer:
        "A higher-order component is a function that takes a component and returns a new component, allowing for code reuse.",
    },
    {
      serialno: 202,
      question: "In Git, how do you see the changes made to a file?",
      answer: "Use `git diff <file>` to see the changes made to a specific file.",
    },
    {
      serialno: 203,
      question: "In Java, what is an `abstract class`?",
      answer:
        "An abstract class is a class that cannot be instantiated and can contain abstract methods that must be implemented by subclasses.",
    },
    {
      serialno: 204,
      question: "In JavaScript, how do you create an object?",
      answer:
        "You can create an object using object literal notation: `const obj = { key: value };`.",
    },
    {
      serialno: 205,
      question:
        "In MySQL, what is the difference between `INNER JOIN` and `LEFT JOIN`?",
      answer:
        "An `INNER JOIN` returns only the rows that have matching values in both tables, while a `LEFT JOIN` returns all rows from the left table and the matched rows from the right table.",
    },
    {
      serialno: 206,
      question: "In Python, how do you check if a key exists in a dictionary?",
      answer: "Use the `in` keyword: `if key in my_dict:`.",
    },
    {
      serialno: 207,
      question: "In MongoDB, what is a `document`?",
      answer:
        "A document is a basic unit of data in MongoDB, represented as a JSON-like object.",
    },
    {
      serialno: 208,
      question: "In React, what is `useState()`?",
      answer:
        "`useState()` is a Hook that allows you to add state to functional components.",
    },
    {
      serialno: 209,
      question: "In Git, what does the `git reset` command do?",
      answer:
        "The `git reset` command undoes commits by moving the current branch pointer to a specified state.",
    },
    {
      serialno: 210,
      question: "In Java, how do you handle exceptions?",
      answer: "You handle exceptions using `try`, `catch`, and `finally` blocks.",
    },
    {
      serialno: 211,
      question: "In JavaScript, what is a `closure`?",
      answer:
        "A closure is a function that retains access to its lexical scope, even when the function is executed outside that scope.",
    },
    {
      serialno: 212,
      question: "In MySQL, what does the `ALTER` statement do?",
      answer:
        "The `ALTER` statement is used to modify an existing database object, such as a table.",
    },
    {
      serialno: 213,
      question: "In Python, what is the `map()` function?",
      answer:
        "The `map()` function applies a given function to all items in an iterable and returns a map object.",
    },
    {
      serialno: 214,
      question: "In MongoDB, how do you create an index?",
      answer:
        "Use the `createIndex()` method on a collection to create an index.",
    },
    {
      serialno: 215,
      question: "In React, what is `setState()`?",
      answer:
        "`setState()` is a method that updates the component's state and triggers a re-render.",
    },
    {
      serialno: 216,
      question: "In Git, how do you merge branches?",
      answer:
        "Use `git merge <branch_name>` to merge another branch into the current branch.",
    },
    {
      serialno: 217,
      question: "In Java, what is `String immutability`?",
      answer:
        "Strings in Java are immutable, meaning that once a string object is created, it cannot be changed.",
    },
    {
      serialno: 218,
      question:
        "In JavaScript, what is the difference between `null` and `undefined`?",
      answer:
        "`null` is an assigned value representing no value, while `undefined` means a variable has been declared but not assigned a value.",
    },
    {
      serialno: 219,
      question: "In MySQL, what is the purpose of the `UNION` operator?",
      answer:
        "The `UNION` operator is used to combine the result sets of two or more SELECT statements.",
    },
    {
      serialno: 220,
      question: "In Python, what does the `filter()` function do?",
      answer:
        "The `filter()` function constructs an iterator from elements of an iterable for which a function returns true.",
    },
    {
      serialno: 221,
      question: "In MongoDB, what is a `schema`?",
      answer:
        "A schema defines the structure of a document, including the fields and their types.",
    },
    {
      serialno: 222,
      question: "In React, what are `hooks`?",
      answer:
        "Hooks are functions that let you use state and other React features in functional components.",
    },
    {
      serialno: 223,
      question: "In Git, what is a `remote`?",
      answer:
        "A remote is a version of your project that is hosted on the internet or network somewhere.",
    },
    {
      serialno: 224,
      question: "In Java, what is the `instanceof` operator used for?",
      answer:
        "The `instanceof` operator is used to test whether an object is an instance of a specific class or subclass.",
    },
    {
      serialno: 225,
      question: "In JavaScript, what is the purpose of `localStorage`?",
      answer:
        "`localStorage` is used to store data in the browser with no expiration time, accessible across browser sessions.",
    },
    {
      serialno: 226,
      question: "In MySQL, what does the `LIKE` operator do?",
      answer:
        "The `LIKE` operator is used to search for a specified pattern in a column.",
    },
    {
      serialno: 227,
      question: "In Python, how do you create a class?",
      answer: "Use the `class` keyword: `class MyClass:`.",
    },
    {
      serialno: 228,
      question: "In MongoDB, what is the purpose of the `find()` method?",
      answer:
        "The `find()` method retrieves documents from a collection that match the specified criteria.",
    },
    {
      serialno: 229,
      question:
        "In React, what is the difference between `class components` and `functional components`?",
      answer:
        "Class components can hold and manage their own state and lifecycle methods, while functional components are simpler and can use Hooks for state and lifecycle.",
    },
    {
      serialno: 230,
      question: "In Git, what is a `branch`?",
      answer: "A branch is a separate line of development in a Git repository.",
    },
    {
      serialno: 231,
      question: "In Java, what is method overloading?",
      answer:
        "Method overloading allows multiple methods in the same class to have the same name with different parameters.",
    },
    {
      serialno: 232,
      question:
        "In JavaScript, how do you prevent a default action in an event handler?",
      answer: "Use `event.preventDefault()` within the event handler.",
    },
    {
      serialno: 233,
      question: "In MySQL, what does the `CREATE TABLE` statement do?",
      answer: "The `CREATE TABLE` statement creates a new table in the database.",
    },
    {
      serialno: 234,
      question: "In Python, how do you raise an exception?",
      answer: "Use the `raise` keyword: `raise Exception('error message')`.",
    },
    {
      serialno: 235,
      question: "In MongoDB, how do you drop a collection?",
      answer: "Use the `drop()` method on the collection.",
    },
    {
      serialno: 236,
      question: "In React, what is `prop drilling`?",
      answer:
        "Prop drilling refers to passing data through multiple layers of components, which can lead to cumbersome code.",
    },
    {
      serialno: 237,
      question: "In Git, how do you revert a commit?",
      answer:
        "Use `git revert <commit_id>` to create a new commit that undoes the changes from the specified commit.",
    },
    {
      serialno: 238,
      question: "In Java, what are the main principles of `OOP`?",
      answer:
        "The main principles of OOP are encapsulation, inheritance, abstraction, and polymorphism.",
    },
    {
      serialno: 239,
      question: "In JavaScript, what is the `this` keyword?",
      answer:
        "The `this` keyword refers to the context in which a function is called.",
    },
  
    {
      serialno: 241,
      question: "In Python, what is the purpose of `__init__` method?",
      answer:
        "The `__init__` method is a constructor that initializes the object's attributes.",
    },
    {
      serialno: 242,
      question:
        "In MongoDB, what is the difference between `findOne()` and `find()`?",
      answer:
        "`findOne()` returns a single document, while `find()` returns a cursor to multiple documents.",
    },
    {
      serialno: 243,
      question: "In React, what is `useEffect()` used for?",
      answer:
        "`useEffect()` is used to perform side effects in functional components, such as data fetching or subscriptions.",
    },
    {
      serialno: 244,
      question: "In Git, what is a `merge conflict`?",
      answer:
        "A merge conflict occurs when changes from different branches cannot be automatically merged.",
    },
    {
      serialno: 245,
      question: "In Java, what is the purpose of the `super` keyword?",
      answer:
        "The `super` keyword refers to the parent class and is used to call parent class methods or constructors.",
    },
    {
      serialno: 246,
      question: "In JavaScript, what is an `event`?",
      answer:
        "An event is an action or occurrence that can be detected by JavaScript, such as user interactions.",
    },
    {
      serialno: 247,
      question: "In MySQL, how do you delete a record from a table?",
      answer: "Use the `DELETE FROM table_name WHERE condition;` statement.",
    },
    {
      serialno: 248,
      question: "In Python, what is a `lambda` function?",
      answer:
        "A `lambda` function is a small anonymous function defined with the `lambda` keyword.",
    },
    {
      serialno: 249,
      question: "In MongoDB, what is a `collection`?",
      answer: "A collection is a group of related documents in a database.",
    },
    {
      serialno: 250,
      question: "In React, what are `controlled components`?",
      answer:
        "Controlled components are form components that derive their value from state and notify changes via callbacks.",
    },
    {
      serialno: 251,
      question: "In Git, how do you view your commit history?",
      answer: "Use `git log` to view the commit history.",
    },
    {
      serialno: 252,
      question: "In Java, what is a `constructor`?",
      answer:
        "A constructor is a special method that is called when an object is instantiated.",
    },
    {
      serialno: 253,
      question: "In JavaScript, what is the purpose of `async/await`?",
      answer:
        "`async/await` is used to handle asynchronous operations more easily, making the code look synchronous.",
    },
    {
      serialno: 254,
      question: "In MySQL, how do you create an index?",
      answer:
        "Use the `CREATE INDEX index_name ON table_name (column_name);` statement.",
    },
    {
      serialno: 255,
      question: "In Python, how do you read a file?",
      answer: "Use the `open()` function with the mode `'r'` to read a file.",
    },
    {
      serialno: 256,
      question: "In MongoDB, what is the `aggregate()` function used for?",
      answer:
        "The `aggregate()` function is used to process data and return computed results.",
    },
    {
      serialno: 257,
      question: "In React, what is the purpose of `keys` in lists?",
      answer:
        "Keys help React identify which items have changed, are added, or are removed, optimizing rendering.",
    },
    {
      serialno: 258,
      question: "In Git, how do you clone a repository?",
      answer:
        "Use `git clone <repository_url>` to create a local copy of a remote repository.",
    },
    {
      serialno: 259,
      question: "In Java, what is an `interface`?",
      answer:
        "An interface is a reference type that defines a contract for classes to implement.",
    },
    {
      serialno: 260,
      question: "In JavaScript, what are `Promises`?",
      answer:
        "Promises are objects that represent the eventual completion or failure of an asynchronous operation.",
    },
    {
      serialno: 261,
      question: "In MySQL, how do you perform a `JOIN`?",
      answer:
        "Use the `JOIN` clause in a `SELECT` statement to combine rows from two or more tables.",
    },
    {
      serialno: 262,
      question: "In Python, what is `self`?",
      answer:
        "`self` is a reference to the current instance of the class, used to access instance variables.",
    },
    {
      serialno: 263,
      question: "In MongoDB, what is the purpose of the `_id` field?",
      answer:
        "The `_id` field uniquely identifies each document within a collection.",
    },
    {
      serialno: 264,
      question: "In React, what is a `ref`?",
      answer:
        "A `ref` is used to access a DOM element or a class component instance directly.",
    },
    {
      serialno: 265,
      question: "In Git, what is `git fetch`?",
      answer:
        "`git fetch` retrieves updates from a remote repository without merging them into your local branch.",
    },
    {
      serialno: 266,
      question: "In Java, what is the `this` keyword?",
      answer:
        "The `this` keyword refers to the current object in a method or constructor.",
    },
    {
      serialno: 267,
      question: "In JavaScript, what is the purpose of `setTimeout()`?",
      answer:
        "`setTimeout()` executes a function after a specified number of milliseconds.",
    },
    {
      serialno: 268,
      question: "In MySQL, how do you drop a table?",
      answer: "Use the `DROP TABLE table_name;` statement to delete a table.",
    },
    {
      serialno: 269,
      question: "In Python, how do you install a package using pip?",
      answer: "Use `pip install package_name` to install a package.",
    },
    {
      serialno: 270,
      question: "In MongoDB, how do you update a document?",
      answer:
        "Use the `updateOne()` or `updateMany()` methods to modify existing documents.",
    },
    {
      serialno: 271,
      question: "In React, what is `context API`?",
      answer:
        "The context API is a way to share values between components without passing props through every level.",
    },
    {
      serialno: 272,
      question: "In Git, what is a `pull request`?",
      answer:
        "A pull request is a method of submitting contributions to a project, requesting that changes made in a branch be merged into another branch.",
    },
    {
      serialno: 273,
      question:
        "In Java, what is the difference between `abstract` class and `interface`?",
      answer:
        "An abstract class can have method implementations, while an interface can only declare methods.",
    },
    {
      serialno: 274,
      question: "In JavaScript, how do you handle errors using `try...catch`?",
      answer:
        "Wrap the code that may throw an error in a `try` block, followed by a `catch` block to handle the error.",
    },
    {
      serialno: 275,
      question: "In MySQL, what is the purpose of the `COUNT()` function?",
      answer:
        "The `COUNT()` function returns the number of rows that match a specified condition.",
    },
    {
      serialno: 276,
      question: "In Python, what is the purpose of the `with` statement?",
      answer:
        "The `with` statement simplifies exception handling by encapsulating common preparation and cleanup tasks.",
    },
    {
      serialno: 277,
      question: "In MongoDB, what is `sharding`?",
      answer:
        "Sharding is a method for distributing data across multiple servers to ensure scalability.",
    },
    {
      serialno: 278,
      question: "In React, how can you conditionally render a component?",
      answer:
        "You can conditionally render a component using JavaScript expressions like ternary operators or `if` statements.",
    },
    {
      serialno: 279,
      question: "In Git, what does `git push` do?",
      answer:
        "`git push` uploads local repository content to a remote repository.",
    },
    {
      serialno: 280,
      question: "In Java, what is `inheritance`?",
      answer:
        "Inheritance is a mechanism where one class can inherit fields and methods from another class.",
    },
    {
      serialno: 281,
      question: "In JavaScript, what is an `IIFE`?",
      answer:
        "An IIFE (Immediately Invoked Function Expression) is a function that runs as soon as it is defined.",
    },
    {
      serialno: 282,
      question: "In MySQL, how do you use the `LIKE` operator?",
      answer:
        "The `LIKE` operator is used to search for a specified pattern in a column.",
    },
    {
      serialno: 283,
      question: "In Python, how do you create a virtual environment?",
      answer: "Use `python -m venv env_name` to create a virtual environment.",
    },
    {
      serialno: 284,
      question: "In MongoDB, how do you create an index?",
      answer:
        "Use the `createIndex()` method to create an index on a collection.",
    },
    {
      serialno: 285,
      question: "In React, what are `hooks`?",
      answer:
        "Hooks are functions that let you use state and other React features in functional components.",
    },
    {
      serialno: 286,
      question: "In Git, what is `rebase`?",
      answer:
        "Rebase is a way to integrate changes from one branch into another by moving or combining a sequence of commits.",
    },
    {
      serialno: 287,
      question: "In Java, what is an `enum`?",
      answer:
        "An enum is a special Java type used to define collections of constants.",
    },
    {
      serialno: 288,
      question: "In JavaScript, what is the difference between `==` and `===`?",
      answer:
        "The `==` operator checks for value equality, while `===` checks for both value and type equality.",
    },
    {
      serialno: 289,
      question: "In MySQL, how do you update a record?",
      answer:
        "Use the `UPDATE table_name SET column1 = value1 WHERE condition;` statement.",
    },
    {
      serialno: 290,
      question: "In Python, what is a list comprehension?",
      answer:
        "A list comprehension is a concise way to create lists based on existing lists.",
    },
    {
      serialno: 291,
      question: "In MongoDB, how do you perform a query?",
      answer: "Use the `find()` method to perform a query on a collection.",
    },
    {
      serialno: 292,
      question: "In React, what is `props drilling`?",
      answer:
        "Props drilling is the process of passing data through many levels of components.",
    },
    {
      serialno: 293,
      question: "In Git, how do you create a new branch?",
      answer: "Use `git branch branch_name` to create a new branch.",
    },
    {
      serialno: 294,
      question: "In Java, what is the `final` keyword?",
      answer:
        "The `final` keyword is used to declare constants, prevent method overriding, and inheritance.",
    },
    {
      serialno: 295,
      question: "In JavaScript, what is `localStorage`?",
      answer:
        "`localStorage` is a web storage mechanism that allows you to store data in the browser persistently.",
    },
    {
      serialno: 296,
      question: "In MySQL, how do you count the number of records?",
      answer:
        "Use `SELECT COUNT(*) FROM table_name;` to count records in a table.",
    },
    {
      serialno: 297,
      question: "In Python, how do you handle exceptions?",
      answer: "Use `try` and `except` blocks to handle exceptions.",
    },
    {
      serialno: 298,
      question: "In MongoDB, how do you drop a collection?",
      answer: "Use the `drop()` method on the collection to remove it.",
    },
    {
      serialno: 299,
      question: "In React, what is `state lifting`?",
      answer:
        "State lifting is moving state to a common ancestor component to share data between sibling components.",
    },
    {
      serialno: 300,
      question: "In Git, what is a `stash`?",
      answer:
        "A stash is a way to save changes temporarily without committing them.",
    },
    {
      serialno: 301,
      question: "In Java, what is polymorphism?",
      answer:
        "Polymorphism allows methods to do different things based on the object it is acting upon.",
    },
    {
      serialno: 302,
      question: "In JavaScript, how do you create a function?",
      answer:
        "Use the `function` keyword or an arrow function syntax (e.g., `const myFunction = () => {}`) to create a function.",
    },
    {
      serialno: 303,
      question:
        "In MySQL, what is the difference between `INNER JOIN` and `LEFT JOIN`?",
      answer:
        "An `INNER JOIN` returns records that have matching values in both tables, while a `LEFT JOIN` returns all records from the left table and matched records from the right table.",
    },
    {
      serialno: 304,
      question: "In Python, how do you define a function?",
      answer:
        "Use the `def` keyword followed by the function name and parentheses (e.g., `def my_function():`).",
    },
    {
      serialno: 305,
      question:
        "In MongoDB, how do you find documents that match multiple criteria?",
      answer:
        "Use the `find()` method with a query object that specifies multiple conditions.",
    },
    {
      serialno: 306,
      question: "In React, what are `higher-order components`?",
      answer:
        "Higher-order components are functions that take a component and return a new component, often used for reusing component logic.",
    },
    {
      serialno: 307,
      question: "In Git, how do you switch branches?",
      answer: "Use `git checkout branch_name` to switch to a different branch.",
    },
    {
      serialno: 308,
      question: "In Java, what is an `access modifier`?",
      answer:
        "Access modifiers control the visibility of classes, methods, and variables (e.g., `public`, `private`, `protected`).",
    },
    {
      serialno: 309,
      question: "In JavaScript, what is a closure?",
      answer:
        "A closure is a function that retains access to its lexical scope, even when the function is executed outside that scope.",
    },
    {
      serialno: 310,
      question: "In MySQL, how do you sort results?",
      answer:
        "Use the `ORDER BY` clause in a `SELECT` statement to sort results.",
    },
    {
      serialno: 311,
      question: "In Python, what is a tuple?",
      answer:
        "A tuple is an immutable sequence type used to store a collection of items.",
    },
    {
      serialno: 312,
      question: "In MongoDB, what is `replication`?",
      answer:
        "Replication is the process of synchronizing data across multiple servers for redundancy and availability.",
    },
    {
      serialno: 313,
      question: "In React, what is `React Router` used for?",
      answer:
        "React Router is used for routing in a React application, enabling navigation between different components.",
    },
    {
      serialno: 314,
      question: "In Git, what is a `commit`?",
      answer:
        "A commit is a snapshot of your changes in the repository, with a unique identifier.",
    },
    {
      serialno: 315,
      question: "In Java, what is an `abstract class`?",
      answer:
        "An abstract class cannot be instantiated and can contain abstract methods that must be implemented by subclasses.",
    },
    {
      serialno: 316,
      question: "In JavaScript, what is the `this` context?",
      answer:
        "The `this` context refers to the object that is currently executing the function.",
    },
    {
      serialno: 317,
      question: "In MySQL, what does the `GROUP BY` clause do?",
      answer:
        "The `GROUP BY` clause groups rows that have the same values in specified columns into summary rows.",
    },
    {
      serialno: 318,
      question: "In Python, how do you convert a string to an integer?",
      answer: "Use the `int()` function to convert a string to an integer.",
    },
    {
      serialno: 319,
      question: "In MongoDB, what is a `document`?",
      answer:
        "A document is a set of key-value pairs and is the basic unit of data in MongoDB.",
    },
    {
      serialno: 320,
      question: "In React, how do you handle forms?",
      answer:
        "You handle forms using controlled components, managing the form state with React's state.",
    },
    {
      serialno: 321,
      question: "In Git, what is a `remote`?",
      answer:
        "A remote is a version of your project that is hosted on the internet or another network.",
    },
    {
      serialno: 322,
      question: "In Java, how do you implement an interface?",
      answer:
        "Use the `implements` keyword in the class declaration to implement an interface.",
    },
    {
      serialno: 323,
      question: "In JavaScript, what is `event delegation`?",
      answer:
        "Event delegation is a technique to handle events at a higher level in the DOM rather than attaching events to individual elements.",
    },
    {
      serialno: 324,
      question: "In MySQL, how do you retrieve unique values?",
      answer:
        "Use the `DISTINCT` keyword in a `SELECT` statement to retrieve unique values.",
    },
    {
      serialno: 325,
      question: "In Python, how do you concatenate strings?",
      answer:
        "Use the `+` operator or the `join()` method to concatenate strings.",
    },
    {
      serialno: 326,
      question: "In MongoDB, how do you sort query results?",
      answer:
        "Use the `sort()` method to specify the order of documents returned by a query.",
    },
    {
      serialno: 327,
      question: "In React, what is a `fragment`?",
      answer:
        "A fragment is a lightweight way to group multiple elements without adding extra nodes to the DOM.",
    },
    {
      serialno: 328,
      question: "In Git, how do you merge branches?",
      answer:
        "Use `git merge branch_name` to merge a specified branch into your current branch.",
    },
    {
      serialno: 329,
      question: "In Java, what is `exception handling`?",
      answer:
        "Exception handling is the process of responding to the occurrence of exceptions using `try`, `catch`, and `finally` blocks.",
    },
    {
      serialno: 330,
      question: "In JavaScript, what is `JSON`?",
      answer:
        "JSON (JavaScript Object Notation) is a lightweight data interchange format that is easy for humans to read and write.",
    },
    {
      serialno: 331,
      question: "In MySQL, what does the `HAVING` clause do?",
      answer:
        "The `HAVING` clause is used to filter records after a `GROUP BY` has been applied.",
    },
    {
      serialno: 332,
      question: "In Python, how do you handle multiple exceptions?",
      answer:
        "Use multiple `except` clauses or a single `except` with a tuple of exceptions.",
    },
    {
      serialno: 333,
      question: "In MongoDB, how do you use `limit()`?",
      answer:
        "Use the `limit()` method to specify the maximum number of documents to return from a query.",
    },
    {
      serialno: 334,
      question: "In React, what are `propTypes`?",
      answer:
        "PropTypes are a way to validate the props that a component receives.",
    },
    {
      serialno: 335,
      question: "In Git, what is `cherry-pick`?",
      answer:
        "Cherry-pick allows you to apply the changes introduced by existing commits to your current branch.",
    },
    {
      serialno: 336,
      question: "In Java, what is `garbage collection`?",
      answer:
        "Garbage collection is the process of automatically freeing memory by reclaiming objects that are no longer in use.",
    },
    {
      serialno: 337,
      question: "In JavaScript, how do you create an object?",
      answer:
        "You can create an object using an object literal (e.g., `{ key: value }`) or by using the `new Object()` syntax.",
    },
    {
      serialno: 338,
      question: "In MySQL, how do you create a new database?",
      answer:
        "Use the `CREATE DATABASE database_name;` statement to create a new database.",
    },
    {
      serialno: 339,
      question: "In Python, how do you loop through a dictionary?",
      answer:
        "You can loop through a dictionary using a `for` loop to iterate over its keys or values.",
    },
    {
      serialno: 340,
      question:
        "In MongoDB, what is the purpose of the `findOneAndUpdate()` method?",
      answer:
        "The `findOneAndUpdate()` method finds a single document and updates it in one atomic operation.",
    },
    {
      serialno: 341,
      question: "In React, what is `useEffect`?",
      answer:
        "The `useEffect` hook allows you to perform side effects in function components.",
    },
    {
      serialno: 342,
      question: "In Git, how do you view the commit history?",
      answer: "Use `git log` to view the commit history of the repository.",
    },
    {
      serialno: 343,
      question:
        "In Java, what is the difference between `String` and `StringBuilder`?",
      answer:
        "String is immutable, while StringBuilder is mutable and can be modified without creating a new object.",
    },
    {
      serialno: 344,
      question: "In JavaScript, how do you check if an array includes a value?",
      answer:
        "Use the `includes()` method to check if an array includes a certain value.",
    },
    {
      serialno: 345,
      question:
        "In MySQL, what is the purpose of the `AUTO_INCREMENT` attribute?",
      answer:
        "The `AUTO_INCREMENT` attribute automatically generates a unique number for each new row in a table.",
    },
    {
      serialno: 346,
      question: "In Python, what is a dictionary comprehension?",
      answer:
        "A dictionary comprehension is a concise way to create dictionaries based on existing dictionaries.",
    },
    {
      serialno: 347,
      question: "In MongoDB, how do you use the `aggregate()` function?",
      answer:
        "The `aggregate()` function is used to process data and return computed results.",
    },
    {
      serialno: 348,
      question: "In React, what is `context`?",
      answer:
        "Context provides a way to pass data through the component tree without having to pass props down manually at every level.",
    },
    {
      serialno: 349,
      question: "In Git, how do you resolve a merge conflict?",
      answer:
        "Open the conflicting files, resolve the conflicts, and then add the resolved files to the staging area.",
    },
    {
      serialno: 350,
      question: "In Java, how do you declare a constant?",
      answer:
        "Use the `final` keyword followed by the type and variable name (e.g., `final int CONSTANT_NAME = 10;`).",
    },
    {
      serialno: 351,
      question: "In JavaScript, what is the `fetch` API used for?",
      answer:
        "The `fetch` API is used to make network requests to servers to retrieve or send data.",
    },
    {
      serialno: 352,
      question: "In MySQL, how do you add a new column to an existing table?",
      answer:
        "Use the `ALTER TABLE table_name ADD column_name column_type;` statement.",
    },
    {
      serialno: 353,
      question: "In Python, what is a lambda function?",
      answer:
        "A lambda function is a small anonymous function defined with the `lambda` keyword.",
    },
    {
      serialno: 354,
      question: "In MongoDB, how do you update multiple documents?",
      answer:
        "Use the `updateMany()` method to update multiple documents that match a query.",
    },
    {
      serialno: 355,
      question: "In React, what is `useState`?",
      answer:
        "The `useState` hook allows you to add state to functional components.",
    },
    {
      serialno: 356,
      question: "In Git, how do you remove a file from version control?",
      answer: "Use `git rm filename` to remove a file from version control.",
    },
    {
      serialno: 357,
      question: "In Java, what is a constructor?",
      answer: "A constructor is a special method used to initialize objects.",
    },
    {
      serialno: 358,
      question:
        "In JavaScript, what is the difference between `null` and `undefined`?",
      answer:
        "`null` is an assignment value, while `undefined` indicates a variable has been declared but has no value.",
    },
    {
      serialno: 359,
      question: "In MySQL, how do you create a table?",
      answer:
        "Use the `CREATE TABLE table_name (column_name column_type);` statement.",
    },
    {
      serialno: 360,
      question: "In Python, how do you read a file?",
      answer: "Use the `open()` function with the `'r'` mode to read a file.",
    },
    {
      serialno: 361,
      question: "In MongoDB, what is a `schema`?",
      answer: "A schema defines the structure of documents within a collection.",
    },
    {
      serialno: 362,
      question: "In React, what is `Redux`?",
      answer:
        "Redux is a state management library for managing application state in a predictable way.",
    },
    {
      serialno: 363,
      question: "In Git, what does the command `git pull` do?",
      answer:
        "`git pull` fetches and merges changes from the remote repository into the current branch.",
    },
    {
      serialno: 364,
      question: "In Java, what is `inheritance`?",
      answer:
        "Inheritance is a mechanism where a new class derives properties and behavior from an existing class.",
    },
    {
      serialno: 365,
      question:
        "In JavaScript, what is an `immediately invoked function expression (IIFE)`?",
      answer:
        "An IIFE is a function that is executed immediately after its definition.",
    },
    {
      serialno: 366,
      question: "In MySQL, how do you drop a table?",
      answer: "Use the `DROP TABLE table_name;` statement to drop a table.",
    },
    {
      serialno: 367,
      question: "In Python, how do you append an item to a list?",
      answer: "Use the `append()` method to add an item to the end of a list.",
    },
    {
      serialno: 368,
      question: "In MongoDB, how do you perform a projection?",
      answer:
        "Use the projection parameter in the `find()` method to specify which fields to include or exclude.",
    },
    {
      serialno: 369,
      question: "In React, what is `componentDidMount`?",
      answer:
        "`componentDidMount` is a lifecycle method that is called after a component is mounted.",
    },
    {
      serialno: 370,
      question: "In Git, what is a `tag`?",
      answer:
        "A tag is a reference to a specific commit, typically used for marking release points.",
    },
    {
      serialno: 371,
      question: "In Java, what are interfaces used for?",
      answer:
        "Interfaces define a contract that classes can implement, ensuring specific methods are available.",
    },
    {
      serialno: 372,
      question: "In JavaScript, what are `template literals`?",
      answer:
        "Template literals are string literals allowing embedded expressions, defined using backticks (``).",
    },
    {
      serialno: 373,
      question: "In MySQL, how do you create an index?",
      answer:
        "Use the `CREATE INDEX index_name ON table_name (column_name);` statement.",
    },
    {
      serialno: 374,
      question: "In Python, how do you check if a key exists in a dictionary?",
      answer:
        "Use the `in` keyword to check for the existence of a key (e.g., `key in my_dict`).",
    },
    {
      serialno: 375,
      question: "In MongoDB, how do you create a new database?",
      answer:
        "Use the `use database_name` command to create or switch to a new database.",
    },
    {
      serialno: 376,
      question: "In React, what is `useContext`?",
      answer:
        "The `useContext` hook allows you to consume context values in functional components.",
    },
    {
      serialno: 377,
      question: "In Git, how do you clone a repository?",
      answer: "Use `git clone repository_url` to clone a remote repository.",
    },
    {
      serialno: 378,
      question: "In Java, what is the `super` keyword?",
      answer: "The `super` keyword is used to access members of the superclass.",
    },
    {
      serialno: 379,
      question: "In JavaScript, what is `this` in an object method?",
      answer: "`this` refers to the object that the method is called on.",
    },
    {
      serialno: 380,
      question: "In MySQL, what is a `foreign key`?",
      answer:
        "A foreign key is a field that links two tables together, establishing a relationship.",
    },
    {
      serialno: 381,
      question: "In Python, how do you remove duplicates from a list?",
      answer:
        "Convert the list to a set using `set()` and back to a list, or use a loop to filter duplicates.",
    },
    {
      serialno: 382,
      question: "In MongoDB, how do you backup a database?",
      answer: "Use the `mongodump` command to create a backup of the database.",
    },
    {
      serialno: 383,
      question:
        "In React, what is the difference between controlled and uncontrolled components?",
      answer:
        "Controlled components use React state for form data, while uncontrolled components store data in the DOM.",
    },
    {
      serialno: 384,
      question: "In Git, what is the purpose of the `git init` command?",
      answer: "`git init` initializes a new Git repository.",
    },
    {
      serialno: 385,
      question: "In Java, what is a `static method`?",
      answer:
        "A static method belongs to the class rather than any instance of the class and can be called without creating an object.",
    },
    {
      serialno: 386,
      question: "In JavaScript, how do you define a class?",
      answer:
        "Use the `class` keyword followed by the class name (e.g., `class MyClass {}`).",
    },
    {
      serialno: 387,
      question: "In MySQL, how do you find the maximum value in a column?",
      answer: "Use the `SELECT MAX(column_name) FROM table_name;` statement.",
    },
    {
      serialno: 388,
      question: "In Python, how do you convert a list to a set?",
      answer: "Use the `set()` function to convert a list to a set.",
    },
    {
      serialno: 389,
      question: "In MongoDB, how do you perform a bulk write operation?",
      answer:
        "Use the `bulkWrite()` method to perform multiple write operations in a single command.",
    },
    {
      serialno: 390,
      question: "In React, what are `controlled inputs`?",
      answer:
        "Controlled inputs are form inputs whose values are controlled by React state.",
    },
    {
      serialno: 391,
      question: "In Git, what is a `fork`?",
      answer:
        "A fork is a copy of a repository that allows you to freely experiment without affecting the original project.",
    },
    {
      serialno: 392,
      question: "In Java, what are generics?",
      answer:
        "Generics enable types (classes and interfaces) to be parameters when defining classes, interfaces, and methods.",
    },
    {
      serialno: 393,
      question:
        "In JavaScript, what is the purpose of the `async` and `await` keywords?",
      answer:
        "They are used to handle asynchronous operations more easily, making the code cleaner.",
    },
    {
      serialno: 394,
      question: "In MySQL, how do you join two tables?",
      answer:
        "Use the `JOIN` clause in a `SELECT` statement to combine rows from two or more tables.",
    },
    {
      serialno: 395,
      question: "In Python, what is the purpose of the `with` statement?",
      answer:
        "The `with` statement is used for resource management and exception handling, ensuring proper cleanup.",
    },
    {
      serialno: 396,
      question:
        "In MongoDB, how do you find the total number of documents in a collection?",
      answer:
        "Use the `countDocuments()` method to find the total number of documents.",
    },
    {
      serialno: 397,
      question: "In React, what is a `pure component`?",
      answer:
        "A pure component implements `shouldComponentUpdate()` with a shallow prop and state comparison.",
    },
    {
      serialno: 398,
      question: "In Git, what does `git stash` do?",
      answer:
        "`git stash` temporarily saves changes that are not ready to be committed.",
    },
    {
      serialno: 399,
      question: "In Java, what is `polymorphism`?",
      answer:
        "Polymorphism allows methods to do different things based on the object it is acting upon.",
    },
    {
      serialno: 400,
      question: "In JavaScript, what is a closure?",
      answer:
        "A closure is a function that retains access to its lexical scope, even when the function is executed outside that scope.",
    },
  ];

  code_base_questions = code_base_questions.map(val=>{
    val.flag={'true':0,'false':0}
  })
  
  module.exports = code_base_questions;
  