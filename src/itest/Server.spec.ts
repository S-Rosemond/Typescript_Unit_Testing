import * as axios from 'axios'


axios.default.defaults.validateStatus = function () {
    return true;
}

const serverUrl = 'http://localhost:8080/login'

describe('Server itest suite', () => {

    test('server reachable', async () => {
        await serverReachable()
    })
    
})

async function serverReachable(): Promise<boolean> {
    try {
        await axios.default.get(serverUrl)
        
    } catch (error) {
        console.log('Server not reachable', 'false')
        return false
    }
    console.log('Server reachable', 'true')
    return true
}