import { URL } from "url";

export class Utils {

    public static parseURL(url:string) {
        if(url.length < 1) throw new Error('Empty Url')
       
        return new URL(url)
    }

    public static toUpperCase(arg:string) {
        const result = arg ? arg.toUpperCase() : ''
        return result;
    }
}

// console.log(Utils.parseURL(''))

