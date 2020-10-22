# ViewChild & ViewChildren 

Using a reference, you can view that child, using @ViewChild(ref) referenceName; (reference can be an element or a component)

```
@ViewChild(ref) referenceName;
```

With AfterViewInit hook (ngAfterViewInit) you will see that element already exists, which does not happen with constructor.

You can for example get the DOM element, using **nativeElement** property.

Reference value changed if we modify the object value (needs to be initialized).
```
setInterval(() => {
	this.dateViewerRef.today = new Date();
}, 1000);
```

@ViewChildren allows us to view a list of elements, so:
```
@ViewChildren(DateViewerComponent) dateViewerRef: QueryList<DateViewerComponent>

this.dateViewerRef.toArray().forEach (element => {
    setInterval(() => {
    	element.today = new Date();
    }, 1000);
});
```
