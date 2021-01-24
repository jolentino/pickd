export const textConverter = (text) => {
	return text
		.split('-')
		.map((letter) => letter.charAt(0).toUpperCase() + letter.substring(1))
		.join(' ');
};
