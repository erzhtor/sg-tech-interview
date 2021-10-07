/**
 * @see https://bigfrontend.dev/problem/create-an-Event-Emitter
 */
export class EventEmitter {
    subscribe(eventName: string, callback: (...args: any[]) => any): any {}

    emit(eventName: string, ...args: any[]) {}
}
