import {test, expect} from '@playwright/test';

test.describe.parallel('API Testing', () => {

  test.only('Api Test - Create', async({request}) => {
    const response = await request.post('https://restful-booker.herokuapp.com/booking',{
      data:{
        firstname: 'metodico',
        lastname: 'automation',
        totalprice: 2000,
        depositpaid: true,
        bookingdates: {
          checkin: '2020-01-01',
          checkout: '2021-01-01'
        },
        additionalneeds: 'Breakfast'

      }

    });
    expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())
    console.log(responseBody)
  })



})
