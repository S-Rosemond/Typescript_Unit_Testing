import { URL } from "url";

export class Utils {

    public static parseURL(url:string) {
        return new URL(url)
    }

    public static toUpperCase(arg:string) {
        const result = arg ? arg : ''
        return result.toUpperCase();
    }
}