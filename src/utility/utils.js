export const getRandomNumber = (input) => {
	parseInt(input)
	return Math.floor(Math.random() * (input - 1) + 1)
};

