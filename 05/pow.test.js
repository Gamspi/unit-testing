const pow = require('./pow')

describe('test pow', () => {
	beforeEach(()=>{
		jest.clearAllMocks() // вызовы моков могут накапливаться по этому их нужно очищать

	})
	test('current calls function Math.pow', () => {
		const spyMathPow = jest.spyOn(Math, 'pow')
		pow([1, 2, 3])
		expect(spyMathPow).toBeCalledTimes(2)
	})

	test('current calls function Math.pow', () => {
		const spyMathPow = jest.spyOn(Math, 'pow')
		pow([1, 2, 3])
		expect(spyMathPow).toBeCalledTimes(3)
	})

})
