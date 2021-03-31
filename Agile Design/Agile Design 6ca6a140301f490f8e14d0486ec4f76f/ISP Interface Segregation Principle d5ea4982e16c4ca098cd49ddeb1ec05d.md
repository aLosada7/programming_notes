# ISP: Interface Segregation Principle

Instead of a generalized interface for a class, it is better to use separate segregated interfaces with smaller functionalities

**Loose coupling for interfaces**

Example

Interface with methods which are not implemented by a class (provider)

```tsx
class CreditCardPaymentProvider implements PaymentProvider, PaymentValidator {
  validate() {
    // Payment is validated
    console.log("Payment Card Validated");
    return true;
  }
  getPaymentCommission() {
    // Commission is returned
    return 10;
  }
  processPayment() {
    // Payment processed
    console.log("Payment Processed");
    return "Payment Fingerprint";
  }
}
```

Another example: 

General car and a Tesla's one. General one will implement some methods (*startEngine*, ...) and Tesla introduces others (startEngine, *ludicrousSpeed*, ...). Different interfaces help you to implement only the needed interface methods instead of all.