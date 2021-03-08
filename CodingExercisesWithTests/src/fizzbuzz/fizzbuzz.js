function fizzbuzz(number) {
    const dividedBy = (divider, number) => number % divider == 0;

    if (dividedBy(15, number)) return "fizzbuzz";
    if (dividedBy(3, number)) return "fizz";
    if (dividedBy(5, number)) return "buzz";

    return number;
}

module.exports = fizzbuzz;