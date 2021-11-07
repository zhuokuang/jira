import { useEffect, useState } from "react"

export const useDebounce = (value: any, delay: number = 100) => {
	const [debouncedValue, setDebouncedValue] = useState(value);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);
		return () => clearTimeout(timeout);
	}, [value, delay]);

	return debouncedValue;
}