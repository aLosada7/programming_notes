# SRP: Single-Responsibility Principle

*A class should have only one reason to change*

**Separate different responsibilities into separate methods/classes because each responsibility can change.**

**Tend to write small files & small functions with a single responsibility**

Coupling leads to fragile designs. Avoid to retest and redeploy which is not changing.

An easy example

Rectangle class drawing and calculating area (TWO responsibilities)

**TO**

Geometric Rectangle class calculating area and rectangle class drawing it

A more complex example

In a particular API, we wish to fetch posts, clean up some data, and then send back a response.

One approach is doing all in the same method *getPosts(userId)*, but the function handles too many things and it is difficult to re-use(tight-coupling). We can clean it. How?

1. Taking the error handling code out of the main function (being this generic to every function)
2. Extracting *cleanupPosts* to a new function, since it is not a responsibility for *fetchPosts*

```tsx
import fetch from "node-fetch";

const fetchPosts = async (userId: number) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}/posts`
    );
    return await response.json();
  } catch (e) {
    handleError(e, "Error while fetching Posts!");
  }
};

const handleError = (e, message) => {
  // Log error in some kind of Error Logging Service, here we just do console log
  console.log(e);
  // Send a generic Error message back to the user
  throw Error(message);
};

const cleanupPosts = (posts) => {
  // Do some cleanup; remove UserID from post since it's not really needed
  return posts.map((post) => {
    delete post["userId"];
    return post;
  });
};

const main = async () => {
  const posts = await fetchPosts(1);
  console.log(cleanupPosts(posts));
};

main();
```

**Remember:** Different method's which belong to the same class could be changed by different actors (this is a code smell, something needs to be done).