const {sum, nativeNull} = require('./intro')
describe('sum function', ()=>{

	test('Sum test', () => {
		expect(sum(1, 2)).toBe(3) // для приметивных типов
		expect(sum(1, 2)).toEqual(3)
	})

	test('test 2 ', () => {
			expect(sum(2, 2)).toBeGreaterThan(1)// больше чем
			expect(sum(2, 2)).toBeGreaterThanOrEqual(4)// больше чем или равно
			expect(sum(2, 2)).toBeLessThan(5)// меньше чем или равно
			expect(sum(2, 2)).toBeLessThanOrEqual(4)// меньше чем или равно
		}
	)

	test('test 3', () => {
		expect(sum(0.1,0.2)).toBeCloseTo(0.3) //близок к значению
	})

})
describe('null', ()=>{
	test('test 3', () => {
		expect(nativeNull()).toBe(null)
		expect(nativeNull()).toBeNull()
		expect(nativeNull()).toBeFalsy() // undefined null 0 '' false
		expect(nativeNull()).toBeDefined() // определен
		expect(nativeNull()).not.toBeTruthy() // определен
		expect(nativeNull()).not.toBeUndefined() // определен
	})
})

