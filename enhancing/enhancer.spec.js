const enhancer = require('./enhancer.js');
// test away!

describe("repair()", function () {
    it("should repair an actual item", function () {
        const item = {
            name: "Wooden Sword",
            durability: 50,
            enhancement: 15
        }
        const expected = {
            name: "Wooden Sword",
            durability: 100,
            enhancement: 15
        }
        const actual = enhancer.repair(item);
        expect(actual).toStrictEqual(expected);
    })

    it("should return a message if no durability found", function () {
        const item = {
            name: "Wooden Sword",
            enhancement: 15
        }
        const expected = { message: "your item has no durability." }
        const actual = enhancer.repair(item);
        expect(actual).toStrictEqual(expected);
    })

    it("should return a message if durability exceeds 100", function () {
        const item = {
            name: "Wooden Sword",
            durability: 100,
            enhancement: 15
        }
        const expected = { message: "your item already has max durability." }
        const actual = enhancer.repair(item);
        expect(actual).toStrictEqual(expected);
        item.durability = 102;
        expect(actual).toStrictEqual(expected);
    })

    it("should return a message if durability is less than 0", function () {
        const item = {
            name: "Wooden Sword",
            durability: -5,
            enhancement: 15
        }
        const expected = { message: "your item is already broken" }
        const actual = enhancer.repair(item);
        expect(actual).toStrictEqual(expected);
        item.durability = -5;
        expect(actual).toStrictEqual(expected);
    })
})

describe("success()", function () {
    it("should increase enhancement by 1", function () {
        const item = {
            name: "Wooden Sword",
            durability: 65,
            enhancement: 15
        }
        const expected = {
            name: "Wooden Sword",
            durability: 65,
            enhancement: 16
        }
        const actual = enhancer.success(item);
        expect(actual).toStrictEqual(expected);
    })

    it("should return item unchanged if greater than or equal to 20", function () {
        const item = {
            name: "Wooden Sword",
            durability: 65,
            enhancement: 20
        }
        const expected = {
            name: "Wooden Sword",
            durability: 65,
            enhancement: 20
        }
        const actual = enhancer.success(item);
        expect(actual).toStrictEqual(expected);
    })

    it("should give a message if enhancement does not exist", function () {
        const item = {
            name: "Wooden Sword",
            durability: 65,
        }
        const expected = { message: "item cannot be enhanced" }
        const actual = enhancer.success(item);
        expect(actual).toStrictEqual(expected);
    })
})

describe("fail()", function () {
    it("should give a message if enhancement does not exist", function () {
        const item = {
            name: "Wooden Sword",
            durability: 65,
        }
        const expected = { message: "item cannot be enhanced" }
        const actual = enhancer.fail(item);
        expect(actual).toStrictEqual(expected);
    })

    it("should reduce durability by 5 if enhancement is less than 15", function() {
        const item = {
            name: "Wooden Sword",
            durability: 65,
            enhancement: 13
        }
        const expected = {
            name: "Wooden Sword",
            durability: 60,
            enhancement: 13
        }
        const actual = enhancer.fail(item);
        expect(actual).toStrictEqual(expected);
    })

    it("should reduce durability by 10 if enhancement is 15", function() {
        const item = {
            name: "Wooden Sword",
            durability: 65,
            enhancement: 15
        }
        const expected = {
            name: "Wooden Sword",
            durability: 55,
            enhancement: 15
        }
        const actual = enhancer.fail(item);
        expect(actual).toStrictEqual(expected);
    })

    it("should reduce durability by 10 if enhancement is 16", function() {
        const item = {
            name: "Wooden Sword",
            durability: 65,
            enhancement: 16
        }
        const expected = {
            name: "Wooden Sword",
            durability: 55,
            enhancement: 16
        }
        const actual = enhancer.fail(item);
        expect(actual).toStrictEqual(expected);
    })

    it("should reduce durability by 10 and enhancement by 1 if enhancement is at least 17", function() {
        const item = {
            name: "Wooden Sword",
            durability: 65,
            enhancement: 17
        }
        const expected = {
            name: "Wooden Sword",
            durability: 55,
            enhancement: 16
        }
        const actual = enhancer.fail(item);
        expect(actual).toStrictEqual(expected);
    })

    it("should unchange item if enhancement is 20", function() {
        const item = {
            name: "Wooden Sword",
            durability: 65,
            enhancement: 20
        }
        const expected = {
            name: "Wooden Sword",
            durability: 65,
            enhancement: 20
        }
        const actual = enhancer.fail(item);
        expect(actual).toStrictEqual(expected);
    })
})

describe("repair()", function () {
    it("should return normal name item if no enhancements", function () {
        const item = {
            name: "Wooden Sword",
            durability: 50,
            enhancement: 0
        }
        const expected = {
            name: "Wooden Sword",
            durability: 50,
            enhancement: 0
        }
        const actual = enhancer.get(item);
        expect(actual).toStrictEqual(expected);
    })

    it("should return [+7] name item if +7 enhanced", function () {
        const item = {
            name: "Wooden Sword",
            durability: 50,
            enhancement: 7
        }
        const expected = {
            name: "[+7] Wooden Sword",
            durability: 50,
            enhancement: 7
        }
        const actual = enhancer.get(item);
        expect(actual).toStrictEqual(expected);
    })
})
