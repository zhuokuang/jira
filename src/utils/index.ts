export const clearObject = (obj: object) => {
	const result = {...obj};
	Object.keys(result).forEach(key => {
		// @ts-ignore
		const value = obj[key];
		if(!value && value !== 0) {
			// @ts-ignore
			delete result[key];
		}
	});
	return result;
}
