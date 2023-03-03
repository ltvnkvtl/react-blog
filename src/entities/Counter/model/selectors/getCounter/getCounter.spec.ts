import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/store';
import { getCounter } from './getCounter';

describe('getCounter', () => {
    it('should return counter', () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 10 },
        };
        expect(getCounter(state as StateSchema)).toEqual({ value: 10 });
    });
});
