import { useCallback, useEffect, useState } from "react"

export const useDebounce = <V>(value: V, delay: number = 100) => {
	const [debouncedValue, setDebouncedValue] = useState(value);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);
		return () => clearTimeout(timeout);
	}, [value, delay]);

	return debouncedValue;
}

export const useArray = <T>(initialValue: T[]) => {
	const [value, setValue] = useState(initialValue);

	const add = useCallback((newValue: T) => {
		setValue(value => [...value, newValue]);
	}, []);

	const removeIndex = useCallback((index: number) => {
		setValue(value => {
			const tempValue = [...value];
			tempValue.splice(index, 1);
			return tempValue;
		});
	}, []);

	const clear = useCallback(() => setValue([]), []);

	return {value, add, removeIndex, clear};
}