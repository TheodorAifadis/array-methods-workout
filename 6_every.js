// every, checkar ifall alla element i en array överensstämmer med en funktion
// beroende på om alla element i arrayen överensstämmer med funktionen returner true eller false
const countries = ['sverige', 'grekland', 'bulgarien', 'thailand', 'polen']
console.log(countries.every(x => x.length > 4)) // bör ge true då alla element är längre än 4
console.log(countries.every(x => x.length > 5)) // bör ge false då polen är 5 bokstäver