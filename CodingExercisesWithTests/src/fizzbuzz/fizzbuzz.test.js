const fizzbuzz = require("./fizzbuzz")

describe('fizzbuzz', () => {
    it('1 returns result 1', () => {
        expect(fizzbuzz(1)).toBe(1);
    })

    it('3 returns result fizz', () => {
        expect(fizzbuzz(3)).toBe('fizz');
    })

    it('5 returns result buzz', () => {
        expect(fizzbuzz(5)).toBe('buzz');
    })

    it('15 returns result fizzbuzz', () => {
        expect(fizzbuzz(15)).toBe('fizzbuzz');
    })

    it('6 returns result fizz', () => {
        expect(fizzbuzz(6)).toBe('fizz');
    })

    it('10 returns result buzz', () => {
        expect(fizzbuzz(10)).toBe('buzz');
    })

    it('30 returns result buzz', () => {
        expect(fizzbuzz(30)).toBe('fizzbuzz');
    })

    it('30 returns result buzz', () => {
        expect(fizzbuzz(64)).toBe(64);
    })
})