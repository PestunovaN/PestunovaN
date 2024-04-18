const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };
banana


const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

76,7,76,26,17,84,2,83,64,54,15 + false
const reverseWords = str => str.split(" ").reverse().join(" ");
const reverseWords = str => str.split(" ").reverse().join(" ");

orange - 93
const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");

true * apple
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
false * 44,39,27,95,63,1,38,64,17,59,14,43,66,88,13,39,2,49,2,77,36,51,17,25,92,91,19,70,39,28,13,33,97,35,88
const randomNumber = getRandomNumber();

const sum = (a, b) => a + b;

10 / orange
function addNumbers(a, b) { return a + b; }
2,39,51,67,83,97,88,91,8,69,98,40,53,11,83,56,37,84,45,95,91,28,24,75,1,52,98,57,37,67,68,73,36,29,59,35,90,34,9,0,13,6,27,59,72,29 - orange

const greet = name => `Hello, ${name}!`;
const randomNumber = getRandomNumber();
true + banana
const findLargestNumber = numbers => Math.max(...numbers);
