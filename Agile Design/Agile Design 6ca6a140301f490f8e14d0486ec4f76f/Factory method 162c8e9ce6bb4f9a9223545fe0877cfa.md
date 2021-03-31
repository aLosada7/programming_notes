# Factory method

Takes care of managing its creation. Add classes in the future, instead of modifying existing ones

Example

A generic *move* or *createVehicle* method for different vehicles

![Factory%20method%20162c8e9ce6bb4f9a9223545fe0877cfa/Untitled.png](Factory%20method%20162c8e9ce6bb4f9a9223545fe0877cfa/Untitled.png)

```tsx
interface Vehicle {
    move(): void
}

//The classes we care about, the "move" method is where our "business logic" would live
class Car implements Vehicle {

    public move(): void {
        console.log("Moving the car!")
    }
}

class Bicycle implements Vehicle {

    public move(): void {
        console.log("Moving the bicycle!")
    }
}

class Plane implements Vehicle {

    public move(): void {
        console.log("Flying the plane!")
    }
}

//The VehicleHandler is "abstract" because noone is going to instantiate it
//We want to extend it and implement the abstract method
abstract class VehicleHandler {

    //This is the method real handlers need to implement
    public abstract createVehicle(): Vehicle 

    //This is the method we care about, the rest of the business logic resides here
    public moveVehicle(): void {
        const myVehicle = this.createVehicle()
        myVehicle.move()
    }
} 

//Here is where we implement the custom object creation
class PlaneHandler extends VehicleHandler{

    public createVehicle(): Vehicle {
        return new Plane()
    }
}

class CarHandler  extends VehicleHandler{

    public createVehicle(): Vehicle {
        return new Car()
    }
}

class BicycleHandler  extends VehicleHandler{

    public createVehicle(): Vehicle {
        return new Bicycle()
    }
}

/// User code...
const planes = new PlaneHandler()
const cars = new CarHandler()

planes.moveVehicle()
cars.moveVehicle()
```