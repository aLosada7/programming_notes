# General Notes

## Clean Code

Basic properties = Readability + Maintainability

Enjoy its lecture like you would enjoy your favorite novel

**Refactoring**

> First, you make it work. Then, you make it right ~ Kent Beck

Clean code does not repeat itself (following DRY for knowledge duplication)

**Testing**

Automated tests help you to guarantee that behaviour does not change after refactoring

## SQL vs NoSQL Databases

### SQL

Well-defined schema

Data is stored as a collection of entities (rows in a table)

Each entity has a well-defined collection of attributes (columns)

Relations between different entities to access data maintaining the structure of the database

SQL queries to retrieve data

### NoSQL (Document Data Model)

We store key-value pairs. 

A key identify an uniquely entity data object being stored, but not attributes or relations

Generally stored in the form of JSON or XML (schema-on-read)

Uses associated Primary Key or Document ID to retrieve data

## Aria attributes (Accesibility)

aria-label → Visual icon button, as an closing x. Announce something to the user

aria-labelledby and aria-describedby

![General%20Notes%2059b2cbd6081a45df83cf5d83fc2a7f04/Screenshot_2021-02-03_at_19.57.54.png](General%20Notes%2059b2cbd6081a45df83cf5d83fc2a7f04/Screenshot_2021-02-03_at_19.57.54.png)

role

```jsx
<nav role="navigation" class="navbar nav" id="main-nav">...</nav>
```

aria-hidden → Remove elements from the accesibility tree (if value is false)

## CSS Naming

Block-element-modifier (BEM) → [http://getbem.com/naming/](http://getbem.com/naming/)

__ for elements and — for modifiers

## Computer science concepts

- Polimorfism → Muchas clases se relacionan entre sí a través de herencia. Llevar a cabo acciones de distintas formas.

Example: Pig y Dog heredan un método de Animal

[https://www.w3schools.com/java/java_polymorphism.asp](https://www.w3schools.com/java/java_polymorphism.asp)

- Composition → Implementas una has-a en clases, en el que el objeto contenido no puede existir sin el padre (herencia)

Example: Person has a job, books have a library (no pueden existir sin el/ella)

- Abstraction → Redución de la complejidad de una función o objeto. Con datos, solo mostrar los detalles esenciales al usuario