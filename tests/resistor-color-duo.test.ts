import { resistorColorDuo, resistorColorDuo2 } from "../src/resistor-color-duo"

describe("Checking for resistor values in function 1",() => {
    test('Testing brown and green', () => {
        expect(resistorColorDuo('brown-green')).toBe(15)
    })
    test('Testing brown and green', () => {
        expect(resistorColorDuo('brown-green-violet')).toBe(15)
    })
})

describe("Checking for resistor values in function 2",() => {
    test('Testing brown and green', () => {
        expect(resistorColorDuo2(['black','brown'])).toBe(1)
    })
    test('Testing brown and green', () => {
        expect(resistorColorDuo2(['brown','green', 'green'])).toBe(15)
    })
})