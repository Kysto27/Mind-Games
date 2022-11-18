const generateRandomNumber = (min, max) => Math.round(Math.random() * (max - min) + min);

const generateRandomIndex = (num) => Math.round(Math.random() * num);

export { generateRandomNumber, generateRandomIndex };
