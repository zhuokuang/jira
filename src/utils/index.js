export const clearObject = (obj) => {
	const result = {...obj};
	Object.keys(result).forEach(key => {
		const value = obj[key];
		if(!value && value !== 0) {
			delete result[key];
		}
	});
	return result;
}