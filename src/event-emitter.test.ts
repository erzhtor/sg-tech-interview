import * as assert from "assert";
import { EventEmitter } from "./event-emitter";
import sinon from "sinon";

describe("event-emitter", () => {
    it("calls callback handler", () => {
        const eventHandler = sinon.spy();

        const eventEmitter = new EventEmitter();
        eventEmitter.subscribe("myEvent", eventHandler);

        const [eventName, args] = ["myEvent", ["arg"]];
        eventEmitter.emit(eventName, ...args);

        assert.equal(eventHandler.calledOnce, true);
        // Assert that it was called with correct params
        assert.equal(eventHandler.calledWith(...args), true);
    });

    it("correctly unsubscribes", () => {
        const eventHandler = sinon.spy();

        const eventEmitter = new EventEmitter();
        const unsubscribe = eventEmitter.subscribe("myEvent", eventHandler);
        unsubscribe.release();

        const [eventName, args] = ["myEvent", ["arg"]];
        eventEmitter.emit(eventName, ...args);

        assert.equal(eventHandler.notCalled, true);
    });
});
