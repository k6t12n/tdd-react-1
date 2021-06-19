import calculation from './calculation'

describe('util function calculation', () => {

    it('should return correct sum value', () => {

        const result = calculation.plus(1, 2)

        expect(result).toBe(3)

    })

    it('should return correct minus value', () => {

        const result = calculation.minus(10, 5)

        expect(result).toBe(5)

    })

    it('should return correct multiply value', () => {

        const result = calculation.multiply(2, 3)

        expect(result).toBe(6)

    })

    it('should return correct divide value', () => {

        const result = calculation.divide(20,5)

        expect(result).toBe(4)

    })

    it('should return correct power value', () => {

        const result = calculation.power(2, 3)

        expect(result).toBe(8)

    })

})
