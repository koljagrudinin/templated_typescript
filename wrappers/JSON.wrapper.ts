export class JsonWrapper {
    stringify<T>(value: T, replacer?: (key: string, value: any) => any, space?: string | number): string {
        return JSON.stringify(value)
    }

    parse<T>(text: string, reviver?: (key: any, value: any) => any): T {
        return JSON.parse(text, reviver);
    }
}