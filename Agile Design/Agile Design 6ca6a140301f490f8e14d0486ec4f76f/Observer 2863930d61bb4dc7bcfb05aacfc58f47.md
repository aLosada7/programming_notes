# Observer

Observer objects which will react to changes in the state of the observed entity

```tsx
type InternalState = {
    event: String
}

abstract class Observer { 
    abstract update(state:InternalState): void 
} 

abstract class Observable { // Subject

    protected observers: Observer[] = [] //the list of observers
    protected state:InternalState = { event: "" } //the internal state observers are watching

    public addObserver(o:Observer):void {
        this.observers.push(o)
    }
    
    protected notify() {
        this.observers.forEach( o => o.update(this.state) )
    }
}

//Actual implementations
class ConsoleLogger extends Observer  {

    public update(newState: InternalState) {
        console.log("New internal state update: ", newState)
    }
}

class InputElement extends Observable {

    public click():void {
        this.state = { event: "click" }
        this.notify()
    }

}

const input = new InputElement()
input.addObserver(new ConsoleLogger())

input.click()
```

With observers:

```tsx
const subject = new Subject();
// add observer1 to the list of observers
const sub1 = subject.subscribe(observer1);
// add observer2 to the list of observers
const sub2 = subject.subscribe(observer2);
// notify all observers in the list with "hi there"
subject.next('hi there');
// remove observer1 from the list
sub1.unsubscribe();
```