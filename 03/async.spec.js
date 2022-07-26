const Ajax = require('./async')
const axios = require('axios')
jest.mock('axios') // все сторонние модули мокаем
describe('Ajax: echo', () => {
	test('should return value async', async () => {
		const result = await Ajax.echo('some data')
		expect(result).toBe('some data')
	})

	test('should catch error with async', async () => {
		try {
			await Ajax.echo()
		} catch (err) {
			expect(err.message).toBe('error')
		}


	})
	test('should return value with promise', () => {
		return Ajax.echo('some data').then(result => {
			expect(result).toBe('some data')
		})
	})

	test('should catch error with promise', () => {
		return Ajax.echo().catch(err => {
			expect(err).toBeInstanceOf(Error)
		})
	})
})

// describe('ajax: get', () => {
// 	let response
// 	let todos
//
// 	beforeEach(() => {
// 		todos = [
// 			{id: 1, title: 'todo 1 ', completed: false}
// 		]
// 		response = {
// 			data: {
// 				todos
// 			}
// 		}
// 	})
// 	test('should return data from backend', async () => {
// 		axios.get.mockReturnValue(response)
// 		return await Ajax.get().then(({data}) => {
// 			console.log(data)
// 			expect(data.todos).toEqual(todos)
// 			expect(data).toMatchSnapshot()
// 		})
// 	})
// })
