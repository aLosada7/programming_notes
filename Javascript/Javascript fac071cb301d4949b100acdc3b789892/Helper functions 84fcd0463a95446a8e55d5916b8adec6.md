# Helper functions

## Log helper

```jsx
// Log helper
var log = (function () {
    var log = "";
 
    return {
        add: function (msg) { log += msg + "\n"; },
        show: function () { alert(log); log = ""; }
    }
})();

// Use

log.add("Hi. I'm Alvaro.");
log.show(); // Hi. I'm Alvaro.
```

## Handle errors

```tsx
const handleError = (e, message) => {
  // Log error in some kind of Error Logging Service, here we just do console log
  console.log(e);
  // Send a generic Error message back to the user
  throw Error(message);
};
```

## Toast (for Notifications)

[https://github.com/CodeSeven/toastr](https://github.com/CodeSeven/toastr)

## Calculate total (with tax rate, discounts and shipping costs)

```jsx
const TAX_RATE = 1.1
const SHIPPING_DEFAULT = 5

const calculateTotal = (items, { shiping = SHIPPING_DEFAULT, discount = 0 }) => {
	if (items == null || items.length === 0) return 0

	const itemsCost = item.reduce((total, item) => {
		return total + item.price * item.quantity
	}, 0)
	
	const discountRate = 1 - discount

	return itemsCost * discountRate * TAX_RATE + shipping
}

// test items includes an object with a price and a quantity
```