const generateRandomNumber = (min, max) => Math.round(Math.random() * (max - min) + min);

const generateRandomIndex = (data) => Math.floor(Math.random() * data.length);

export { generateRandomNumber, generateRandomIndex };
