# Abstract Factory

## Concepts
Abstract Class - Can include abstract methods. Cannot be instantiated, but can be subclassed
Abstract Method - A method without body (implementation)
Factory - Object that creates other objects


## What it is? What solves?

An Abstract Factory creates objects that are related by a common theme. Creating entire product families without specifying their concrete classes (multiple families of objects)
it is possible using an Abstract Factory.

## An example:
* **Java**

```
// Abstract class
public abstract class Person {
    public Person(String name){
    	this.name = name;
    }
 
    protected abstract void say();

    private String name = null;
}

public class Employee extends Person {
    String name;
    public Employee(String name) {
    	super(name);
        this.name = name;
    }
    @Override
    public void say() {
        System.out.println("I am employee " + this.name);
    }
}

public class EmployeeFactory{
   public Employee createEmployee(String name) {
        return new Employee(name);
    }
}

public class Vendor extends Person {
    String name;
    public Vendor(String name) {
    	super(name);
        this.name = name;
    }
    @Override
    public void say() {
        System.out.println("I am vendor " + this.name);
    }
}

public class VendorFactory {
    public Vendor createVendor(String name) {
        return new Vendor(name);
    }
}

public class AbstractFactoryPatternDemo {
   public static void main(String[] args) {
	   
	  List<Person> persons = new ArrayList<Person>();
       
	  EmployeeFactory employeeFactory = new EmployeeFactory();
	  VendorFactory vendorFactory = new VendorFactory();

	  persons.add(employeeFactory.createEmployee("Joan DiSilva"));

      persons.add(employeeFactory.createEmployee("Tim O'Neill"));

      persons.add(vendorFactory.createVendor("Gerald Watson"));

      persons.add(vendorFactory.createVendor("Nicole McNight"));
      
      for(Person person: persons) {
    	  person.say();
      }
      
   }
}
```

**IMPORTANT:** 
You can also create an AbstractFactory interface which manages both Employee and Vendor factories and products (using interfaces), but I wanted to show an approach that can be compared to the Javascript one and also show how an abstract class works.

* **Javascript**

```
// Employee
function Employee(name) {
    this.name = name;
 
    this.say = function () {
        log.add("I am employee " + name);
    };
}
 
function EmployeeFactory() {
 
    this.create = function(name) {
        return new Employee(name);
    };
}

//Vendor
function Vendor(name) {
    this.name = name;
 
    this.say = function () {
        log.add("I am vendor " + name);
    };
}
 
function VendorFactory() {
 
    this.create = function(name) {
        return new Vendor(name);
    };
}
 
// Log helper
var log = (function () {
    var log = "";
 
    return {
        add: function (msg) { log += msg + "\n"; },
        show: function () { alert(log); log = ""; }
    }
})();
 
// Main
function run() {
    var persons = [];
    var employeeFactory = new EmployeeFactory();
    var vendorFactory = new VendorFactory();
 
    persons.push(employeeFactory.create("Joan DiSilva"));
    persons.push(employeeFactory.create("Tim O'Neill"));
    persons.push(vendorFactory.create("Gerald Watson"));
    persons.push(vendorFactory.create("Nicole McNight"));
 
    for (var i = 0, len = persons.length; i < len; i++) {
        persons[i].say();
    }
 
    log.show();
}
```