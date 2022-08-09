const bigNumber = require('./100')


describe('test function bigNumber ', ()=>{

	test('test number center value',()=>{
		// expect - ожидание
		expect(bigNumber(50)).toBe(true)
		expect(bigNumber(50)).toBeTruthy()
	})
	test('test number = 0',()=>{
		expect(bigNumber(0)).toBe(true)
	})
	test('test number = 100',()=>{
		expect(bigNumber(100)).toBe(true)
	})
	test('test number more 100',()=>{
		expect(bigNumber(150)).toBe(false)
	})

	test('test number less 0',()=>{
		expect(bigNumber(-50)).toBe(false)
	})

})
