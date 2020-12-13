// some, denna metod checkar så att minst ett element i en array uppfyller funktionen
// den returner alltså sedan true eller false beroende på om det uppfyller funktionen eller ej
const players = ['eric', 'pep', 'jurgen', 'lionel', 'diego']
console.log(players.some(x => x.length === 4)) //true
console.log(players.some(x => x.length === 7)) //false