import {test, expect} from '@playwright/test';

test.describe.parallel('API Testing', () => {

  test.only('Api Test - Put', async({request}) => {
    const response = await request.put('https://restful-booker.herokuapp.com/booking/612',{
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Cookie: 'token=4b9af661195418e'

      },
      data:{
        firstname: 'metodicoupdat',
        lastname: 'automationput',
        totalprice: 2000,
        depositpaid: true,
        bookingdates: {
          checkin: '2020-03-01',
          checkout: '2021-03-01'
        },
        additionalneeds: 'Breakfast'

      }

    });
    expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())
    console.log(responseBody)
  })



})
