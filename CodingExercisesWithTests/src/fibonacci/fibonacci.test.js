const fibonacci = require('./fibonacci');

describe('fibonacci', () => {

    it('fibonacci 0', () => {
        expect(fibonacci(0)).toBe(0);
    })

    it('fibonacci 1', () => {
        expect(fibonacci(1)).toBe(1);
    })

    it('fibonacci 2', () => {
        expect(fibonacci(2)).toBe(1);
    })

    it('fibonacci 3', () => {
        expect(fibonacci(3)).toBe(2);
    })

    /*it('fibonacci 10', () => {
        expect(fibonacci(2)).toBe(55);
    })*/
})