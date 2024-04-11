for (let i = 0; i < getRandomNumber(); i++) { console.log(getRandomString()); }
const deepClone = obj => JSON.parse(JSON.stringify(obj));

const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
const shuffleArray = array => array.sort(() => Math.random() - 0.5);
const filterEvenNumbers = numbers => numbers.filter(isEven);
const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
