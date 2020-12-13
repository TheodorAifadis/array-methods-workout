// map, .mpat skaper en ny array av en tidigare array där alla element ändras av en specifik funktion
const numbers = [1, 2, 3, 4, 5]
const numbersSquared = numbers.map(x => x * x)
console.log(numbers) // loggar ut den tidigare arrayen
console.log(numbersSquared) // loggar ut den modifierade arrayen