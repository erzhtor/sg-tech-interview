import * as assert from "assert";
import { pipe } from "./pipe";

describe("pipe", () => {
    it("chains multiple functions together", () => {
        const addTwo = (x: number) => x + 2;
        const timesThree = (x: number) => x * 3;

        const piped = pipe([addTwo, timesThree]);

        // (2 + 2) * 3
        assert.equal(piped(2), 12);
    });
});
