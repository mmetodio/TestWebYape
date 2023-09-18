import {test, expect} from '@playwright/test';

test.describe.parallel('API Testing', () => {
  //const baseUrl = 'https://restful-booker.herokuapp.com'

  test.only('Api Test Get Id', async({request}) => {
    const response = await request.get('https://restful-booker.herokuapp.com/booking/3588');

    expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())
    console.log(responseBody)

  })

  
  test('Api Test invalid', async({request}) => {
    const response = await request.get('https://restful-booker.herokuapp.com/not');
    expect(response.status()).toBe(404)

  })

})
