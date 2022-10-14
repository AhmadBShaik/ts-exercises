import { resistorColorTrio, resistorColorTrio2 } from "../src/resistor-color-trio"

describe("Checking for resistor values in function 1",() => {
    test('Testing orange, orange and black', () => {
        expect(resistorColorTrio('orange-orange-black')).toBe(33)
    })
    test('', () => {
        expect(resistorColorTrio('orange-orange-orange')).toBe(33000)
    })
})

describe("Checking for resistor values in function 2",() => {
    test('Testing brown and green', () => {
        expect(resistorColorTrio2(['orange','orange', 'black'])).toBe(33)
    })
    test('Testing brown and green', () => {
        expect(resistorColorTrio2(['orange','orange', 'orange'])).toBe(33000)
    })
})