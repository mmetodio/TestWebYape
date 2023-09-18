import {test, expect} from '@playwright/test';

test.describe.parallel('API Testing', () => {

  test.only('Api Test - Update partial', async({request}) => {
    const response = await request.patch('https://restful-booker.herokuapp.com/booking/612',{
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Cookie: 'token=4b9af661195418e'

      },
      data:{
        firstname: 'metodicoupdat',
        lastname: 'automationpatch'


      }

    });
    expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())
    console.log(responseBody)
  })



})
