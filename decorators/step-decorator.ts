import {test} from "@playwright/test";
import * as lodash from 'lodash';


type GenericFunction = (...args: unknown[]) => unknown;
export function step(target: GenericFunction, context: any) {
    return function replacementMethod(this: any, ...args: unknown[]) {
        if (typeof context.name !== 'string') {
            throw new Error('Method name is not a string');
        }

        const methodName = lodash.startCase(context.name)

        return test.step(`${methodName}`, () => {
            return target.call(this, ...args);
        });
    };
}