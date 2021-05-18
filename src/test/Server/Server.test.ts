import { Authorizer } from "../../app/Authorization/Authorizer";
import { LoginHandler } from "../../app/Handlers/LoginHandler";
import { Server } from "../../app/Server/Server";

const requestMock = {
    url: '',
};
const responseMock = {
    end: jest.fn(),
};
const listenMock = {
    listen: jest.fn()
}

jest.mock("../../app/Handlers/LoginHandler")
jest.mock("../../app/Authorization/Authorizer")

jest.mock("http", () => ({
    createServer: (cb: any) => {
        cb(requestMock, responseMock)
        return listenMock
    }
  }));

describe("Server test suite", () => {

    test('Should create server on port 8080', () => {
        new Server().startServer()

       
        expect(listenMock.listen).toBeCalledWith(8080)
        expect(responseMock.end).toBeCalled()
    })

    test('Should handle login request', () => {
        requestMock.url = 'http://localhost:8080/login'

        new Server().startServer()
        const handleRequestSpy = jest.spyOn(LoginHandler.prototype, 'handleRequest')

        expect(handleRequestSpy).toBeCalled()
        expect(LoginHandler).toBeCalledWith(requestMock, responseMock, expect.any(Authorizer))
    })
});
