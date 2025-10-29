export default function createArrayWithRandomNumbers(size) {
  let numbers = [];
  for (let i = 0; i < size; i++) {
    const randomNumber = Math.floor(Math.random() * 100 + 1);
    numbers.push(randomNumber);
  }
  return numbers;
}
