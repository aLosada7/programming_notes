# ES6 syntax and high-level functions

## **Cloned**

### Object

```tsx
const post = {title: "Title", content: "lorem ipsum...";

const postCloned = Object.assign({}, post)
const postCloned2 = {...post};
```

### Array

```tsx
const myArray= [1, 2, 3];

const myArrayCloned= myArray.slice();
const myArrayCloned2 = [...myArray];

const myArray2 = [4, 5, 6];
const myArrayCloned3 = myArray.concat(myArray2);
const myArrayCloned4 = [...myArray, ...myArray2]; // [1, 2, 3, 4, 5, 6]
```

## High-level functions

### **map**

New array from an existing one, applying a function to each one of the elements of the array

Function arguments - (element, index, array)

### **filter**

Apply a conditional statement to each element of the array

Function arguments - (element, index, array)

### **reduce**

Reduce an array of values to just ONE value

Function arguments - (result, item) . You can initialise the result at the end (it can be a value, an object, ...)

In a function, it could be interesting to pass parameters as ...args (*rest* parameter)

![ES6%20syntax%20and%20high-level%20functions%20ead05f3315d84d37a6f5cda8702eb4ab/Screenshot_2021-01-06_at_17.06.01.png](ES6%20syntax%20and%20high-level%20functions%20ead05f3315d84d37a6f5cda8702eb4ab/Screenshot_2021-01-06_at_17.06.01.png)

![ES6%20syntax%20and%20high-level%20functions%20ead05f3315d84d37a6f5cda8702eb4ab/Screenshot_2021-01-06_at_17.07.12.png](ES6%20syntax%20and%20high-level%20functions%20ead05f3315d84d37a6f5cda8702eb4ab/Screenshot_2021-01-06_at_17.07.12.png)