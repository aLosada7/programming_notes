const chunk = require("./chunk");

describe("chunk", () => {
    it("chunk example 1", () => {
        const array = [1, 2, 3, 4];
        const chunkSize = 2;

        const expectedResult = [
            [1, 2],
            [3, 4]
        ]

        expect(chunk(array, chunkSize)).toStrictEqual(expectedResult);
    });

    it("chunk example 2", () => {
        const array = [1, 2, 3, 4, 5, 6, 7, 8];
        const chunkSize = 3;

        const expectedResult = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8]
        ]

        expect(chunk(array, chunkSize)).toStrictEqual(expectedResult);
    });

    it("chunk example 3", () => {
        const array = [1, 2, 3, 4, 5];
        const chunkSize = 10;

        const expectedResult = [
            [1, 2, 3, 4, 5]
        ]

        expect(chunk(array, chunkSize)).toStrictEqual(expectedResult);
    });
})