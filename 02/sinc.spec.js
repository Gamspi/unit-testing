const Lodash = require('./sinc')

let _ = new Lodash()

describe('lodash: compact', () => {
	let array

	beforeEach(() => {
		array = [false, 42, 0, '', true, null, 'hello'] // при изменении массива в каком либо тесте, не влияло на другие тесты, "хорошая практика"
	}) // вызывается пред каждым тестом

	beforeAll(() => {
	}) // один раз перед тем как запускать первый тест

	afterEach(() => {
		_ = new Lodash()

	}) // вызывается после каждым тестом

	afterAll(() => {
		console.log('afterAll')
	}) // один раз после тем как запускать первый тест

	test('be defined', () => {
		expect(_.compact).toBeDefined()
		expect(_.compact).not.toBeUndefined()
	})

	test('remove', () => {
		const result = [42, true, 'hello']
		expect(_.compact(array)).toEqual(result)
	})

	test('not falsy', () => {
		const array = [false, 42, 0, '', true, null, 'hello']
		expect(_.compact(array)).not.toContain(false) // не должен содержать
		expect(_.compact(array)).not.toContain(null)
		expect(_.compact(array)).not.toContain('')
		expect(_.compact(array)).not.toContain(0)
	})

	test('change array', () => {
		array.push(...['one', 'two'])
		expect(array).toContain('one')
		expect(array).toContain('two')
	})
})

describe('lodash: groupBy', () => {
	test('should be defined', () => {
		expect(_.groupBy).toBeDefined()
		expect(_.groupBy).not.toBeUndefined()
	})
	test('should group array items by Math.floor', () => {
		const array = [2.2, 2.4, 4.2, 3.1]
		const result = {
			2: [2.2, 2.4],
			4: [4.2],
			3: [3.1]
		}
		expect(_.groupBy(array, Math.floor)).toEqual(result)
	})

	test('should group array items by Math.length', () => {
		const array = ['one','two','three']
		const result = {
			5: ['three'],
			3: ['one','two']
		}
		expect(_.groupBy(array, 'length')).toEqual(result)
	})

	test('should not return array', ( )=>{
		expect(_.groupBy([],Math.trunc)).not.toBeInstanceOf(Array)
		}
	)
})

