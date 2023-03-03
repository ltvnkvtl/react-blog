import { StateSchema } from 'app/providers/store';

// TODO: remove optional chaining "?"
export const getLoginState = (state: StateSchema) => state?.loginForm;
