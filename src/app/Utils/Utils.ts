import { URL } from "url";
import { IncomingMessage} from 'http'

export class Utils {

    public static parseURL(url:string) {
        if(url.length < 1) throw new Error('Empty Url')
       
        return new URL(url)
    }

    public static toUpperCase(arg:string) {
        const result = arg ? arg.toUpperCase() : ''
        return result;
    }

    // Dummy object test example
    public static getRequestBasePath(req: IncomingMessage): string {
        const url = req.url;
        
        if (url) {
            const parsedUrl = this.parseURL(url)
            if(parsedUrl.pathname.length > 1) {
               
                return parsedUrl.pathname.split('/')[1]
            }
            return ''
        }
    }

    public static async getRequestBody(req: IncomingMessage): Promise<any> {
        return new Promise((resolve, reject) => {
            let body = ''
            req.on('data', (data:string) => {
                body += data
            })

            req.on('end', () => {
                try {
                    resolve(JSON.parse(body))
                } catch (jsonError) {
                    reject(jsonError)
                    
                }
            })

            req.on('error', (error: Error | any) =>{
                reject(error)
            })
        })
    }
}

// console.log(Utils.parseURL(''))

