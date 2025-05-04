import {useState} from 'react';

/*
 * Similar to useState except that the returned value is controlState unless it's undefined in which case we return the state value
 */
export default function useControlledState<T>(
	initialState: T,
	controlState: T,
) {
	const [state, setState] = useState<T>(initialState);
	return [
		controlState === undefined ? state : controlState,
		setState,
	] as const;
}
