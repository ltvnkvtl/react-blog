import { StateSchema } from 'app/providers/store';
import { AsyncThunkAction } from '@reduxjs/toolkit';
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';

type ActionCreatorType<Return, Arg, RejectedVal>
     = (arg: Arg) => AsyncThunkAction<Return, any, { rejectValue: RejectedVal }>;

export class TestAsyncThunk<Return, Arg, RejectedVal> {
    dispatch: jest.MockedFn<any>;

    getState: () => StateSchema;

    actionCreator: ActionCreatorType<Return, Arg, RejectedVal>;

    constructor(actionCreator: ActionCreatorType<Return, Arg, RejectedVal>) {
        this.actionCreator = actionCreator;
        this.dispatch = jest.fn();
        this.getState = jest.fn();
    }

    async callThunk(arg: Arg) {
        const action = this.actionCreator(arg);
        const result = await action(this.dispatch, this.getState, undefined);

        return result;
    }
}
