# Big-O, Algorithms & Data Structures

## Data Structures

[Linked List](Big-O,%20Algorithms%20&%20Data%20Structures%2064171926dcfd4721a34d86e3a93e59d5/Linked%20List%20ddacd31d0e284c14bea99750e447ec28.md)

[Double Linked List](Big-O,%20Algorithms%20&%20Data%20Structures%2064171926dcfd4721a34d86e3a93e59d5/Double%20Linked%20List%20a8b22a0bfcf746b7afbcf2c556fa2178.md)

[Stack + Queues](Big-O,%20Algorithms%20&%20Data%20Structures%2064171926dcfd4721a34d86e3a93e59d5/Stack%20+%20Queues%20e5d3c8222b3d4512aff340ba0c2ad9b4.md)

[Trees](Big-O,%20Algorithms%20&%20Data%20Structures%2064171926dcfd4721a34d86e3a93e59d5/Trees%2012ad368373684aeaa2a72e09db73a911.md)

[Graphs](Big-O,%20Algorithms%20&%20Data%20Structures%2064171926dcfd4721a34d86e3a93e59d5/Graphs%20dc6830663bf749959661ee8009e04945.md)

[Hash Map](Big-O,%20Algorithms%20&%20Data%20Structures%2064171926dcfd4721a34d86e3a93e59d5/Hash%20Map%2000bd96a9c76b402396503a1c92dc1f59.md)

## Algorithms

**Big-O**

Worst-case scenario

O(n) *→ Mapping over an array, filtering an array, cloning an array with the spread operator, and running a task for each item in an array*

**Big-𝚹  (Big-Theta)**

Average case space and time complexity of an algorithm

**Big-𝛀 (Big-Omega)**

Best-case scenario

Recursion

### Sorting

- Bubble Sort

    Do not use it!

    Compare each number with the following, exchange if the second one is smaller. 

    **Time complexity: O(n^2) Space Complexity: O(1)**

- Selection Sort

    Find the smallest element in the list and take it to the beginning.

    **Time complexity: O(n^2) Space Complexity: O(1)**

- Insertion Sort

    Loop through the list and place (insert) the element where it belongs

    Useful when list is almost sorted

    **Time complexity: O(n^2) Space Complexity: O(1)**

- Merge Sorge

    When memory is not important. Divide and Conquer

    Divide the list in half and order it, then combine the lists and do the same

    **Time complexity: O(n log n) Space Complexity: O(n)**

- Quick sort

    Take a pivot and switch pieces until you know where that pivot belongs on the array. Then split it and do the same again.

    1 - Base case

    2 - Get pivot

    3 - We create two arrays, one containing all elements that are less than the pivot and another with all elements that are greater than the pivot element.

    4 - We recursively call on both sub-arrays

    ```jsx
    function quickSort(array) {
    		if (array.length < 2) return array;
        let pivotIndex = Math.floor(array.length / 2);
        let pivot = array[pivotIndex];

        let less = [];
        let greater = [];
        for (let i in array) {
            if (i !== pivotIndex) {
                array[i] > pivot ? greater.push(array[i]) : less.push(array[i]);
            }
        }
    		return [...quickSort(less), pivot, ...quickSort(greater)];
    }
    ```

    **Time complexity: O(n log n) Space Complexity: O(log n)**

Searching + traversal

- Linear Search

    We check each item of the list

    **Time complexity: O(n) Space Complexity: O(1)**

- Binary Search (Tree)

    Sorted list (through Quick Sort, for example)

    Start in the middle of the list, and search from there (always from the middle)

    ```jsx
    function binarySearch(list, item) {
    	  // Sort the list in ascending order
    	  list.sort((a, b) => a - b);
    		
    		let low = 0;
    	  let high = list.length;
    	
    		while (low <= high) {
    	      let mid = Math.floor((low + high) / 2);
    	      let guess = list[mid];
    	      if (guess === item) {
    	          return true;
    	      }
    		if (guess < item) {
    	          low = mid + 1;
    	      } else {
    	          high = mid - 1;
    	      }
    	  }
    		return false;
    }
    ```

    **Time complexity: O(log n) Space Complexity: O(1)**

- Depth First Search

    Go to the deepest vertex and then way back

    Stack

- Breadth First Search

    Enqueue each vertex, mark each vertex as visited and dequeue it

    Queue