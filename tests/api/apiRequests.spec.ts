import {test, expect} from '@playwright/test'

const url = 'https://reqres.in/'

test.describe('API REQUEST', () => {
    test('testing Get requests', async ({request}) => {
        const res = await request.get(`${url}/api/users/2`)
        //console.log(res, 'response')
        expect(res.status()).toBe(200)
        const resBody = JSON.parse(await res.text())
        console.log(respBody,'resBody');
        expect.soft(resBody.data.id, `id should be $(resBody.data.id)`).toBe(3)
    })
})