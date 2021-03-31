# DIP: The Dependency-Inversion Principle

> Check Decorator pattern

**High-level modules should not depend on low-level modules**. Both should depend on abstractions.

Abstractions should **not** depend on details. Details should depend on abstractions.

High-level modules contain the important policy decisions and business models of an application (need to be independent of the low-level modules).

More important - Business components

Less important - UI components, persistence, API services, …

Define layers, with each layer providing different services. Lowe layers depend on abstract service interfaces declared in the upper layers - **Inversion of ownership**

All relationships in a program should terminate on an abstract class or an interface (Dynamic polymorfism).

```tsx
class GrayLoggerService implements LoggerService {
  createLog(logObject: object) {
    const grayLog = new GrayLog();
    grayLog.saveLog(logObject);
  }
}

class RedisLoggerService implements LoggerService {
  createLog(logObject: object) {
    const logMessage = JSON.stringify(logObject);
    const redisLog = new RedisLog();
    redisLog.sendLog(logMessage);
  }
}
```

```tsx
const errorDecorator = (error: Error, loggerService: LoggerService) => {
  loggerService.createLog(error);
};

const main = () => {
  errorDecorator(new Error("Error Message"), new RedisLoggerService());
};

main();
```

![DIP%20The%20Dependency-Inversion%20Principle%20eee690ed3073429a8d5c8bd97c911e21/Untitled.png](DIP%20The%20Dependency-Inversion%20Principle%20eee690ed3073429a8d5c8bd97c911e21/Untitled.png)

Regulate does not depend any more on any of the Thermometer or Heater details