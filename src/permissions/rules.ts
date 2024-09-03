/* eslint-disable @typescript-eslint/no-explicit-any */
import { rule } from 'graphql-shield';

export const isAuthenticated = rule({ cache: 'contextual' })(async () => {
	return true;
});
