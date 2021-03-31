# Agile Design

[F.I.R.S.T.](Agile%20Design%206ca6a140301f490f8e14d0486ec4f76f/F%20I%20R%20S%20T%20c125d902587249d18f0b2daf7d5ac42c.md)

**DRY** - Don't Repeat Yourself

**KISS** - Keep it simple, stupid

**YAGNI** - You aren't gonna need it

## Principles (S.O.L.I.D)

[SRP: Single-Responsibility Principle](Agile%20Design%206ca6a140301f490f8e14d0486ec4f76f/SRP%20Single-Responsibility%20Principle%2080a984ecdd204b5c9378803191821e1d.md)

[OCP: Open-Closed Principle](Agile%20Design%206ca6a140301f490f8e14d0486ec4f76f/OCP%20Open-Closed%20Principle%205a359e6cc4ef4951b607fc883611ee1d.md)

[LSP: The Liskov Substitution Principle](Agile%20Design%206ca6a140301f490f8e14d0486ec4f76f/LSP%20The%20Liskov%20Substitution%20Principle%20fe74539396ba45ec9a1f5774050349df.md)

[ISP: Interface Segregation Principle](Agile%20Design%206ca6a140301f490f8e14d0486ec4f76f/ISP%20Interface%20Segregation%20Principle%20d5ea4982e16c4ca098cd49ddeb1ec05d.md)

[DIP: The Dependency-Inversion Principle](Agile%20Design%206ca6a140301f490f8e14d0486ec4f76f/DIP%20The%20Dependency-Inversion%20Principle%20eee690ed3073429a8d5c8bd97c911e21.md)

## Patterns

**Structural patterns** - Deal with structuring the relationship between different components. 

e.g. Composite, Adapter and Decorator

[Composite](Agile%20Design%206ca6a140301f490f8e14d0486ec4f76f/Composite%20141824ee644848b08ea80585fc4e6a77.md)

[Adapter](Agile%20Design%206ca6a140301f490f8e14d0486ec4f76f/Adapter%20592a6ef5eec94813aadc8020f542433b.md)

**Behavioral patterns** - Abstract common behavior between components into a separate entity

e.g. Command, Strategy and Observer

[Observer](Agile%20Design%206ca6a140301f490f8e14d0486ec4f76f/Observer%202863930d61bb4dc7bcfb05aacfc58f47.md)

[Decorator](Agile%20Design%206ca6a140301f490f8e14d0486ec4f76f/Decorator%2032b95415a9b6467a83309b363897dbc1.md)

[Strategy](Agile%20Design%206ca6a140301f490f8e14d0486ec4f76f/Strategy%203928c19836804ab199b072788d6f4305.md)

**Creational patterns** - Class instantiation and making your life easy creating new entities

e.g. Factory, Singleton and Abstract Factory

[Abstract Factory](Agile%20Design%206ca6a140301f490f8e14d0486ec4f76f/Abstract%20Factory%20e68ecb0904f44091894b2b748be14bf0.md)

[Singleton](Agile%20Design%206ca6a140301f490f8e14d0486ec4f76f/Singleton%20bfb4ebd41a544c3cbe8f847e2bffee06.md)

[Factory method](Agile%20Design%206ca6a140301f490f8e14d0486ec4f76f/Factory%20method%20162c8e9ce6bb4f9a9223545fe0877cfa.md)

[Facade](Agile%20Design%206ca6a140301f490f8e14d0486ec4f76f/Facade%20b873de3b5f274713a858492da72d4484.md)

**Acceptance patterns**

[Build-Operate-Check (Testing)](Agile%20Design%206ca6a140301f490f8e14d0486ec4f76f/Build-Operate-Check%20(Testing)%20d3519331d9c040da9077dccf9685935f.md)

[Page Object Model (POM)*](Agile%20Design%206ca6a140301f490f8e14d0486ec4f76f/Page%20Object%20Model%20(POM)%200f302f335b6b413d9d82b6861acbb816.md)

## Domain-Driven Design

Gap between requirements and application design

Tactical design - Concepts and patterns for object-oriented-design (OOP)

Strategic Design - Design to identity self-contained domains¡

## Extreme Programming (XP)

Constantly communication with customers and fellow programmers

Produce high quality software

Requires strong engineering skills

**BASES**

1. Pair-Programming - Solving a problem together, in pairs. Peer-to-peer review
2. Test Driven Development (TDD) - Design technique focused on first having a test, then fulfilling test verification. At last, refactoring and cleaning up code
3. Continuous refactoring - Clean Code
4. Continuous integration - Automated Continuous Integration pipeline running **unit** and **integration** tests
5. Small and frequent releases
6. Coding standards - Guideline beforehand
7. Small iteration length - Up to 2 weeks

```java
public int myMethod () {...};

float myFloat = 5f;
```