function fibonacci(number) {
    const partialFibonacci = (number) => 
        number == 1 
            ? 1 
            : fibonacci(number - 1) + fibonacci(number - 2);

    return number == 0 
        ? 0 
        : partialFibonacci(number);
}

module.exports = fibonacci;