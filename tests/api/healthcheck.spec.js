import {test, expect} from '@playwright/test';

test.describe.parallel('API Testing', () => {

  test.only('Api Test Get Check', async({request}) => {
    const response = await request.get('https://restful-booker.herokuapp.com/ping');
    expect(response.status()).toBe(201)

  })

  
  test('Api Test invalid', async({request}) => {
    const response = await request.get('https://restful-booker.herokuapp.com/not');
    expect(response.status()).toBe(404)

  })

})
