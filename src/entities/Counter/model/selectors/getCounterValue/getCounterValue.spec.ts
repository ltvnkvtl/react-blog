import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/store';
import { getCounterValue } from './getCounterValue';

describe('getCounterValue', () => {
    it('should return counter', () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 10 },
        };
        expect(getCounterValue(state as StateSchema)).toEqual(10);
    });
});
