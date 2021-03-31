# LSP: The Liskov Substitution Principle

*Subtypes must be substitutable for their based types.*

🚓0

Example🚓

Square and Circle cannot be substituted for Shape

A violation of LSP is a latent violationg of OCP

An example on how to avoid LSP violation when Square → Rectangle

A more complex example

Error handler with two types of error: Database Error and Connection Error, but only one introduces *createAlert* method. Solve this using a has/a instead of a is/a.

```tsx
const errorDecorator = (customError: CustomError) => {
  customError.createErrorMessage();
  customError.logError();
  if (customError instanceof DBError) { // is/a, problems appear when extending this
    customError.createAlert();
  }
};
```

```tsx
abstract class CustomError {
  error: Error;
  errorMessage: string;
  constructor(error: Error) {
    this.error = error;
  }
  abstract createErrorMessage(): void;
  abstract logError(): void;
}

class ConnectionError extends CustomError {
  constructor(error: Error) {
    super(error);
  }
  createErrorMessage(): void {
    this.errorMessage = `Connection error: ${this.error.message}`;
  }
  logError(): void {
    console.log(this.errorMessage);
  }
}

class AlertSystem {
  public sendAlert(message: string) {
    console.log("Alert sent");
  }
}

class DBError extends CustomError {
  constructor(error: Error) {
    super(error);
  }

  createErrorMessage(): void {
    this.errorMessage = `DB error: ${this.error.message}`;
  }

  logError(): void {
    console.log(this.errorMessage);
    const alert = new AlertSystem(); // has/a
    alert.sendAlert(this.errorMessage);
  }
}

const errorDecorator = (customError: CustomError) => {
  customError.createErrorMessage();
  customError.logError();
};

const main = () => {
  const dbError = new DBError(new Error("DB err1"));
  errorDecorator(dbError);
};

main();
```

**Design by contract (DBC)** - Preconditions must be true to guarantee that postconditions are also true. Contracts can be also specified by writing unit test.

A derivative hat does less than is base is usually not substitutable for that base, and therefore violates LSP