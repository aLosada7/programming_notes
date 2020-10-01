# Rxjs

* **OF** Create new Observables with a fit value
* **FROM** Turn a static array of data into an Observable
* **FROMEVENT** Add event listener (button, event)

# Operators
* **MAP** Change the object into another object
* **FILTER** Emit values that pass a provided condition
* **SCAN** State Management
* **SWITCHMAP** Cancelling effect for the previous ones, switch to a new observable

# Some code examples
```
from(numbers)
	.pipe(
		map(n => ({ x: n })),
		filter(obj => obj.x < 7),
		scan((accumulate, current) => accumulate.concat(current), [])) // operations over an initial value
	.subscribe(data => (result.textContext = JSON.stringify(data)));
```

```
fromEvent(button, ‘click’).subscribe(
	e => result.textContext = ‘I was clicked’)
);
```
