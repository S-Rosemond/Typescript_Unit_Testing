import { Utils } from '../app/Utils'


describe('Utils test suite', () => {
   
    it('should run the first test', () => {
        const result = Utils.toUpperCase('abc')
        expect(result).toBe('abc'.toUpperCase())
    })
})

describe('URL parse test', (() => {

    it('should parse and create URL object', () => {
        const parsedUrl = Utils.parseURL('https://localhost:8080/login')
        expect(parsedUrl.port).toBe('8080')
        expect(parsedUrl.href).toBe('https://localhost:8080/login')
        expect(parsedUrl.protocol).toBe('https:')
        // many overloads from searchParams obj
        expect(parsedUrl.search).toEqual('') 
    })

    it('should parse URL with query', () => {
        const parsedUrl = Utils.parseURL('https://localhost:8080/login?user=test&password=test123')
        const expectedQuery = '?user=test&password=test123'
        expect(parsedUrl.search).toBe(expectedQuery)
    })

    it('should throw an error for invalid URL', () => {
        function expectError() {
            Utils.parseURL('')
        }
        console.log(expectError)
        expect(expectError).toThrowError('Empty Url')
    })

    it('should test invalid URL with a try catch', () =>{

        try {
            Utils.parseURL('')
        } catch (error) {
            expect(error).toBeInstanceOf(Error)
            expect(error).toHaveProperty('message', 'Empty Url')
        }


    })

}))