import {test, expect} from '@playwright/test';

test.describe.parallel('API Testing', () => {

  test.only('Api Test - Auth', async({request}) => {
    const response = await request.post('https://restful-booker.herokuapp.com/auth',{
      data:{
        username: 'admin',
        password: 'password123'
      }

    });
    expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())
    console.log(responseBody)
  })



})
