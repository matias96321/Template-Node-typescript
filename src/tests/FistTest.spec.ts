import { UsersModel } from '../models/UsersModel'

test('it shold be ok', () => {
  const user = new UsersModel()

  user.name = 'matias'

  expect(user.name).toEqual('matias')
})
