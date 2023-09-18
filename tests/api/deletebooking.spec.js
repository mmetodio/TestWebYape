import {test, expect} from '@playwright/test';

test.describe.parallel('API Testing', () => {

  test.only('Api Test - Delete', async({request}) => {
    const response = await request.delete('https://restful-booker.herokuapp.com/booking/483',{
      headers: {
        'Content-Type': 'application/json',
        Cookie: 'token=4b9af661195418e'

      }

    });
    expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())
    console.log(responseBody)
  })



})
