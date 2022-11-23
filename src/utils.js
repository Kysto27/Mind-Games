const generateRandomNumber = (min, max) => Math.round(Math.random() * (max - min) + min);

const generateRandomIndex = (data) => Math.round(Math.random() * Math.floor(data.length));

export { generateRandomNumber, generateRandomIndex };
